import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { FC } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidepanel from "../../components/Sidepanel/Sidepanel";
import Main from "../../components/Main/Main_search/Main_search"
import Head from "next/head";

const SearchPage:FC<InferGetServerSidePropsType<typeof getServerSideProps>>=({searchManga, TopManga})=>{
    const topManga = TopManga.top
    const result = searchManga.results
    return(
        <>
            <Head>
                <title>Animanga</title>
            </Head>
            <Navbar topManga={topManga}/>
            <Sidepanel/>
            <Main searchManga={result}/>
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