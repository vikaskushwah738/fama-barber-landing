
const OurCommitment = () => {
    return (
        <section className="bg-[#1A1A1A] py-24 lg:px-16 md:px-10 px-5 relative overflow-hidden">
            <div
                className="absolute top-[-40px] right-[-40px] w-[250px] h-[250px] rounded-full z-0 bg-[#3b382a]"
            ></div>
            <div
                className="absolute top-[-40px] left-[-40px] w-[200px] h-[200px] rounded-full z-0  bg-[#25231C]"
            ></div>
            <div className="flex justify-center items-center flex-col">
                <p className="text-[#DEAE34] font-bold pt-8 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative z-10">
                    Our Commitment
                </p>
                <h2 className="md:text-4xl text-3xl text-center text-white font-bold pt-4 group relative inline-block z-10">
                    <span className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-48 after:w-20 after:h-[3px] after:bg-[#DEAE34] after:transition-all after:duration-300 group-hover:after:left-0 group-hover:after:w-full">
                        Why Choose PMC Barbershop?
                    </span>
                </h2>
                <p className="text-[#71717B] lg:px-52 md:px-24 px-6 text-center pt-10 text-lg">What makes us the premier barbershop in Denton, TX.</p>
            </div>
            <div className="pt-10 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white ">

                <div className="group relative bg-[#222222] h-[320px] rounded-xl border border-[#71717B] hover:border-[#DEAE34] lg:px-6 px-5 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer z-10 overflow-hidden">

                    {/* animated top border */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-[#DEAE34] transition-all duration-300 group-hover:h-1 group-hover:w-full"></div>

                    <div className="text-[#DEAE34] group-hover:bg-[#DEAE34] group-hover:text-white mt-5 w-[75px] h-[70px] flex justify-center items-center bg-[#373225] rounded-xl transition-all duration-300 group-hover:scale-105">
                        User
                    </div>

                    <h4 className="pt-14 group-hover:text-[#DEAE34]">Expert Barbers</h4>
                    <p className="text-[#71717B] pt-7">
                        Our team consists of certified barbers with years of experience in classic and modern cutting techniques, beard grooming, and men&apos;s styling.
                    </p>
                </div>
                <div className="group relative bg-[#222222] h-[320px] rounded-xl border border-[#71717B] hover:border-[#DEAE34] lg:px-6 px-5 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer  z-10 overflow-hidden">
                    {/*  animated top border */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-[#DEAE34] transition-all duration-300 group-hover:h-1 group-hover:w-full"></div>
                    <div className="text-[#DEAE34] group-hover:bg-[#DEAE34] group-hover:text-white mt-5 w-[75px] h-[70px] flex justify-center items-center bg-[#373225] rounded-xl transition-all duration-300 group-hover:scale-105">
                        Scissors
                    </div>
                    <h4 className="pt-14 group-hover:text-[#DEAE34]">Premium Tools & Products</h4>
                    <p className="text-[#71717B] pt-7">
                        We use only high-quality barbering tools and premium men&apos;s grooming products to ensure the best results for your hair and skin.</p>
                </div>
                <div className="group relative bg-[#222222] h-[320px] rounded-xl border border-[#71717B] hover:border-[#DEAE34] lg:px-6 px-5 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer  z-10 overflow-hidden">
                    {/* animated top border */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-[#DEAE34] transition-all duration-300 group-hover:h-1 group-hover:w-full"></div>
                    <div className="text-[#DEAE34] group-hover:bg-[#DEAE34] group-hover:text-white mt-5 w-[75px] h-[70px] flex justify-center items-center bg-[#373225] rounded-xl  transition-all duration-300 group-hover:scale-105">
                        Home
                    </div>
                    <h4 className="pt-14 group-hover:text-[#DEAE34]">Classic Barbershop Experience</h4>
                    <p className="text-[#71717B] pt-7">
                        Enjoy a comfortable, clean shop with a classic barbershop atmosphere where you can relax while getting a great cut or shave.</p>

                </div>

            </div>

            <div
                className="absolute bottom-[-40px] left-[-40px] w-60 h-60 rounded-full z-1 bg-[#25231C]"
            ></div>
            <div
                className="absolute bottom-[-40px] right-[-40px] w-72 h-72 rounded-full z-1 bg-[#25231C]"
            ></div>
        </section>
    )
}

export default OurCommitment