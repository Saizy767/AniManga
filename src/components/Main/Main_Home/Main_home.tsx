import React, { FC} from "react";

import Card from '../Card/Card'
import {Carousel }from '../Carousel/Carousel'

import styles from './Main_home.module.scss'

interface Props{
    allManga:any,
    lastUpdatedManga:any,
    resentlyAddedManga:any,
}

const Main: FC<Props> = ({allManga, lastUpdatedManga, resentlyAddedManga}) =>{
    return(
        <main className={styles.main_background}>
             <h1 className={styles.main__Category_name}>Recently Added</h1>
            <Carousel>
                { 
                resentlyAddedManga && resentlyAddedManga.map((el: any)=>{
                    return <Card key={el.mal_id} minWidth='190px'
                                {...el}
                                />
                })}
            </Carousel>
            <h1 className={styles.main__Category_name}>Updated Manga</h1>
            <Carousel>
                { 
                lastUpdatedManga && lastUpdatedManga.map((el:any)=>{
                    return <Card key={el.mal_id} minWidth='190px'
                                    {...el}
                                    />
                    })}
            </Carousel>
            <h1 className={styles.main__Category_name}>MANGA</h1>
            <div className={styles.main__form_card}>
                { 
                allManga && allManga.map((el: any)=>{
                    return <Card key={el.mal_id} minWidth='170px'
                                    {...el}
                                />
                })}
            </div>
        </main>
    )
}
export default Main