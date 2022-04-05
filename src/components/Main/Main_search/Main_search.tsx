import React, { FC } from "react";
import { useRouter } from "next/router";

import Card from "../../Elements/Card/Home_Card/Home_Card";

import styles from "./Main_search.module.scss"


interface Props{
    searchManga:any,
}

const Main : FC<Props> = ({searchManga})=>{
    const router =useRouter()
    return(
        <>
        <main className={styles.main_background}>
            <div className={styles.main__box}>
                <span className={styles.main__box_text}>Search results of "{router.query.q}"</span>
            </div>
            <div className={styles.main__form_card}>
                {searchManga && searchManga.map((el: any)=>{
                    return <Card key={el.mal_id}
                                    {...el}/>
                })}
            </div>
        </main>
        </>
    )
}

export default Main