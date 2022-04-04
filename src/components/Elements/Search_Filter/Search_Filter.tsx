import { useRouter } from "next/router";
import React, { FC } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaRandom } from "react-icons/fa";
import styles from './Search_Filter.module.scss'

interface Props {
    idType:any
}

const Search_Filter:FC<Props>= ({idType}) => {
    const router = useRouter()

    const handleRandomManga = () =>{
        console.log(idType)
        router.push(`${idType.type}/${idType.mal_id}`)
    }
    return(
    <div className={styles.search_filter}>
        <div className={styles.search_filter__box}>
            <div className={styles.search_filter__filterFlex}>
                <select className={styles.search_filter__genre}>
                    <option>Genre</option>
                    <option>Manga</option>
                </select>
                <select className={styles.search_filter__type}>
                    <option>Type</option>
                    <option>Manga</option>
                    <option>Any</option>
                </select>
            </div>
            <div className={styles.search_filter__buttonFlex}>
                <button className={styles.search_filter__randomButton} onClick={handleRandomManga}>
                    <FaRandom className={styles.search_filter__buttonIcon}/>
                    Random</button>
                <button className={styles.search_filter__searchButton}>
                    <BiSearchAlt2 className={styles.search_filter__buttonIcon}/>
                    Search</button>
            </div>
        </div>
    </div>
    )
}

export default Search_Filter