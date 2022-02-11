import React, { FC } from "react";

import {BiSearchAlt2} from 'react-icons/bi'

import styles from './Search.module.scss'

const Search: FC = () => {
    return(
        <div className={styles.navbar__search}>
        <div className={styles.search__place}>
            <input type="text" className={styles.search__input} placeholder={'Search'}/>
            <div className={styles.search__button}>
                <BiSearchAlt2 className={styles.search__icon}/>
            </div>
        </div>
        </div>

    )
}

export default Search