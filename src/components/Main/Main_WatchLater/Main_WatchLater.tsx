import React, { FC } from "react";

import styles from './Main_WatchLater.module.scss'
import Avatar_User from "../../../components/Elements/Avatar_User/Avatar_User";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import SavedMangaCell from "../../../components/Elements/SavedMangaCell/SavedMangaCell";

const Main:FC= () =>{
    const {sidepanel} = useTypedSelector(state => state.giudeButton)

    return(
        <>
        <main className={ sidepanel ? styles.main__background_active : styles.main__background}>
            <div className={styles.main__box}>
                <div className={styles.selected__box}>
                        <div className={styles.selected__img}>
                            <img alt='first added manga' className={styles.selected__img_poster}></img>
                        </div>
                        <div className={styles.selected__text}>
                            <span className={styles.selected__title}>Watch later</span>
                            <div className={styles.selected__description}>
                                <span className={styles.selected__part}>0 mangas</span>
                                <span className={styles.selected__part}>Last added : Date</span>
                            </div>
                        </div>
                        <hr className={styles.selected__row}/>
                        <div className={styles.selected__user}>
                            <Avatar_User/>
                            <span className={styles.selected__user_name}>User Name</span>
                        </div>
                </div>
                <div className={styles.slider__box}>
                    <div className={styles.slider__place}>
                        <ul className={styles.slider__ul}>
                        {[...Array(15)].map((volume, index)=>{
                                index+=1
                                return(
                                <SavedMangaCell key={index}/>
                                )})}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Main