import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { FC, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidepanel from "../../components/Sidepanel/Sidepanel";
import Main from "../../components/Main/Main_search/Main_search"
import Head from "next/head";

const SearchPage:FC<InferGetServerSidePropsType<typeof getServerSideProps>>=({searchManga, TopManga})=>{
    const [isTopManga, setIsTopManga]= useState()
    const [isSearchResult, setIsSearchResult]= useState()

    useEffect(()=>{
      if(TopManga.top){
        setIsTopManga(TopManga.top)
      }
    },[TopManga.top])

    useEffect(()=>{
        if(searchManga.results){
            setIsSearchResult(searchManga.results)
        }
      },[searchManga.results])
    return(
        <>
            <Head>
                <title>Animanga</title>
            </Head>
            <Navbar topManga={isTopManga}/>
            <Sidepanel/>
            <Main searchManga={isSearchResult}/>
        </>
    )
}
export const getServerSideProps: GetServerSideProps = async({query})=>{
    const searchName= query.name
    const [searchMangaRes, TopMangaRes] = await Promise.all([
        fetch(`https://api.jikan.moe/v3/search/manga?q=${searchName}}&order_by=title&sort=asc&limit=40}`),
        fetch(`https://api.jikan.moe/v3/top/manga/1`),
    ])
    const [searchManga,TopManga] = await Promise.all([
        searchMangaRes.json(),
        TopMangaRes.json()
    ])
    return {
        props: {searchManga, TopManga}
    }
}

export default SearchPage