import { GetServerSideProps } from "next";
import React, { FC, useEffect, useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidepanel from "../../../components/Sidepanel/Sidepanel";
import NextNProgress from "../../../components/Elements/ProgressBar/ProgressBar";
import Main from "../../../components/Main/Main_TopManga/Main_TopManga";

interface Props{
    TopManga:any,
    CategoryManga:any
}
const topTen :FC<Props> = ({TopManga, CategoryManga})=>{
    const [isTopManga, setIsTopManga]= useState()
    const [isCategoryManga, setIsCategoryManga] = useState()

    useEffect(()=>{
        if(TopManga.top){
          setIsTopManga(TopManga.top)
        }
      },[TopManga.top])

    useEffect(()=>{
      if(CategoryManga.manga){
        setIsCategoryManga(CategoryManga.manga.slice(0,10).reverse())
      }
    },[CategoryManga.manga])
  
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
            <Main categoryManga={isCategoryManga}/>
            
        </>
    )
} 
export const getServerSideProps: GetServerSideProps = async (context) => {
    let id= context.query.id
    
    const [TopMangaRes, CategoryMangaRes] = await Promise.all([ 
        fetch(`https://api.jikan.moe/v3/top/manga/4`),
        fetch(`https://api.jikan.moe/v3/genre/manga/${id}/1`),
      ])
  
  const [TopManga, CategoryManga] = await Promise.all([
      TopMangaRes.json(),
      CategoryMangaRes.json(),
    ])
    return {
      props: {TopManga, CategoryManga},
    }
  }


export default topTen