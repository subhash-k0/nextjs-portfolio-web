import React from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

const Navbar = () => {
    const sideMenuref = React.useRef(null);
    const openMenu = 
    return (
        <>
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
            <Image src={assets.header_bg_color} alt="Header Background" className="w-full" />
        </div>
            <nav className="w-full fixed px-5 lg:px-8 xl:px--[8%] py-4 flex items-center justify-between">
                <a href="#top">
                    <Image src={assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
                </a>

                <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
                    <li><a href="#home" className="font-Ovo">Home</a></li>
                    <li><a  href="#about" className="font-Ovo">About me</a></li>
                    <li><a href="#services" className="font-Ovo">Services</a></li>
                    <li><a href="#projects" className="font-Ovo">Projects</a></li>
                    <li><a href="#contact" className="font-Ovo">Contact</a></li>
                </ul>

                <div className="flex items-center gap-4">

                    <button>
                        <Image src={assets.moon_icon} alt="Dark Mode" className="w-6" />
                    </button>
                    <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo">Contact <Image src={assets.arrow_icon} alt="Contact" className="w-3" /></a>
                
                    <button className="block md:hidden ml-3" onClick={() => {
                        sideMenuref.current.classList.toggle("-right-64");
                        sideMenuref.current.classList.toggle("right-0");
                    }}>
                        <Image src={assets.menu_black} alt="Menu" className="w-6" />
                    </button>
                </div>


                {/* Mobile Menu */}
                <ul ref={sideMenuref} className="flex md:hidden flex-col items-center gap-6 rounded-lg py-20 px-10 fixed -right-64 top-0 w-64 z-50 bg-rose-50 transition duration-500">

                    <div>
                        <Image src={assets.close_black} alt="Close" className="w-3 absolute top-5 right-5 cursor-pointer" onClick={() => {
                            sideMenuref.current.classList.toggle("-right-64");
                            sideMenuref.current.classList.toggle("right-0");
                        }}/>
                    </div>
                
                    <li><a href="#home" className="font-Ovo">Home</a></li>
                    <li><a  href="#about" className="font-Ovo">About me</a></li>
                    <li><a href="#services" className="font-Ovo">Services</a></li>
                    <li><a href="#projects" className="font-Ovo">Projects</a></li>
                    <li><a href="#contact" className="font-Ovo">Contact</a></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar;