import Image from "next/image";
const Gallery = () => {
    return (
        <section className="bg-[#1A1A1A] py-24 lg:px-16 md:px-10 px-5 relative overflow-hidden">
            <div
                className="absolute top-[-40px] right-[-40px] w-[250px] h-[250px] rounded-full z-10 bg-[#3b382a]"
            ></div>

            <div className="flex justify-center items-center flex-col">
                <p className="text-[#DEAE34] font-bold pt-8 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative z-10">
                    Our Work & Shop
                </p>
                <h2 className="text-4xl text-white font-bold pt-4 group relative inline-block z-10">
                    <span className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-36 after:w-20 after:h-[3px] after:bg-[#DEAE34] after:transition-all after:duration-300 group-hover:after:left-0 group-hover:after:w-full">
                        Our Barbershop Gallery
                    </span>
                </h2>
                <p className="text-[#71717B] lg:px-52 md:px-24 px-6 text-center pt-10 text-lg">Take a look at our shop atmosphere and the quality cuts we deliver to our clients.</p>
            </div>
            <div className="pt-10 gap-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 text-white ">
                <div className="rounded-2xl w-[390px] h-[300px] relative overflow-hidden group hover:border-2 border-[#DEAE34]">
                    <Image
                        alt="Fama Barber Shop and Beauty Salon Logo"
                        src='/shop.jpg'
                        fill
                        style={{ objectFit: 'fill' }}
                        className="z-4 absolute rounded-2xl transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                        priority
                    />
                </div>
                <div className="rounded-2xl w-[390px] h-[300px] relative overflow-hidden group hover:border-2 border-[#DEAE34]">
                    <Image
                        alt="Fama Barber Shop and Beauty Salon Logo"
                        src='/shop-2.jpg'
                        fill
                        style={{ objectFit: 'fill' }}
                        className="absolute rounded-2xl transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                        priority
                    />
                </div>
                <div className="rounded-2xl w-[390px] h-[300px] relative overflow-hidden group hover:border-2 border-[#DEAE34]">
                    <Image
                        alt="Fama Barber Shop and Beauty Salon Logo"
                        src='/shop-3.jpg'
                        fill
                        style={{ objectFit: 'fill' }}
                        className="z-3 absolute rounded-2xl transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                        priority
                    /></div>
            </div>

            <div
                className="absolute bottom-[-40px] left-[-40px] w-60 h-60 rounded-full z-0 bg-[#25231C]"
            ></div>
            {/* <div
                className="absolute bottom-[-40px] right-[-40px] w-72 h-72 rounded-full z-1 bg-[#25231C]"
            ></div> */}
        </section>
    )
}

export default Gallery