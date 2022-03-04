import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import React, { FC } from "react";

import Main from "../../components/Main/Main_manga/Main_manga";
import Navbar from "../../components/Navbar/Navbar";
import SidePanel from "../../components/Sidepanel/Sidepanel";


const MangaPage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({manga, characters, TopManga}) =>{
    const topManga = TopManga.top
    return(
        <>
        <Head>
                <title>{manga.title_english || manga.title}</title>
        </Head>
        <Navbar topManga={topManga}/>
        <SidePanel/>
        <Main manga={manga} {...characters}/>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params.id // add promise because id should be a number 
  const [mangaRes, charactersRes, TopMangaRes] = await Promise.all([ 
      fetch(`https://api.jikan.moe/v3/manga/${id}`),
      fetch(`https://api.jikan.moe/v3/manga/${id}/characters`),
      fetch(`https://api.jikan.moe/v3/top/manga/1`),
    ])
  const [manga, characters, TopManga] = await Promise.all([
    mangaRes.json(),
    charactersRes.json(),
    TopMangaRes.json()
  ])
  return {
    props: {manga, characters, TopManga},
  }
}

export default MangaPage