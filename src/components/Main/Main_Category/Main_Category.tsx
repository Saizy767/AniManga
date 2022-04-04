import { useRouter } from "next/router";
import React,{FC} from "react";
import { connect } from "react-redux";
import { rootReducerType } from "../../../redux/rootReducer/rootReducer";
import {FaRandom} from 'react-icons/fa'
import {BiSearchAlt2} from 'react-icons/bi'

import styles from "./Main_Category.module.scss"
import Search_Filter from "src/components/Elements/Search_Filter/Search_Filter";



interface Props{
    sidepanel:boolean,
    idType: any,
}

const Main:FC<Props> = ({sidepanel, idType}) => {
    return(
        <main className={sidepanel ? styles.main__background_active : styles.main__background}>
            <Search_Filter idType={idType}/>
        </main>
    )
}


const mapStateToProps= (state:rootReducerType)=>({
    sidepanel: state.sidepanel.activity
})
export default connect(mapStateToProps,null)(Main)