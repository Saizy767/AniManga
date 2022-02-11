import React, {FC} from "react"

import Navbar from "../components/Navbar/Navbar"
import Sidepanel from '../components/Sidepanel/Sidepanel'
import Main from '../components/Main/Main_Home/Main_home'

const Home: FC = () => {
    return(
        <section>
            <Navbar/>
            <Sidepanel/>
            <Main/>
        </section>
    )
}


export default Home