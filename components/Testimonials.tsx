

const Testimonials = () => {
    return (
        <section className="bg-[#242424] py-24 lg:px-16 md:px-10 px-5 relative overflow-hidden">
            <div className="bg-[radial-gradient(ellipse_at_center,_#25231C,_#3a362a,_transparent)] 
              rounded-full h-80 w-80 
              blur-[100px] 
              absolute top-10 left-10 
              z-0">
            </div>
            <div
                className="absolute top-[-65px] right-[-20px] w-[290px] h-[290px] rounded-full z-5  bg-[#25231C]"
            ></div>
            <div className="flex justify-center items-center flex-col">
                <p className="pb-1 text-[#DEAE34] font-bold pt-8 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative z-10">
                    Testimonials
                </p>
                <h2 className="md:text-4xl text-3xl text-white font-bold pt-4 group relative inline-block z-10">
                    <span className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-28 after:w-20 after:h-[3px] after:bg-[#DEAE34] after:transition-all after:duration-300 group-hover:after:left-0 group-hover:after:w-full">
                        What Our Clients Say
                    </span>
                </h2>

            </div>
            {/* Testimonial  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pt-16">
                <div className="relative group z-10 h-auto min-h-[360px] overflow-hidden bg-[#222222] rounded-xl border border-[#71717B] hover:border-[#DEAE34] transition-all duration-300 transform hover:-translate-y-2">
                    <article className="relative px-6 pt-11" aria-label="Testimonial from a loyal PMC Barbershop customer">
                        <blockquote className="relative">
                            <span
                                aria-hidden="true"
                                className="absolute top-0 left-0 text-[#DEAE34] text-5xl leading-none font-serif transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                            >
                                “
                            </span>
                            <p className="pt-5 text-white">
                                I&lsquo;ve been getting my hair cut at PMC Barbershop for over 2 years now.
                                The attention to detail is unmatched, and the atmosphere is always
                                welcoming. My barber remembers exactly how I like my fade every time!
                            </p>
                        </blockquote>

                        {/* Closing quote positioned relative to the content */}
                        <div className="mt-2 text-right">
                            <span
                                aria-hidden="true"
                                className="text-[#DEAE34] text-5xl leading-none font-serif transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                            >
                                ”
                            </span>
                        </div>
                    </article>

                    {/* Reviewer name & rating */}
                    <div className="w-full">
                        <div className="border-t border-white pt-4 z-20 px-6">
                            <span className="text-[#DEAE34]">★ ★ ★ ★ ★</span>
                            <span className="text-white ml-3 border-l-2 pl-4 border-amber-300">Mike Johnson</span>
                        </div>
                    </div>

                    {/* Decorative background circle */}
                    <div className="absolute bottom-[-50px] right-[-50px] w-36 h-36 rounded-full bg-[#373225] " />
                </div>
                <div className="relative group z-10 h-auto min-h-[360px] overflow-hidden bg-[#222222] rounded-xl border border-[#71717B] hover:border-[#DEAE34] transition-all duration-300 transform hover:-translate-y-2">
                    <article className="relative px-6 pt-11" aria-label="Testimonial from a loyal PMC Barbershop customer">
                        <blockquote className="relative">
                            <span
                                aria-hidden="true"
                                className="absolute top-0 left-0 text-[#DEAE34] text-5xl leading-none font-serif transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                            >
                                “
                            </span>
                            <p className="pt-5 text-white">
                                As someone who&lsquo;s particular about their haircut, I was nervous trying a new place. The team
                                at PMC took their time to understand what I wanted and delivered exactly that. Will definitely
                                be coming back!
                            </p>
                        </blockquote>

                        {/* Closing quote positioned relative to the content */}
                        <div className="mt-2 text-right">
                            <span
                                aria-hidden="true"
                                className="text-[#DEAE34] text-5xl leading-none font-serif transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                            >
                                ”
                            </span>
                        </div>
                    </article>

                    {/* Reviewer name & rating */}
                    <div className="w-full">
                        <div className="border-t border-white pt-4 z-20 px-6">
                            <span className="text-[#DEAE34]">★ ★ ★ ★ ★</span>
                            <span className="text-white ml-3 border-l-2 pl-4 border-amber-300">David Martinez</span>
                        </div>
                    </div>

                    {/* Decorative background circle */}
                    <div className="absolute bottom-[-50px] right-[-50px] w-36 h-36 rounded-full bg-[#373225] " />
                </div>
                <div className="relative group z-10 h-auto min-h-[360px] overflow-hidden bg-[#222222] rounded-xl border border-[#71717B] hover:border-[#DEAE34] transition-all duration-300 transform hover:-translate-y-2">
                    <article className="relative px-6 pt-11" aria-label="Testimonial from a loyal PMC Barbershop customer">
                        <blockquote className="relative">
                            <span
                                aria-hidden="true"
                                className="absolute top-0 left-0 text-[#DEAE34] text-5xl leading-none font-serif transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                            >
                                “
                            </span>
                            <p className="pt-5 text-white">
                                The hot towel shave experience at PMC Barbershop is phenomenal! It&lsquo;s the perfect blend of old-school
                                barbering with modern techniques. My beard has never looked better.
                            </p>
                        </blockquote>

                        {/* Closing quote positioned relative to the content */}
                        <div className="mt-2 text-right">
                            <span
                                aria-hidden="true"
                                className="text-[#DEAE34] text-5xl leading-none font-serif transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                            >
                                ”
                            </span>
                        </div>
                    </article>

                    {/* Reviewer name & rating */}
                    <div className="w-full pt-6">
                        <div className="border-t border-white pt-4 z-20 px-6">
                            <span className="text-[#DEAE34]">★ ★ ★ ★ ★</span>
                            <span className="text-white ml-3 border-l-2 pl-4 border-amber-300">Williams</span>
                        </div>
                    </div>

                    {/* Decorative background circle */}
                    <div className="absolute bottom-[-50px] right-[-50px] w-36 h-36 rounded-full bg-[#373225] " />
                </div>


            </div>

            <div
                className="absolute bottom-[-40px] left-[-40px] w-72 h-72 rounded-full z-1 bg-[#25231C]"

            ></div>
            <div className="bg-[radial-gradient(ellipse_at_center,_#25231C,_#3a362a,_transparent)] 
              rounded-full h-80 w-80 
              blur-[100px] 
              absolute bottom-10 right-10 
              z-0">
            </div>
        </section >
    )
}

export default Testimonials