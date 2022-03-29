import React, {FC, useEffect, useState} from "react"
import {GetServerSideProps, InferGetServerSidePropsType } from "next"
import NextNProgress from "../components/Elements/ProgressBar/ProgressBar"
import Head from "next/head"

import Navbar from "../components/Navbar/Navbar"
import Sidepanel from '../components/Sidepanel/Sidepanel'
import Main from '../components/Main/Main_Home/Main_home'


const Home: FC = ({ AllManga, LastUpdatedManga, ResentlyAddedManga}: InferGetServerSidePropsType<typeof getServerSideProps> ) => {

    const [isLastUpdatedManga, setIsLastUpdatedManga]= useState()
    const [isResentlyAddedManga, setIsResentlyAddedManga]= useState()
    const [isAllManga, setIsAllManga]= useState()

    useEffect(()=>{
      if(LastUpdatedManga.top){
        setIsLastUpdatedManga(LastUpdatedManga.top.slice(0,5))
      }
    },[LastUpdatedManga.top])

    useEffect(()=>{
      if(ResentlyAddedManga.top){
        setIsResentlyAddedManga(ResentlyAddedManga.top.slice(0,10))
      }
    },[ResentlyAddedManga.top])

    useEffect(()=>{
      if(AllManga.top){
        setIsAllManga(AllManga.top)
      }
    },[AllManga.top])
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
          <title>Animanga</title>
        </Head>
          <section>
              <Navbar topManga={isAllManga}/>
              <Sidepanel/>
              <Main allManga={isAllManga}
                    lastUpdatedManga={isLastUpdatedManga}
                    resentlyAddedManga={isResentlyAddedManga}/>
          </section>
      </>
    )
}

export const getServerSideProps : GetServerSideProps = async (context)=>{
  const [AllMangaRes, LastUpdatedMangaRes, ResentlyAddedMangaRes] = await Promise.all([ 
    fetch(`https://api.jikan.moe/v3/top/manga/1`),
    fetch('https://api.jikan.moe/v3/top/manga/1/bypopularity'),
    fetch('https://api.jikan.moe/v3/top/manga/3'),
  ])

const [AllManga, LastUpdatedManga, ResentlyAddedManga] = await Promise.all([
  AllMangaRes.json(),
  LastUpdatedMangaRes.json(),
  ResentlyAddedMangaRes.json(),
])
return {
  props: {AllManga, LastUpdatedManga, ResentlyAddedManga},
}
}


export default Home