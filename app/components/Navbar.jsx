import { useState } from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <div className="sticky top-0 z-50 w-full border-b border-white/70 bg-white/80 shadow-sm shadow-slate-200/30 backdrop-blur-xl">
                <nav aria-label="Main navigation" className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                    <a href="#home" aria-label="John Doe, home" className="shrink-0">
                        <Image src={assets.logo} alt="John Doe" className="w-24 sm:w-28" />
                    </a>

                    <ul className="hidden items-center gap-4 rounded-full bg-white/75 px-5 py-2.5 shadow-sm md:flex lg:gap-6 lg:px-7">
                        <li><a href="#home" className="text-sm text-slate-700 transition-colors hover:text-violet-700 lg:text-base">Home</a></li>
                        <li><a href="#about" className="text-sm text-slate-700 transition-colors hover:text-violet-700 lg:text-base">About me</a></li>
                        <li><a href="#services" className="text-sm text-slate-700 transition-colors hover:text-violet-700 lg:text-base">Services</a></li>
                        <li><a href="#projects" className="text-sm text-slate-700 transition-colors hover:text-violet-700 lg:text-base">Projects</a></li>
                        <li><a href="#contact" className="text-sm text-slate-700 transition-colors hover:text-violet-700 lg:text-base">Contact</a></li>
                    </ul>

                    <div className="flex shrink-0 items-center gap-3 sm:gap-4">
                        <button type="button" aria-label="Toggle dark mode" className="hidden sm:block">
                            <Image src={assets.moon_icon} alt="" className="w-6" />
                        </button>
                        <a href="#contact" className="hidden items-center gap-2 rounded-full border border-slate-300 px-5 py-2 text-sm text-slate-800 transition-colors hover:border-violet-500 hover:text-violet-700 lg:flex">
                            Contact
                            <Image src={assets.arrow_icon} alt="" className="w-3" />
                        </a>
                        <button
                            type="button"
                            aria-label="Open navigation menu"
                            aria-expanded={menuOpen}
                            aria-controls="mobile-navigation"
                            className="rounded-lg p-2 transition-colors hover:bg-slate-100 md:hidden"
                            onClick={() => setMenuOpen(true)}
                        >
                            <Image src={assets.menu_black} alt="" className="w-6" />
                        </button>
                    </div>
                </nav>

                {menuOpen && (
                    <div className="fixed inset-0 z-[60] md:hidden">
                        <button
                            type="button"
                            aria-label="Close navigation menu"
                            className="absolute inset-0 h-full w-full bg-slate-950/35 backdrop-blur-[2px]"
                            onClick={closeMenu}
                        />
                        <aside
                            id="mobile-navigation"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile navigation"
                            className="absolute inset-y-0 right-0 flex h-dvh w-[min(20rem,85vw)] flex-col overflow-y-auto bg-white p-7 shadow-2xl shadow-slate-900/20"
                        >
                            <div className="mb-10 flex items-center justify-between">
                                <span className="text-lg font-semibold text-slate-900">Navigation</span>
                                <button
                                    type="button"
                                    aria-label="Close navigation menu"
                                    className="rounded-lg p-2 hover:bg-slate-100"
                                    onClick={closeMenu}
                                >
                                    <Image src={assets.close_black} alt="" className="w-4" />
                                </button>
                            </div>
                            <ul className="flex flex-col gap-2">
                                <li><a href="#home" onClick={closeMenu} className="block rounded-xl px-4 py-3 text-slate-700 transition-colors hover:bg-violet-50 hover:text-violet-700">Home</a></li>
                                <li><a href="#about" onClick={closeMenu} className="block rounded-xl px-4 py-3 text-slate-700 transition-colors hover:bg-violet-50 hover:text-violet-700">About me</a></li>
                                <li><a href="#services" onClick={closeMenu} className="block rounded-xl px-4 py-3 text-slate-700 transition-colors hover:bg-violet-50 hover:text-violet-700">Services</a></li>
                                <li><a href="#projects" onClick={closeMenu} className="block rounded-xl px-4 py-3 text-slate-700 transition-colors hover:bg-violet-50 hover:text-violet-700">Projects</a></li>
                                <li><a href="#contact" onClick={closeMenu} className="block rounded-xl px-4 py-3 text-slate-700 transition-colors hover:bg-violet-50 hover:text-violet-700">Contact</a></li>
                            </ul>
                        </aside>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar;