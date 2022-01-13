import Navbar from "../components/layouts/Navbar"
import Image from 'next/image'
import vco from '../../public/images/vco.png'
import vco2 from '../../public/images/vco2.jpeg'
import citro2 from '../../public/images/citro2.jpg'
import {FaPhoneAlt} from 'react-icons/fa'
import {AiTwotoneMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import bg from '../../public/images/citro.jpeg'
export default function HomePage(){
	return (
        <div className="w-screen bg-custom-white relative font-regular antialiased">
            <div className="fixed w-full h-full overflow-hidden z-10">
                <video controls={false} loop autoPlay muted>
                    <source src="/video/videoplayback.mp4" type="video/webm" />
                </video>
            </div>
            <Navbar />
            <div className="h-screen-80 w-full relative z-20">
                <div className="h-full bg-custom-green bg-opacity-70 z-40 w-full relative overflow-visible flex justify-center">
                    <div className="w-full relative z-30" 
                        style={{
                            maxWidth: 1100 
                        }}
                    >
                        <div className="w-full flex h-full relative z-20">
                            <div className="w-1/2">

                            </div>
                            <div className="w-1/2 h-full  flex items-center">
                                <div className="w-4/5">
                                    <h1 className="text-5xl font-bold text-white leading-normal">Lorem & Ipum Dolor </h1>
                                    <p className="text-white leading-relaxed text-green-100 mt-4">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et</p>
                                    <div className="w-full">
                                        <button className="bg-white mt-2 font-bold text-custom-green mt-10 justify-center w-fit-content px-10 h-12 flex items-center">Let' Get Started</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute z-40 w-screen-h-70 h-screen-70 left-5 bottom-min-h-15">
                            <Image
                                alt="pp"
                                src={vco} 
                                objectFit="contain"
                                objectPosition="bottom"
                                layout="fill"
                                className="z-30"
                            />
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div className="w-full h-screen-80 flex justify-center relative z-10 bg-white">
                <div className="w-full relative z-30" 
                    style={{
                        maxWidth: 1100 
                    }}
                >
                    <div className="w-2/5 h-full py-20 flex items-center justify-center">
                        <div className="w-full h-full flex flex-col justify-center">
                            <h2 className="font-bold text-lg text-gray-800">Services</h2>
                            <h3 className="font-bold text-4xl text-custom-green mt-4">We Offer You The Best Service</h3>
                        </div>
                    </div>
                    <div className="w-3/5 h-full flex items-center justify-center">
                        
                    </div>
                </div>
            </div>
            <div className="w-full h-screen-80 relative flex bg-custom-green justify-center z-20">
                <div className="absolute h-full w-full opacity-20">
                    <Image
                        alt="bg"
                        src={bg} 
                        objectFit="cover"
                        objectPosition="bottom"
                        layout="fill"
                    />
                </div>
                <div className="w-full flex" 
                    style={{
                        maxWidth: 1100 
                    }}
                >
                    <div className="w-1/2 h-full py-20 flex items-center justify-center relative">
                        <div className="w-full h-full flex flex-col justify-center relative z-20">
                            <h2 className="text-gray-100">About Us</h2>
                            <h3 className="font-bold text-4xl text-white mt-4">Starting with the right idea</h3>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex items-center relative">
                        <div className="w-5/6">
                            <h2 className="text-white text-3xl font-bold">Want to export citronela or vco</h2>
                            <p className="text-green-100 text-sm mt-4"><b>CommodityStuff</b> Lorem ipsum dolor sit amet, cetero gloriatur neglegentur nec ex, nemore tincidunt vix ne, eu mel elitr nominavi. Ut elitr graece vituperata nam. Quot consequuntur per cu, vel te dicam phaedrum. Id vel eius facer, cu nam legimus suavitate persequeris, omnes iudico nonumy at c</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="w-full h-fit-content relative z-20 pb-20 bg-white">
                <div className="w-full">
                    <div className="w-1/2 h-full p-20 flex items-center justify-center">
                        <div className="w-full h-full flex flex-col justify-center">
                            <h2 className="font-bold text-lg text-gray-800">Our Product</h2>
                            <h3 className="font-bold text-4xl text-custom-green mt-4">We handle everyting for you</h3>
                        </div>
                    </div>
                </div>
                <div className="w-full flex">
                    <div className="w-1/3">
                        <div className="w-full relative" style={{
                            height: 340
                        }}>
                            <Image
                                className="cursor-pointer"
                                alt="vco image"
                                src={vco2} 
                                objectFit="cover"
                                objectPosition="bottom"
                                layout="fill"
                            />
                        </div>
                    </div>
                    <div className="w-2/3 pl-20">
                        <div className="w-4/6">
                            <h2 className="text-xl font-bold">VCO (virgin coconut oil)</h2>
                            <p className="mt-4 text-green-800 text-sm leading-relaxed">Coconut oil is an edible oil derived from the wick, meat, and milk of the coconut palm fruit. Coconut oil is a white solid fat, melting at warmer room temperatures of around 25 °C, in warmer climates during the summer months it is a clear thin liquid oil. Unrefined varieties have a distinct coconut aroma.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex mt-24 bg-white">
                    <div className="w-2/3 flex justify-end">
                        <div className="w-4/6 pr-20">
                            <h2 className="text-xl font-bold">Citronella oil</h2>
                            <p className="mt-4 text-green-800 text-sm leading-relaxed">Citronella oil is an essential oil obtained from the leaves and stems of different species of Cymbopogon. The oil is used extensively as a source of perfumery chemicals such as citronellal, citronellol, and geraniol.</p>
                        </div>
                    </div>
                    <div className="w-1/3 flex justify-end">
                        <div className="w-full relative" style={{
                            height: 340
                        }}>
                            <Image
                                className="cursor-pointer"
                                alt="citronella image"
                                src={citro2} 
                                objectFit="cover"
                                objectPosition="bottom"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className="w-full h-fit-content relative items-end z-20">
                <div className="h-56 bg-custom-green w-full relative flex justify-center">
                    <div className="w-full h-full" 
                        style={{
                            maxWidth: 1100 
                        }}
                    >
                        <div className="flex w-full h-full">
                            <div className="w-1/3 h-full flex flex-col justify-center">
                                <div className="w-full flex items-center justify-center">
                                    <a 
                                        href="tel:+62852402929292"
                                        className="h-12 w-12 bg-white text-custom-green flex items-center justify-center rounded-full white">
                                        <FaPhoneAlt size={20}/>
                                    </a>
                                </div>
                                <a 
                                    href="tel:+62852402929292"
                                    className="w-full w-full flex font-bold items-center justify-center mt-4 text-white">
                                    (+62) 852402929292
                                </a>
                            </div>
                            <div className="w-1/3 h-full flex flex-col justify-center">
                                <div className="w-full flex items-center justify-center">
                                    <div className="h-12 w-12 bg-white text-custom-green flex items-center justify-center rounded-full white">
                                        <AiTwotoneMail size={20}/>
                                    </div>
                                </div>
                                <div className="w-full w-full flex font-bold items-center justify-center mt-4 text-white">
                                    commoditystuff@gmail.com
                                </div>
                            </div>
                            <div className="w-1/3 h-full flex flex-col justify-center">
                                <div className="w-full flex items-center justify-center">
                                    <a 
                                        href="https://wa.me/085242449015"
                                        className="h-12 w-12 bg-white text-custom-green flex items-center justify-center rounded-full white">
                                        <BsWhatsapp size={20}/>
                                    </a>
                                </div>
                                <a 
                                    href="https://wa.me/085242449015"
                                    className="w-full w-full flex font-bold items-center justify-center mt-4 text-white">
                                    (+62) 852402929292
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full pt-20 pb-4 text-white bg-custom-green text-xs flex justify-center">
                    Ⓒ Copyright CommodityStuff 2022.
                </div>
            </div>
        </div>
	)
}