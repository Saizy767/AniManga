import React from 'react'
import {IoHomeSharp} from 'react-icons/io5'
import {AiOutlineClockCircle, AiOutlineLike, AiOutlineGlobal} from 'react-icons/ai'
import {IoAlbums} from 'react-icons/io5'
import {GiBookshelf} from 'react-icons/gi'

import styles from './Sidepanel.module.scss'


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
url:'/watchlater',
icon:<AiOutlineClockCircle className={styles.category__icon}/>
}
const Likely:Category ={
id:3,
name:'Liked manga',
url:'/liked',
icon:<AiOutlineLike className={styles.category__icon}/>
}
const Subsctiptions:Category ={
id:4,
name:'Subscriptions',
url:'/subscription',
icon:<IoAlbums className={styles.category__icon}/>
}
const Categorys:Category ={
id:5,
name:'Category',
url:'/category',
icon:<GiBookshelf className={styles.category__icon}/>
}
const Tops:Category ={
id:6,
name:'Top 10',
url:'/top',
icon:<AiOutlineGlobal className={styles.category__icon}/>
}

export const Array_category: Array<Category> = [Home,Watch_later,Likely,Subsctiptions,Categorys,Tops]
