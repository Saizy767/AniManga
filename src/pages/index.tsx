import React, {FC, useEffect, useState} from "react"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"

import Navbar from "../components/Navbar/Navbar"
import Sidepanel from '../components/Sidepanel/Sidepanel'
import Main from '../components/Main/Main_Home/Main_home'
import Head from "next/head"

const Home: FC = ({ AllManga, LastUpdatedManga, ResentlyAddedManga}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [isLastUpdatedManga, setIsLastUpdatedManga]= useState()
    const [isResentlyAddedManga, setIsResentlyAddedManga]= useState()
    const [isAllManga, setIsAllManga]= useState()
    
    useEffect(()=>{
      if(LastUpdatedManga.top){
        setIsLastUpdatedManga(LastUpdatedManga.top.slice(0,10))
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [AllMangaRes, LastUpdatedMangaRes, ResentlyAddedMangaRes] = await Promise.all([ 
      fetch(`https://api.jikan.moe/v3/top/manga/4`),
      fetch('https://api.jikan.moe/v3/top/manga/1/bypopularity'),
      fetch('https://api.jikan.moe/v3/top/manga/1'),
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