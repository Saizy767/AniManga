import React, { FC } from "react";
import Image from "next/image";

import Logo from "../../../images/8008.jpeg";

import styles from './Main_manga.module.scss'

const Main: FC = () =>{
    return(
        <main className={styles.main_background}>
            <div style={{width:'100%', height:'30%', position:'relative'}}></div>
            <div className={styles.main__box}>
                <div className={styles.main__description}></div>
                    <Image src={Logo} alt='logo' className={styles.main__picture}/>
            </div>
        </main>
    )
}
export default Main