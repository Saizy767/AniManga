import {useState, useEffect} from 'react'

export function useAllManga(url:string) {
    interface Manga{
        mal_id:number,
        score:number,
        title: string,
        type: string,
        image_url: string,
        key: string,
        volumes:number,
    }
    const [allManga, SetAllManga] = useState<Array<Manga>>([])

    const AllMangaFC = async () =>{
        const temp: any = await fetch(`https://api.jikan.moe/v3/${url}`)
            .then(res=> res.json())
            SetAllManga(temp.top.slice(0,80))}

    useEffect(()=>{
        AllMangaFC()
    },[])

return allManga
}
