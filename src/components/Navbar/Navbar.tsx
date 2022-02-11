import React, {FC} from "react";

import Switch from "./Switch/Switch";
import Avatar from "./Avatar/Avatar";
import Guide_button from "./Guide_button/Guide_button";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";

import styles from './Navbar.module.scss'


const Navbar: FC = () =>{
    return (
        <nav className ={styles.navbar}>
            <Guide_button/>   
            <Logo/>
            <Search/>
            <Avatar/>
            <Switch/>
        </nav>
    )
}
export default Navbar