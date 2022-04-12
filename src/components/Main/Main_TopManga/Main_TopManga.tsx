import React, { FC } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Category_Card from "../../../components/Elements/Card/Category_Card/Category_Card";
import Synopsis from "../../../components/Elements/Synopsis/Synopsis";

import styles from "./Main_TopManga.module.scss"

interface Props{
    categoryManga:any,
}
const Main:FC<Props> = ({categoryManga}) =>{

    const {sidepanel} = useTypedSelector(state => state.giudeButton)
    let Top10 = 10;
    return(
        <main className={sidepanel ? styles.main__background_active : styles.main_background}>
            <div className={styles.main__form_card}>
                    { 
                    categoryManga?.map((el: any,)=>{
                        return (
                        <div className={styles.card}key={el.mal_id}>
                            <h2 className={styles.card__raiting}>#{Top10--}</h2>
                            <h3 className={styles.card__title}>{el.title}</h3>
                            <Category_Card {...el} maxHeigth={'400px'}/>
                            <div style={{marginTop:'50px'}}>
                                <Synopsis element={el.synopsis}/>
                            </div>
                        </div>
                        )
                    })}
            </div>
        </main>
    )
}

export default Main