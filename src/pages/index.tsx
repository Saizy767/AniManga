import React, {FC} from "react"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { connect } from "react-redux"

import Navbar from "../components/Navbar/Navbar"
import Sidepanel from '../components/Sidepanel/Sidepanel'
import Main from '../components/Main/Main_Home/Main_home'
import { rootReducerType } from "src/redux/rootReducer/rootReducer"

const mapStateToProps=(state: rootReducerType)=>({
    searchResult : state.search_box.text
})

export const getServerSideProps: GetServerSideProps = async (searchResult) => {
    const [searchRes] = await Promise.all([ 
        fetch(`https://api.jikan.moe/v3/search/manga?q=${searchResult}&order_by=title&sort=asc&limit=10}`),
      ])
    const [search] = await Promise.all([
      searchRes.json()
    ])
    return {
      props: {search}, // will be passed to the page component as props
    }
  }

const Home: FC = ({search}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(search)
    return(
        <section>
            <Navbar/>
            <Sidepanel/>
            <Main/>
        </section>
    )
}



export default connect(mapStateToProps,null)(Home)