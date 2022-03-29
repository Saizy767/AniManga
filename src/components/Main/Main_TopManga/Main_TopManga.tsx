import React, { FC } from "react";
import { connect } from "react-redux";
import Synopsis from "../../../components/Elements/Synopsis/Synopsis";
import { rootReducerType } from "../../../redux/rootReducer/rootReducer";
import Card from "../../../components/Elements/Card/Card";
import styles from "./Main_TopManga.module.scss"

interface Props{
    categoryManga:any,
    sidepanel:boolean
}
const Main:FC<Props> = ({categoryManga, sidepanel}) =>{
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
                            <Card {...el} maxHeigth={'400px'}/>
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

const mapStateToProps = (state: rootReducerType) => ({ 
    sidepanel: state.sidepanel.activity
})

export default connect(mapStateToProps,null)(Main)