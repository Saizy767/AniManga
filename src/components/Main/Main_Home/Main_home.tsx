import React, { FC, useEffect, useState } from "react";


import Card from '../Card/Card'
import styles from './Main_home.module.scss'

const Main: FC = () =>{
    
    interface Manga{
        mal_id:number,
        score:number,
        title: string,
        type: string,
        image_url: string,
        key: string,
    }
    const [TopManga, SetTopManga] = useState<Array<Manga>>([])

    const GetTopManga = async () =>{
        const temp: any = await fetch('https://api.jikan.moe/v3/top/manga/1/bypopularity')
            .then(res=> res.json())
            SetTopManga(temp.top.slice(0,50))}

    useEffect(()=>{
        GetTopManga()
    },[])
    console.log(TopManga)
    
    return(
        <main className={styles.main_background}>
            <div style={{width:'100%', height:'20%', position:'relative'}}></div>
            <div className={styles.main__Daily_updates}>
                { 
                TopManga.map((el)=>{
                    return <Card key={el.mal_id}
                                {...el}
                                />
                })}
            </div>
        </main>
    )
}
export default Main