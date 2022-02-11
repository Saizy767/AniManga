import React, { FC } from "react";

import Main from "../components/Main/Main_manga/Main_manga";
import Navbar from "../components/Navbar/Navbar";
import SidePanel from "../components/Sidepanel/Sidepanel";

const MangaPage: FC = () =>{
    return(
        <>
        <Navbar/>
        <SidePanel/>
        <Main/>
        </>
    )
}
export default MangaPage