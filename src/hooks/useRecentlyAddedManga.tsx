import {useState, useEffect} from 'react'

export function useRecentlyAddedManga() {
    interface Manga{
        mal_id:number,
        score:number,
        title: string,
        type: string,
        image_url: string,
        key: string,
        volumes:number,
    }
    const [RecentlyAddedManga, SetAddedManga] = useState<Array<Manga>>([])

    const RecentlyUpdated = async () =>{
        const temp: any = await fetch('https://api.jikan.moe/v3/top/manga/1')
            .then(res=> res.json())
            SetAddedManga(temp.top.slice(0,5))}

    useEffect(()=>{
        RecentlyUpdated()
    },[])

return RecentlyAddedManga
}
