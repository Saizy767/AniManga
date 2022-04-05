import React from 'react'
import {IoHomeSharp} from 'react-icons/io5'
import {AiOutlineClockCircle, AiOutlineLike, AiOutlineGlobal} from 'react-icons/ai'
import {GiBookshelf} from 'react-icons/gi'

import styles from '../components/Sidepanel/Sidepanel.module.scss'


interface Category{
    id:number,
    name:string,
    url:string,
    icon: JSX.Element,
}

const Home:Category ={
id:1,
name:'Home',
url:'/',
icon: <IoHomeSharp className={styles.category__icon}/>,
}
const Watch_later:Category ={
id:2,
name:'Watch Later',
url:'/watch_later',
icon:<AiOutlineClockCircle className={styles.category__icon}/>
}
const Likely:Category ={
id:3,
name:'Liked manga',
url:'/liked',
icon:<AiOutlineLike className={styles.category__icon}/>
}
const Categorys:Category ={
id:4,
name:'Category',
url:'/category',
icon:<GiBookshelf className={styles.category__icon}/>
}
const Tops:Category ={
id:5,
name:'Top 10',
url:'/top',
icon:<AiOutlineGlobal className={styles.category__icon}/>
}

export const Array_category: Array<Category> = [Home,Watch_later,Likely,Categorys,Tops]
