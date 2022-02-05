import React, {FC} from "react"

import styles from '../styles/Home/index.module.scss'

import {VscMenu} from 'react-icons/vsc'
import {BiSearchAlt2} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'


const Home: FC = () => {
    return(
        <section>
            <nav className ={styles.navbar}>
                <div className={styles.navbar__guide_button}>
                    <VscMenu className={styles.navbar__guide_icon}/>
                </div>
                <div className={styles.navbar__logo_place}>
                    <div style={{display:'inline-block', position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}>
                        <span className={styles.navbar__logo} style={{color:"#EC790F"}}>Ani</span>
                        <span className={styles.navbar__logo} style={{color:"black"}}>Manga</span>
                    </div>
                </div>    
                <div className={styles.navbar__search}>
                    <div className={styles.search__place}>
                        <input type="text" className={styles.search__input}/>
                        <div className={styles.search__button}>
                            <BiSearchAlt2 className={styles.search__icon}/>
                        </div>
                    </div>
                </div>
                <div className={styles.navbar__avatar}>
                    <div className={styles.avatar__place}>
                        <div className={styles.avatar__box}>
                            <BsFillPersonFill className={styles.avatar__icon}/>
                        </div>
                    </div>
                </div>
                <div className={styles.navbar__switch}>
                    <div className={styles.switch__place}>
                        <div className={styles.switch__box}></div>
                        <div className={styles.switch__switcher}></div>
                    </div>
                </div>
            </nav>
        </section>
    )
}


export default Home