type Types ={
    name:string,
    url: string,
}

const Manga : Types={
    name: 'Manga',
    url: 'manga'
}
const Novel: Types={
    name: 'Nobel',
    url:'novel'
}
const LightNovel: Types={
    name: 'Light Novel',
    url: 'lightnovel',
}
const Oneshot: Types={
    name: 'One Shot',
    url: 'oneshot'
}
const Doujin: Types={
    name: 'Doujin',
    url: 'doujin'
}
const Manhwa: Types={
    name: 'Manhwa',
    url: 'manhwa',
}
const Manhua: Types={
    name: 'Manhua',
    url: 'manhua',
}
const Any: Types={
    name: 'Any',
    url: ''
}

export const Array_Types: Array<Types> = [Any, Manga, Novel, LightNovel, Oneshot, Doujin, Manhwa, Manhua]