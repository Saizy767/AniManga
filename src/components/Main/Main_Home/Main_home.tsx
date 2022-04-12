import React, { FC} from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { changeUpdatedScroll } from "../../../redux/reducer/updatedButtonSlice"
import { changeRecentlyScroll} from "../../../redux/reducer/recentlyButtonSlice"
import Card from '../../Elements/Card/Home_Card/Home_Card'
import {Carousel }from '../../Elements/Carousel/Carousel'

import styles from './Main_home.module.scss'

interface Props{
    allManga:any,
    lastUpdatedManga:any,
    resentlyAddedManga:any,
}

const Main: FC<Props> = ({allManga, lastUpdatedManga, resentlyAddedManga}) =>{
    const {numberUpdated} = useTypedSelector(state => state.scrollUpdatedCarousel)
    const {weigthUpdated} = useTypedSelector(state => state.scrollUpdatedCarousel)

    const {numberRecently} = useTypedSelector(state => state.scrollRecentlyCarousel)
    const {weigthRecently} =useTypedSelector(state => state.scrollRecentlyCarousel)

    const {sidepanel} = useTypedSelector(state => state.giudeButton)
    
    return(
        <main className={sidepanel ? styles.main__background_active : styles.main_background}>
            <h1 className={styles.main__Category_name}>Recently Added</h1>
            <Carousel changeScrollHome={changeRecentlyScroll}
                      number={numberRecently}
                      weigth={weigthRecently}>
                { 
                resentlyAddedManga && resentlyAddedManga.map((el: any)=>{
                    return <Card key={el.mal_id} minWidth='190px'
                                {...el}
                                />
                })}
            </Carousel>
            <h1 className={styles.main__Category_name}>Updated Manga</h1>
            <Carousel changeScrollHome={changeUpdatedScroll}
                      number={numberUpdated}
                      weigth={weigthUpdated}>
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
                    return <Card key={el.mal_id}
                                    {...el}
                                />
                })}
            </div>
            <div></div>
        </main>
    )
}

export default Main