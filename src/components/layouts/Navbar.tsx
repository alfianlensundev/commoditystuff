import { useState } from 'react'
import {BsWhatsapp} from 'react-icons/bs'

type NavTypes = {
    title: string,
    route?: string
}
export default function Navbar(){
    const [activeNav, setActiveNav] = useState<number>(0)
    const listNav: NavTypes[]  = [
        {
            title: "Home",
        },
        {
            title: "Services",
        },
        {
            title: "About Us",
        },
        {
            title: "Product",
        },
        {
            title: "Contact",
        },
    ]
    return (
        <div className="w-full z-30 bg-custom-green h-20 fixed top flex px-20 justify-center">
            <div className="w-full flex items-center justify-center " style={{
                maxWidth: 1100 
            }}>
                <div className="w-1/4  text-white ">
                    <div className="w-full font-bold text-xl">CommodityStuff</div>
                    <div className="text-xs">Lorem Ipsum dolor</div>
                </div>
                <div className="flex flex-1 relative px-10 text-white ">
                    {listNav.map((nav, idx) => {
                        return (
                            <div className="w-24 flex flex-col items-center justify-center h-12 text-sm relative cursor-pointer ">
                                <div className={activeNav == idx ? `font-bold` : 'text-gray-300 text-sm cursor-pointer hover:text-white hover:text-regular'}>
                                    {nav.title}
                                </div>
                                {activeNav == idx && 
                                    <div className="absolute bottom-0 flex justify-center">
                                        <div className="rounded-full bg-white w-6 bottom-0" style={{
                                            height: 4
                                        }}>

                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    })}
                    
                </div>
                <div className="w-1/4 font-bold text-white text-lg flex justify-end">
                    <a className="w-10 h-10 outline-none rounded-full hover:bg-white hover:bg-opacity-10 justify-center focus:outline-none flex items-center" href="https://wa.me/085242449015">
                        <BsWhatsapp size={20}/>
                    </a>
                </div>
            </div>
        </div>
    )
}