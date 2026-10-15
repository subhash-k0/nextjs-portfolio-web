import Image from "next/image";
import { assets, infoList, toolsData } from "../../assets/assets";

const About = () => {
    return (
        <section id="about" className="w-full scroll-mt-24 border-t border-slate-200/70 bg-white/55">
            <div className="mx-auto w-full max-w-6xl px-5 py-12 leading-normal sm:px-8 sm:py-16 lg:px-12">
                <div className="mb-8 text-center sm:mb-12">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 sm:mb-3 sm:text-sm">Introduction</p>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl">About me</h2>
                </div>

                <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    <div className="relative mx-auto w-36 max-w-[65vw] sm:w-full sm:max-w-xs">
                        <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-violet-200 to-rose-100 blur-lg sm:-inset-3 sm:blur-xl" />
                        <div className="relative overflow-hidden rounded-full border border-white bg-white p-1 shadow-xl shadow-slate-200/70 sm:p-2">
                            <Image
                                src={assets.user_image}
                                alt="Portrait of John Doe"
                                className="aspect-square w-full rounded-full object-cover"
                            />
                        </div>
                    </div>

                    <div>
                        <p className="text-sm leading-6 text-slate-600 sm:text-lg sm:leading-8">
                            I&apos;m a passionate full stack developer who enjoys turning ideas into useful, polished digital experiences. I work across the frontend and backend to build responsive applications that are reliable, accessible, and easy to use.
                        </p>

                        <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-4">
                            {infoList.map((item) => (
                                <article
                                    key={item.title}
                                    className="min-w-0 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:rounded-2xl sm:p-5"
                                >
                                    <Image src={item.icon} alt="" className="mb-2 h-5 w-5 object-contain sm:mb-4 sm:h-7 sm:w-7" />
                                    <h3 className="text-xs font-semibold text-slate-900 sm:text-sm">{item.title}</h3>
                                    <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-slate-600 sm:mt-2 sm:line-clamp-none sm:text-sm sm:leading-6">{item.description}</p>
                                </article>
                            ))}
                        </div>

                        <div className="mt-5 sm:mt-8">
                            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 sm:mb-4 sm:text-sm">
                                Tools I work with
                            </h3>
                            <ul className="flex flex-wrap gap-2 sm:gap-3" aria-label="Development tools">
                                {toolsData.map((tool, index) => (
                                    <li
                                        key={index}
                                        className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white p-2 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:h-16 sm:w-16 sm:rounded-xl sm:p-3"
                                    >
                                        <Image src={tool} alt="" className="h-full w-full object-contain" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
