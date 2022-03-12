import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Main from "../components/Main/Main_WatchLater/Main_WatchLater";
import Navbar from "../components/Navbar/Navbar";
import Sidepanel from "../components/Sidepanel/Sidepanel";

const WatchLaterPage: InferGetServerSidePropsType<typeof getServerSideProps> = ({TopManga}) => {
    const [isTopManga, setIsTopManga]= useState()

    useEffect(()=>{
        if(TopManga.top){
          setIsTopManga(TopManga.top)
        }
      },[TopManga.top])
    return(
        <>
            <Head>
                <title>Animanga</title>
            </Head>
            <section>
            <Navbar topManga={isTopManga}/>
            <Sidepanel/>
            <Main/>
            </section>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const [TopMangaRes] = await Promise.all([ 
        fetch(`https://api.jikan.moe/v3/top/manga/4`),
      ])
  
  const [TopManga] = await Promise.all([
      TopMangaRes.json(),
    ])
    return {
      props: {TopManga},
    }
  }

  export default WatchLaterPage