import React, { ChangeEvent, FC, useCallback , useEffect, useRef, useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";

import {BiSearchAlt2} from 'react-icons/bi'
import { changeInput } from "../../../redux/reducer/searchBoxSlice";

import styles from './Search.module.scss'


interface Props{
    topManga?:any,
}

const Search: FC<Props> = ({topManga}) => {

    const router = useRouter()
    const searchRef =useRef(null)
    const [active, setActive] = useState(false)
    const [listManga, setList] = useState([])
    const inputText = useTypedSelector(state => state.searchInput.text)
    const dispatch = useTypedDispatch()

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
        dispatch(changeInput(event.target.value))
    },[])

    const handleKeyPress = useCallback((target)=>{
        if (target.charCode === 13){
            router.push(`/search/search?q=${inputText}`)
        }
    },[inputText])

    const fetchManga = async (event:string) => {
        const temp = 
                await fetch(`https://api.jikan.moe/v3/search/manga?q=${event}&order_by=title&sort=asc&limit=5}`)
        .then((Response)=>Response.json())
        setList(temp.results)
    }

    useEffect(()=>{
        const delayDebounceFn = setTimeout(() => {
            fetchManga(inputText)
        }, 500)
        return () => clearTimeout(delayDebounceFn)
    }, [inputText])
    return(
        <>
            <div className={styles.search} ref={searchRef}>
                <input type="text" className={styles.search__input}
                                    onClick={onClick}
                                    onFocus={onFocus}
                                    placeholder={'Search'}
                                    value={inputText}
                                    onChange={handleSearch}
                                    onKeyPress={(e)=>{handleKeyPress(e)}}
                />
                <Link href={{
                    pathname: '/search',
                    query:{q:`${inputText}`}
                    }} 
                    as={{
                        pathname:'/search',
                        query: {q: `${inputText}`}
                        }}>
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

export default Search