import React, {FC} from "react";

import Avatar from "./Avatar/Avatar";
import Guide_button from "./Guide_button/Guide_button";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";

import styles from './Navbar.module.scss'


interface Props{
    topManga:any,
}
const Navbar: FC<Props> = ({topManga}) =>{
    return (
        <nav className ={styles.navbar}>
            <Guide_button/>   
            <Logo/>
            <div className={styles.navbar__search}>
                <Search topManga={topManga}/>
            </div>
            <Avatar/>

        </nav>
    )
}
export default Navbar