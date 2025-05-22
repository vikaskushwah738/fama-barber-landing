import Image from "next/image";
export const AboutUs = () => {
    return (
        <section className="bg-[#1A1A1A] py-16 lg:px-16 md:px-10 px-5 relative overflow-hidden" id='about'>
            <div
                className="absolute top-[-40px] right-[-40px] w-72 h-72 rounded-full z-0 bg-[#25231C]"
            ></div>
            <div className="flex justify-center items-center flex-col">
                <p className="text-[#DEAE34] font-bold pt-12 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative z-10">
                    Our Story
                </p>

                {/* This will show on medium (md) and larger screens */}
                <h2 className="hidden md:block text-4xl text-white font-bold pt-4 group relative z-10">
                    <span className="pb-1 text-white relative after:content-[''] after:absolute after:bottom-0 after:left-72 after:w-20 after:h-[3px] after:bg-[#DEAE34] after:transition-all after:duration-300 group-hover:after:left-0 group-hover:after:w-full">
                        About Fama Barber Shop and Beauty Salon
                    </span>
                </h2>

                {/* This will show on small screens only */}
                <h2 className="pb-1 block md:hidden text-3xl text-white font-bold pt-4 group relative z-10">
                    <span className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-5 after:w-20 after:h-[3px] after:bg-[#DEAE34] after:transition-all after:duration-300 group-hover:after:left-0 group-hover:after:w-full">
                        About us
                    </span>
                </h2>

                <p className="text-[#71717B] lg:px-52 md:px-24 text-center pt-10 text-lg z-10">Established in 2022, Fama Barber Shop and Beauty Salon has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.</p>
            </div>
            <div className="lg:flex pt-10 lg:gap-10">
                <div className="lg:w-[50%] ">
                    <div className="relative w-full h-96 overflow-hidden group rounded-2xl z-10">
                        <Image
                            alt="Fama Barber Shop and Beauty Salon Logo"
                            src='/about.png'
                            fill
                            style={{ objectFit: 'fill' }}
                            className="absolute rounded-2xl transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                            priority
                        />
                    </div>
                </div>
                <div className="lg:w-[50%] lg:pt-0 pt-10">
                    <div className="pt-5 relative z-20">
                        <p className="border-l-4 text-[#71717B] border-[#DEAE34] pl-4 text-lg pb-5">
                            Established in 2018, Fama Barber Shop and Beauty Salon has been providing premium grooming services to the men of Denton,
                            TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic
                            barbershop environment.
                        </p>

                        <div className="bg-[#282828] text-[#71717B] p-2 px-5 rounded-xl mt-5 ">
                            <div className="hover:pl-2 hover:shadow-xl relative group duration-300 ease-in-out ">
                                <p className="absolute text-[#DEAE34] text-5xl leading-none text-primary/40 font-serif transform trans ition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:text-primary/60">&quot; </p>
                                <p className="hover:border-b-1 hover:border-[#DEAE34] pb-4 pt-4">
                                    We take pride in our attention to detail and personalized service, ensuring each client leaves
                                    looking and feeling their best. Our skilled barbers combine traditional techniques with modern
                                    trends to create custom styles that suit each individual&apos;s personality and lifestyle.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="absolute bottom-[-40px] left-[-40px] w-72 h-72 rounded-full bg-[#25231C] z-0"
            ></div>
        </section>
    )
}
export default AboutUs