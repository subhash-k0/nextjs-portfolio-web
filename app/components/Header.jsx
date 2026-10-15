import React from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

const Header = () => {
    return (
        <section
            id="home"
            className="relative isolate mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl flex-col items-center justify-center overflow-hidden px-5 py-10 text-center leading-normal sm:px-8 sm:py-16 lg:px-12"
        >
            <div className="pointer-events-none absolute right-0 top-0 z-0 w-[min(92vw,70rem)] -translate-y-[18%] opacity-70">
                <Image src={assets.header_bg_color} alt="" className="h-auto w-full" />
            </div>
            <div className="relative z-10 flex w-full flex-col items-center">
                <div className="mb-4 rounded-full border border-white/80 bg-white/70 p-1 shadow-lg shadow-rose-100 sm:mb-7 sm:p-1.5">
                    <Image
                        src={assets.profile_img}
                        alt="Profile"
                        className="h-20 w-20 rounded-full object-cover sm:h-36 sm:w-36"
                    />
                </div>
                <h2 className="mb-2 flex items-center gap-2 text-base font-medium text-slate-700 sm:mb-4 sm:text-xl">
                    Hi! I&apos;m John Doe
                    <Image src={assets.hand_icon} alt="" className="w-5 sm:w-6" />
                </h2>
                <h1 className="max-w-full text-balance text-3xl font-semibold leading-tight tracking-tight text-slate-900 min-[380px]:text-4xl sm:text-6xl lg:text-7xl">
                    Full Stack <span className="bg-gradient-to-r from-violet-600 to-rose-500 bg-clip-text text-transparent">Developer</span>
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
                    I am a passionate full stack developer with expertise in building scalable web applications. I love to create innovative solutions and bring ideas to life through code.
                </p>

                <div className="mt-5 flex w-full items-center justify-center gap-3 sm:mt-8 sm:w-auto sm:gap-4">
                    <a
                        href="#contact"
                        className="inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-slate-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 sm:min-h-12 sm:flex-none sm:gap-3 sm:px-7 sm:py-3 sm:text-base"
                    >
                        Contact Me
                        <Image src={assets.right_arrow_white} alt="" className="w-3.5 sm:w-4" />
                    </a>
                    <a
                        href="#resume"
                        className="inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-slate-300 bg-white/80 px-3 py-2 text-sm font-medium text-slate-800 transition-colors hover:border-slate-400 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 sm:min-h-12 sm:flex-none sm:gap-3 sm:px-7 sm:py-3 sm:text-base"
                    >
                        View Resume
                        <Image src={assets.download_icon} alt="" className="w-3.5 sm:w-4" />
                    </a>
                </div>
            </div>
        </section>

    );
};

export default Header;