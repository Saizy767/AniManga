import { GetServerSideProps } from "next";
import React, { FC, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidepanel from "../../components/Sidepanel/Sidepanel";
import Main from '../../components/Main/Main_Top/Main_Top'
import NextNProgress from "../../components/Elements/ProgressBar/ProgressBar";

interface Props{
    TopManga:any
}
const topTen :FC<Props> = ({TopManga})=>{
    const [isTopManga, setIsTopManga]= useState()

    useEffect(()=>{
        if(TopManga.top){
          setIsTopManga(TopManga.top)
        }
      },[TopManga.top])
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
            <Main/>
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


export default topTen