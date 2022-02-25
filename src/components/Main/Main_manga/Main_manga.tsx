import Link from "next/link";
import React, { FC, useState } from "react";
import { AiOutlineClockCircle, AiOutlineLike, AiOutlineCheck, AiFillLike, AiOutlineStar, AiFillStar} from "react-icons/ai";

import Adding_btn from "../Adding_btn/Adding_btn";

import first from './Main_manga.module.scss'
import second from './Second_manga.module.scss'

import button from '../Adding_btn/Adding_btn.module.scss'
import { Carousel } from "../Carousel/Carousel";
  
interface Props{
    title: string, //added
    title_english: string, //added
    published: any, //added
    genres: Array<object>, //added
    authors: Array<object>, //added
    rank: number, //added
    type_manga:string, //added
    score:number, //added
    themes: Array<object>, //added
    synopsis: string, //added
    image_url: string, //added
    chapters: number| string, //added
    popularity: number, //added
    status: string,
    related: any,
    characters:any,
}

const Main: FC<Props> = ({title_english,published,genres,authors,rank,score, image_url,title,synopsis,themes, chapters, popularity, related, characters}) =>{
    const Discription : Array<Partial<any>> =[
        {name: 'Rank', value: rank, id: 3},
        {name: 'Top of popularity', value: popularity, id:6},
    ]
    if(themes){
        Discription.push({name: 'Themes', value: themes.map((el:any) =>
        {return <p className={first.row__personal__theme} key={el.mal_id}>{el.name + ' '}</p> }) || 'Not added yet',
        id: 5})
    }
    if(authors){
        Discription.push({name: 'Authors', value: authors.map((el:any) =>
        {return <p className={first.row__personal__author} key={el.mal_id}>{el.name + ' '}</p>}), 
        id: 4})
    }
    if(published && published.prop.from.year){
        Discription.push({name: 'Year of puplished', value: published.prop.from.year, id: 2})
    }
    if (genres){
        Discription.push({name: 'Type',value: genres.map((el:any)=>
        {return <p className={first.row__personal__type}>{el.name + ' '}</p>}),
        id: 1})
    }
    if (chapters){
        Discription.push({name: 'Chapters', value: chapters || 'Not added yet', id: 7})
    }
    if (related && related.Prequel){
        Discription.push({name: 'Prequel', value: related.Prequel.map((el: any)=>
        <Link href={`/${el.mal_id}`} key={el.mal_id}><p className={first.row__personal__interquel} key={el.mal_id}>{el.name}</p></Link>), id:8 })
    }
    if (related && related.Sequel){
        Discription.push({name: 'Sequel', value: related.Sequel.map((el:any) => 
        <Link href={`/${el.mal_id}`} key={el.mal_id}><p className={first.row__personal__interquel} key={el.mal_id}>{el.name}</p></Link >), id: 9})
    }

    const[isAcriveDiscription, setIsActiveDiscription] = useState(true)
    const[isWatched, setIsWatched] = useState(false)
    const[isLiked, setIsLiked] = useState(false)
    const[isRating, setIsRating] =useState(score)
    const[isHovered, setIsHovered] =useState(0)
    return(
        <main>
            <section className={first.main_background}>
            <div className={first.main__box}>
                <div className={first.main__picture_box}>
                    <img src={image_url} alt='logo' className={first.main__picture}/>
                    <div className={first.main__picture_watch_later}>
                        <div className={first.main__watch_btn} onClick={()=>setIsWatched(!isWatched)}>
                            { isWatched ?   <Adding_btn text='Added' element={<AiOutlineCheck className={button.adding_btn_icon}/>}/>
                            :               <Adding_btn text='Watch later' element={<AiOutlineClockCircle className={button.adding_btn_icon}/>}/> 
                            }
                        </div>
                        <div className={first.main__liked_btn} onClick={()=>{setIsLiked(!isLiked)}}>
                            { isLiked ? <Adding_btn text='Liked manga' element={<AiFillLike className={button.adding_btn_icon}/>}/>
                            :           <Adding_btn text='Liked manga' element={<AiOutlineLike className={button.adding_btn_icon}/>}/>}
                        </div>
                    </div>
                </div>
                <div className={first.description}>
                    <div className={first.description__name}>
                        <h1 className={first.description__name_nation}>{title_english || title}</h1>
                        <h2 className={first.description__name_origin}>{title}</h2>
                    </div>
                    <div className={first.description__synopsis}>
                        {isAcriveDiscription ? 
                        <p className={`${first.description__synopsis_short} ${first.description__synopsis_short_active}`}>{synopsis}</p> :
                        <p className={`${first.description__synopsis_short}`}>{synopsis}</p>}
                    </div>
                    <div role='button' className={first.description__button} onClick={()=>setIsActiveDiscription(!isAcriveDiscription)}>
                        <span className={first.description__button_text}>
                            {isAcriveDiscription ? 'Read more' : 'Read less'}
                        </span>
                    </div>
                    <div className={first.description__about}>
                        <div className={first.description__about_header}>
                            <h3>About manga</h3>
                        </div>
                        <div className={first.description__about_box}>
                                {Discription.map((el:any)=>{
                                    return(
                                    <div className={first.description__about_row} key={el.id}>
                                        <div className={first.row__category}>
                                            {el.name}
                                        </div>
                                        <div className={first.row__personal} key={el.id}>
                                            {el.value}
                                        </div>
                                    </div>
                                )})}
                        </div>
                    </div>
                </div>
                <div className={first.score__place}>
                    <div className={first.score__box}>
                        <span className={first.score__value}>{score}</span>
                        <span className={first.score__max_value}>/10</span>
                    </div>
                </div>
            </div>
            </section>
            <section className={second.main__background}>
                <div className={second.main__box}>
                    <div className={second.score}>
                        <div className={second.score__header}>
                                <span className={second.score__header_text}>Manga Rating</span>
                        </div>
                        <div className={second.score__box}>
                            <ul className={second.score__ul}>
                                {[...Array(10)].map((star, index)=>{
                                    index+=1
                                    return(
                                    <div className={second.score__star} role='button' key={index} 
                                    onClick={()=>setIsRating(index)}
                                    onMouseEnter={() => setIsHovered(index)}
                                    onMouseLeave={() => setIsHovered(isRating)}>
                                        {index <= (isHovered || isRating) ? <AiFillStar className={second.score__star_icon_on}/> : <AiOutlineStar className={second.score__star_icon_off}/>}
                                        <span className={second.score__star_text}>{index}</span>
                                    </div>
                                    )
                                })}
                                    
                            </ul>
                            <div className={second.score__manga}>
                                <span className={first.score__value}>{score}</span>
                                <span className={first.score__max_value}>/10</span>
                            </div>
                    </div>
                    </div>
                    <div className={second.reader}>
                        <div className={second.reader__fast_button}>
                            <button className={second.reader__first_volume}>
                                <span className={second.reader__volume_mini}> Volume 1</span>
                            </button>
                            <button className={second.reader__last_volume}>
                                <span className={second.reader__volume_mini}> Volume 30</span>
                            </button>
                        </div>
                        <div className={second.reader__box}>
                            {[...Array(30)].map((volume, index)=>{
                                index+=1
                                return(
                                    <div className={second.reader__row} role='button'>
                                        <span className={second.reader__volume}>Volume {index}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {characters && <div className={second.characters}>
                        <div className={second.characters__header}>
                            <span className={second.characters__header_text}>Characters</span>
                        </div>
                        <Carousel>
                            {characters && characters.map((el:any)=>{
                                return(
                                    <div className={second.card}>
                                        <img src={el.image_url} className={second.card__image}></img>
                                        <span className={second.card__name}>{el.name}</span>
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>}
                    <div className={second.second__recomented}>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main