import React, { ChangeEvent, FC, useCallback , useEffect, useRef, useState} from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";

import {BiSearchAlt2} from 'react-icons/bi'
import {searchChangerAction} from '../../../redux/action/SearchBoxAction';

import styles from './Search.module.scss'
import { rootReducerType } from "src/redux/rootReducer/rootReducer";


interface Props{
    searchResult:string,
    searchChangerAction:(text:string) => void,
    topManga?:any,
}
const Search: FC<Props> = ({searchResult, searchChangerAction, topManga}) => {
    const router = useRouter()
    const searchRef =useRef(null)
    const [active, setActive] = useState(false)
    const [listManga, setList] = useState([])

    const onFocus = useCallback(()=>{
        setActive(true)
        window.addEventListener('click', onClick)
    },[])

    const onClick = useCallback((event)=>{
        if (searchRef.current && !searchRef.current.contains(event.target)){
            setActive(false)
            window.removeEventListener('click', onClick)}
    },[searchRef.current])

    const handleSearch = useCallback((event:ChangeEvent<HTMLInputElement>)=>{
        searchChangerAction(event.target.value)
    },[])

    const handleKeyPress = useCallback((target)=>{
        if (target.charCode === 13){
            router.push(`/search/${searchResult}`)
        }
    },[searchResult])

    const fetchManga = async (event:string) => {
        const temp = 
                await fetch(`https://api.jikan.moe/v3/search/manga?q=${event}&order_by=title&sort=asc&limit=5}`)
        .then((Response)=>Response.json())
        setList(temp.results)
    }

    useEffect(()=>{
        const delayDebounceFn = setTimeout(() => {
            fetchManga(searchResult)
        }, 500)

        return () => clearTimeout(delayDebounceFn)
    }, [searchResult])
    return(
        <>
            <div className={styles.search} ref={searchRef}>
                <input type="text" className={styles.search__input}
                                    onClick={onClick}
                                    onFocus={onFocus}
                                    placeholder={'Search'}
                                    value={searchResult}
                                    onChange={handleSearch}
                                    onKeyPress={(e)=>{handleKeyPress(e)}}
                />
                <Link href={`/search/${searchResult}`}>
                    <div className={styles.search__button}>
                        <BiSearchAlt2 className={styles.search__icon}/>
                    </div>
                </Link>
                {active &&
                    <ul className={styles.search__response_ul}>
                        {listManga !== undefined ? listManga.map((element:any)=>{
                            return(
                            <Link href={`/${element.type}/${element.mal_id}`} key={element.mal_id}>
                                <li className={styles.search__response_li}>{element.title}</li>
                            </Link>
                            )
                        }): topManga && topManga.slice(0,5).map((element:any)=>{
                            return(
                            <Link href={`/${element.type}/${element.mal_id}`} key={element.mal_id}>
                                <li className={styles.search__response_li}>{element.title}</li>
                            </Link>
                            )
                        })}
                    </ul>}
            </div>
        </>

    )
}
const mapStateToProps=(state:rootReducerType)=>({
    searchResult:state.search_box.state
})
const mapDispatchToProps={
    searchChangerAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)