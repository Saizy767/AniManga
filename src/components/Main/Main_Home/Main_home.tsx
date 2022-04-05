import React, { FC, useRef} from "react";
import { connect } from "react-redux";
import { rootReducerType } from "src/redux/rootReducer/rootReducer";

import Card from '../../Elements/Card/Home_Card/Home_Card'
import {Carousel }from '../../Elements/Carousel/Carousel'

import styles from './Main_home.module.scss'

interface Props{
    allManga:any,
    lastUpdatedManga:any,
    resentlyAddedManga:any,
    sidepanel: boolean,
}

const Main: FC<Props> = ({allManga, lastUpdatedManga, resentlyAddedManga, sidepanel}) =>{
    return(
        <main className={sidepanel ? styles.main__background_active : styles.main_background}>
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
                    return <Card key={el.mal_id}
                                    {...el}
                                />
                })}
            </div>
            <div></div>
        </main>
    )
}

const mapStateToProps = (state: rootReducerType) => ({ 
    sidepanel: state.sidepanel.activity
})

export default connect(mapStateToProps,null)(Main)