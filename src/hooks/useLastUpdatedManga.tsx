import {useState, useEffect} from 'react'

export function useLastManga() {
    interface Manga{
        mal_id:number,
        score:number,
        title: string,
        type: string,
        image_url: string,
        key: string,
        volumes:number,
    }
    const [LastManga, SetLastManga] = useState<Array<Manga>>([])

    const LastUpdated = async () =>{
        const temp: any = await fetch('https://api.jikan.moe/v3/top/manga/1/bypopularity')
            .then(res=> res.json())
            SetLastManga(temp.top.slice(0,20))}

    useEffect(()=>{
        LastUpdated()
    },[])

return LastManga
}
