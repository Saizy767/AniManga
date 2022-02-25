import React, { ChangeEvent, FC } from "react";
import { connect } from "react-redux";

import {BiSearchAlt2} from 'react-icons/bi'
import {searchChangerAction} from '../../../redux/action/SearchBoxAction';

import styles from './Search.module.scss'
import { rootReducerType } from "src/redux/rootReducer/rootReducer";

interface Props{
    searchResult:string,
    searchChangerAction:(text:string) => void,
}
const Search: FC<Props> = ({searchResult, searchChangerAction}) => {
    console.log(searchResult)
    return(
        <div className={styles.navbar__search}>
        <div className={styles.search__place}>
            <input type="text" className={styles.search__input} placeholder={'Search'} value={searchResult}
            onChange={(event:ChangeEvent<HTMLInputElement>)=>{searchChangerAction(event.target.value)}}
            />
            <div className={styles.search__button}>
                <BiSearchAlt2 className={styles.search__icon}/>
            </div>
        </div>
        </div>

    )
}
const mapStateToProps=(state:rootReducerType)=>({
    searchResult:state.search_box.text
})
const mapDispatchToProps={
    searchChangerAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)