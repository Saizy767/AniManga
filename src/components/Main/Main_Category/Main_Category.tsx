import { useRouter } from "next/router";
import React,{FC} from "react";
import { connect } from "react-redux";
import { rootReducerType } from "../../../redux/rootReducer/rootReducer";

import styles from "./Main_Category.module.scss"
import Search_Filter from "src/components/Elements/Search_Filter/Search_Filter";
import Card from "src/components/Elements/Card/Home_Card/Home_Card";



interface Props{
    sidepanel:boolean,
    idType: any,
    allManga:any,
}

const Main:FC<Props> = ({sidepanel, idType, allManga}) => {
    console.log(allManga)
    return(
        <main className={sidepanel ? styles.main__background_active : styles.main__background}>
            <Search_Filter idType={idType}/>
            <div className={styles.main__form_card}>
                { 
                allManga && allManga.map((el: any)=>{
                    return <Card key={el.mal_id}
                                    {...el}
                                />
                })}
            </div>
        </main>
    )
}


const mapStateToProps= (state:rootReducerType)=>({
    sidepanel: state.sidepanel.activity
})
export default connect(mapStateToProps,null)(Main)