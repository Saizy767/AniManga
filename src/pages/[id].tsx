import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { FC } from "react";

import Main from "../components/Main/Main_manga/Main_manga";
import Navbar from "../components/Navbar/Navbar";
import SidePanel from "../components/Sidepanel/Sidepanel";


export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params.id
    const [mangaRes, charactersRes] = await Promise.all([ 
        fetch(`https://api.jikan.moe/v3/manga/${id}`),
        fetch(`https://api.jikan.moe/v3/manga/${id}/characters`),
      ])
    const [manga, characters] = await Promise.all([
      mangaRes.json(),
      charactersRes.json()
    ])
    console.log(id + ' id')
    return {
      props: {manga, characters}, // will be passed to the page component as props
    }
  }

const MangaPage: FC = ({manga, characters}: InferGetServerSidePropsType<typeof getServerSideProps>) =>{
    console.log(manga)
    console.log(characters)
    return(
        <>
        <Navbar/>
        <SidePanel/>
        <Main {...manga}{...characters}/>
        </>
    )
}
export default MangaPage