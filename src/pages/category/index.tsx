import { GetServerSideProps } from "next";
import React, { FC, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidepanel from "../../components/Sidepanel/Sidepanel";
import NextNProgress from "../../components/Elements/ProgressBar/ProgressBar";
import Main from "../../components/Main/Main_Category/Main_Category";


interface Props{
    TopManga:any,
    RandomManga:any,
    AllManga:any,
}
const topTen :FC<Props> = ({TopManga, RandomManga, AllManga})=>{
    const [isTopManga, setIsTopManga]= useState()
    const [isIdType, setIsIdType]= useState({})
    const [isAllManga, setIsAllManga] = useState()

    useEffect(()=>{
        if(TopManga.top){
          setIsTopManga(TopManga.top)
        }
      },[TopManga.top])

    useEffect(()=>{
      if(AllManga.top){
        setIsAllManga(AllManga.top)
      }
    },[AllManga.top])

    useEffect(()=>{
        if(RandomManga.data.mal_id && RandomManga.data.type){
          setIsIdType(values => ({...values, 'mal_id' :RandomManga.data.mal_id})),
          setIsIdType(values => ({...values, 'type' :RandomManga.data.type}))
        }
      },[RandomManga.data.mal_id, RandomManga.data.type])

    console.log(AllManga)
    return(
        <>
            <NextNProgress
              color="orange"
              startPosition={0.2}
              stopDelayMs={300}
              height={4}
              showOnShallow={true}
            />
            <Navbar topManga={isTopManga}/>
            <Sidepanel/>
            <Main idType={isIdType} allManga={isAllManga}/>
        </>
    )
} 
export const getServerSideProps: GetServerSideProps = async (context) => {
    
    const [TopMangaRes, RandomMangaRes, AllMangaRes] = await Promise.all([ 
        fetch(`https://api.jikan.moe/v3/top/manga/4`),
        fetch(`https://api.jikan.moe/v4/random/manga`),
        fetch(`https://api.jikan.moe/v3/top/manga/1`),
      ])
  
  const [TopManga, RandomManga, AllManga] = await Promise.all([
      TopMangaRes.json(),
      RandomMangaRes.json(),
      AllMangaRes.json()
    ])
    return {
      props: {TopManga, RandomManga, AllManga},
    }
  }


export default topTen