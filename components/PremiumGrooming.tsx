import Image from "next/image"

const PremiumGrooming = () => {
    return (
        <section className="bg-[#1A1A1A] py-24 lg:px-16 md:px-10 px-5 relative overflow-hidden" id='services'>
            <div
                className="absolute top-[-40px] right-[-40px] w-[250px] h-[250px] rounded-full z-1 bg-[#3b382a]"
            ></div>
            <div
                className="absolute top-[-50px] right-[-20px] w-[280px] h-[280px] rounded-full z-1  bg-[#25231C]"
            ></div>
            <div className="flex justify-center items-center flex-col">
                <p className="text-[#DEAE34] font-bold pt-8 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative z-10">
                    Premium Grooming
                </p>
                <h2 className="md:text-4xl text-3xl text-center text-white font-bold pt-4 group relative inline-block z-10">
                    <span className="pb-1 text-white relative after:content-[''] after:absolute after:bottom-0 after:left-28 after:w-20 after:h-[3px] after:bg-[#DEAE34] after:transition-all after:duration-300 group-hover:after:left-0 group-hover:after:w-full">
                        Our Barber Services
                    </span>
                </h2>
                <p className="text-[#71717B] lg:px-52 md:px-24 px-6 text-center pt-10 text-lg">Professional barbering services to keep you looking sharp for everyday confidence or special occasions.</p>
            </div>
            <div className="pt-10 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white ">
                <div className="group bg-[#222222] h-[450px] rounded-xl border-1 border-[#71717B] hover:border-t-4  hover:border-[#DEAE34] lg:px-6 px-5 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative z-10">
                    <div className="w-[79px] h-[79px] flex justify-center items-center pt-16  ">
                        <div className="relative  bg-[#2D2D2D] p-2 rounded-xl group-hover:bg-[#3b382a] transition-all duration-300 group-hover:scale-105">
                            <Image
                                alt="Fama Barber Shop and Beauty Salon Logo"
                                src='/hair-styling-icon.svg'
                                width={50}
                                height={50}
                                className="rounded-2xl transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                            />
                        </div>

                    </div>
                    <h4 className="pt-14 group-hover:text-[#DEAE34]">Haircuts</h4>
                    <p className="text-[#71717B] pt-10">Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts
                        to modern fades, we ensure you leave looking sharp and confident.</p>
                    <ul className="text-[#71717B] list-disc lg:pl-7 pl-5 pt-3">
                        <li>Classic Cuts</li>
                        <li>Modern Styles</li>
                    </ul>
                </div>
                <div className="group hover:text-[#DEAE34] bg-[#222222] h-[450px] rounded-xl border-1 border-[#71717B] hover:border-t-4 hover:border-[#DEAE34] lg:px-6 px-5 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative z-10 ">
                    <div className="w-[79px] h-[79px] flex justify-center items-center pt-16">
                        <div className=" relative bg-[#2D2D2D] p-2 rounded-xl group-hover:bg-[#3b382a] transition-all duration-300 group-hover:scale-105">
                            <Image
                                alt="Fama Barber Shop and Beauty Salon Logo"
                                src='/makeup-icon.svg'
                                width={50}
                                height={50}
                                className="rounded-2xl transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                            />
                        </div>

                    </div>
                    <h4 className="pt-14">Beard Services</h4>
                    <p className="text-[#71717B] pt-10">Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard
                        shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.</p>
                    <ul className="text-[#71717B] list-disc lg:pl-7 pl-5 pt-3">
                        <li>Beard Trims</li>
                        <li>Beard Shaping</li>
                    </ul>
                </div>
                <div className="group hover:text-[#DEAE34] bg-[#222222] h-[450px] rounded-xl border-1 border-[#71717B] hover:border-t-4 hover:border-[#DEAE34] lg:px-6 px-5 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative z-10">
                    <div className="w-[79px] h-[79px] flex justify-center items-center pt-16">
                        <div className=" relative bg-[#2D2D2D] p-2 rounded-xl group-hover:bg-[#3b382a] transition-all duration-300 group-hover:scale-105">
                            <Image
                                alt="Fama Barber Shop and Beauty Salon Logo"
                                src='/skincare-icon.svg'
                                width={50}
                                height={50}
                                className="rounded-2xl transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                            />
                        </div>
                    </div>
                    <h4 className="pt-14">Premium Services</h4>
                    <p className="text-[#71717B] pt-10">Enhance your look with our premium barbering services including expert hair coloring, revitalizing
                        scalp treatments, and styling for special occasions when you need to look your absolute best.</p>
                    <ul className="text-[#71717B] list-disc lg:pl-7 pl-5 pt-3">
                        <li>Hair Coloring</li>
                        <li>Scalp Treatments</li>
                    </ul>
                </div>
            </div>
            <div
                className="absolute bottom-[-40px] left-[-40px] w-72 h-72 rounded-full z-1 bg-[#25231C]"

            ></div>
        </section>
    )
}

export default PremiumGrooming