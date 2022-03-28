import React, { FC } from "react";
import { connect } from "react-redux";
import { rootReducerType } from "../../../redux/rootReducer/rootReducer";

import TopCard from "../../../components/Elements/Top_Card/Top_Card";
import { Array_top } from "./Tops";

import styles from './Main_Top.module.scss'

interface Props {
    sidepanel: boolean,
}
const Main:FC<Props> =({sidepanel})=>{
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


const mapStateToProps = (state: rootReducerType) => ({ 
    sidepanel: state.sidepanel.activity
})
export default connect(mapStateToProps,null)(Main)