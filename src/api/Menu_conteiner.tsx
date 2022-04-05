import React from "react"
import {MdOutlineHelpOutline} from "react-icons/md"
import {IoLanguage} from "react-icons/io5"
import {BsFillMoonFill} from "react-icons/bs"
import {GoSignOut} from 'react-icons/go'
import {BiMessageAltEdit} from 'react-icons/bi'

type Settings={
    name:string,
    icon: JSX.Element,
    id:number,
}


const Language:Settings={
    name: "Language",
    icon: <IoLanguage/>,
    id:1,
}
const Help:Settings={
    name:"Help",
    icon:<MdOutlineHelpOutline/>,
    id:2,
}
const Appearance:Settings={
    name: "Appearance",
    icon:<BsFillMoonFill/>,
    id:3,
}
const SignOut:Settings={
    name: "Sign Out",
    icon: <GoSignOut/>,
    id:4,
}
const FeedBack:Settings={
    name: "Send Feedback",
    icon:<BiMessageAltEdit/>,
    id:5,
}
export const Array_settings: Array<Settings> = [Language, Help, Appearance, FeedBack,SignOut]