import React, { FC} from "react";

import { useRecentlyAddedManga } from "../../../hooks/useRecentlyAddedManga";
import { useLastManga } from "../../../hooks/useLastUpdatedManga";
import { useAllManga } from "../../../hooks/useAllManga";
import Card from '../Card/Card'
import {Carousel }from '../Carousel/Carousel'

import styles from './Main_home.module.scss'

const Main: FC = () =>{
    const RecentlyAddedManga= useRecentlyAddedManga()
    const LastManga = useLastManga()
    const AllManga :Array<object>= useAllManga('top/manga/1')
    return(
        <main className={styles.main_background}>
             <h1 className={styles.main__Category_name}>Recently Added</h1>
            <Carousel>
                { 
                RecentlyAddedManga.map((el)=>{
                    return <Card key={el.mal_id} minWidth='190px'
                                {...el}
                                />
                })}
            </Carousel>
            <h1 className={styles.main__Category_name}>Updated Manga</h1>
            <Carousel>
                { 
                LastManga.map((el)=>{
                    return <Card key={el.mal_id} minWidth='190px'
                                    {...el}
                                    />
                    })}
            </Carousel>
            <h1 className={styles.main__Category_name}>MANGA</h1>
            <div className={styles.main__form_card}>
                { 
                AllManga.map((el: any)=>{
                    return <Card key={el.mal_id} minWidth='170px'
                                    {...el}
                                />
                })}
            </div>
        </main>
    )
}
export default Main