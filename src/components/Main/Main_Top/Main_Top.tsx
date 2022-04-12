import React, { FC } from "react";

import TopCard from "../../Elements/Card/Top_Card/Top_Card";
import { Array_top } from "../../../api/Tops";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import styles from './Main_Top.module.scss'

const Main:FC =()=>{
    const {sidepanel} = useTypedSelector(state => state.giudeButton)

    return(
        <>
            <main className={sidepanel ? styles.main__background_active : styles.main__background}>
                <div className={styles.main__form}>
                    {Array_top.map((el)=>{
                        return(
                            <TopCard name={el.name} id={el.id} image={el.image} key={el.id} shortname={el.shortName}/>
                        )
                        })}
                </div>
            </main>
        </>
    )
}

export default Main