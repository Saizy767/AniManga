import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import React, { FC, useEffect, useState } from "react";
import NextNProgress from "../../components/Elements/ProgressBar/ProgressBar";

import Main from "../../components/Main/Main_manga/Main_manga";
import Navbar from "../../components/Navbar/Navbar";
import SidePanel from "../../components/Sidepanel/Sidepanel";


const MangaPage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({manga, characters, topManga}) =>{
  const [isTopManga, setIsTopManga]= useState()
  const [isCharacter, setIsCharacter] = useState()


  useEffect(()=>{
    if(topManga?.top){
      setIsTopManga(topManga.top)
    }
  },[topManga?.top])

  useEffect(()=>{
    if(characters?.characters){
      setIsCharacter(characters.characters.slice(0,50))
    }
  },[characters])
    return(
        <>
        <NextNProgress
          color="orange"
          startPosition={0.2}
          stopDelayMs={300}
          height={4}
          showOnShallow={true}
        />
        <Head>
                <title>{manga?.title_english || manga?.title}</title>
        </Head>
        <Navbar topManga={isTopManga}/>
        <SidePanel/>
        <Main manga={manga} characters={isCharacter}/>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    let id:string|string[] =context.params.id;
    const [mangaRes, charactersRes, topMangaRes] = await Promise.all([ 
        fetch(`https://api.jikan.moe/v3/manga/${id}`),
        fetch(`https://api.jikan.moe/v3/manga/${id}/characters`),
        fetch(`https://api.jikan.moe/v3/top/manga/1`),
      ])
    const [manga, characters, topManga] = await Promise.all([
      mangaRes.json(),
      charactersRes.json(),
      topMangaRes.json()
    ])
  return {
    props: {manga, characters, topManga},
  }
}
export default MangaPage