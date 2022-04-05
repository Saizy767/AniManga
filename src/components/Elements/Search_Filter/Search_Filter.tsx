import { useRouter } from "next/router";
import React, { FC } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaRandom } from "react-icons/fa";
import { Array_Genre } from "src/api/Genres";
import { Array_Types } from "src/api/Types";
import styles from './Search_Filter.module.scss'

interface Props {
    idType:any
}

const Search_Filter:FC<Props>= ({idType}) => {
    const router = useRouter()

    const handleRandomManga = () =>{
        console.log(idType)
        router.push(`./${idType.type}/${idType.mal_id}`)
    }
    return(
    <div className={styles.search_filter}>
        <div className={styles.search_filter__box}>
            <div className={styles.search_filter__filterFlex}>
                <select className={styles.search_filter__genre}>
                    <option disabled>Genres</option>
                    {Array_Genre && Array_Genre.map((el)=>{
                        return(
                            <option>{el.name}</option>
                        )
                    })}
                </select>
                <select className={styles.search_filter__type}>
                    <option disabled>Type</option>
                    {Array_Types && Array_Types.map((el)=>{
                        return(
                            <option>{el.name}</option>
                        )
                    })}
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