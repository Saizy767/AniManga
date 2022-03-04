import React, {FC} from "react"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { connect } from "react-redux"

import Navbar from "../components/Navbar/Navbar"
import Sidepanel from '../components/Sidepanel/Sidepanel'
import Main from '../components/Main/Main_Home/Main_home'
import { rootReducerType } from "src/redux/rootReducer/rootReducer"
import Head from "next/head"

const Home: FC = ({ AllManga, LastUpdatedManga, ResentlyAddedManga}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const lastUpdatedManga = LastUpdatedManga.top.slice(0,10)
    const resentlyAddedManga = ResentlyAddedManga.top.slice(0,10)
    const allManga = AllManga.top
    return(
      <>
      <Head>
        <title>Animanga</title>
      </Head>
        <section>
            <Navbar topManga={allManga}/>
            <Sidepanel/>
            <Main allManga={allManga}
                  lastUpdatedManga={lastUpdatedManga}
                  resentlyAddedManga={resentlyAddedManga}/>
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

const mapStateToProps=(state: rootReducerType)=>({
  searchResult : state.search_box.state
})




export default connect(mapStateToProps,null)(Home)