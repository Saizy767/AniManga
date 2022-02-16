import {useState, useEffect} from 'react'

export function useAllManga() {
    interface Manga{
        mal_id:number,
        score:number,
        title: string,
        type: string,
        image_url: string,
        key: string,
    }
    const [allManga, SetAllManga] = useState<Array<Manga>>([])

    const AllMangaFC = async () =>{
        const temp: any = await fetch('https://api.jikan.moe/v3/top/manga/1')
            .then(res=> res.json())
            SetAllManga(temp.top.slice(0,60))}

    useEffect(()=>{
        AllMangaFC()
    },[])

return allManga
}
