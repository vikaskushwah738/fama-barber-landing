import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
    return (
        <section className="bg-[#1E1E1E] lg:flex lg:px-16 md:px-10 px-5 py-16 lg:gap-10 pt-20">
            <div className="lg:w-[50%]">
                <h1 className="text-[#DEAE34] pt-6"> Premium Barber Services in Denton</h1>
                <p className="text-white text-5xl font-extrabold pt-5"> Classic Cuts, Modern Style</p>
                <h2 className="text-[#DEAE34] text-5xl font-extrabold pt-3 ">
                    <span className="border-b-4 border-[#DEAE34]"> Premium Barber Shop</span>
                </h2>

                <p className="pt-10 text-[#71717B] pb-4">At Fama Barber Shop and Beauty Salon, we combine traditional barbering techniques with modern styling to give you the
                    perfect look. Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel
                    shaves in a classic barbershop atmosphere.</p>

                <div className="pt-3 pb-6">
                    <span className="text-[#71717B] hover:text-white pb-2 gap-2 hover:border-2 hover:border-[#F4BF37] p-1 px-3 rounded-xl text-lg bg-[#1A1A1A]">
                        <MapPin size={20} className="text-[#F4BF37] inline-block" /> Denton, TX</span>
                </div>

                <Link href="#services"
                    className='transition-all transform hover:-translate-y-2 duration-300 ease-in-out w-full text-white bg-[#1A1A1A] hover:bg-[#DEAE34] flex justify-center items-center gap-4 p-[5px] border-1 border-[#71717B] rounded-xl'>
                    <Phone className="" size={15} />Our Services
                </Link>
                <Link href="tel:+19406129127"
                    className='transition-all transform hover:-translate-y-1 duration-300 ease-in-out w-full text-white bg-[#DEAE34]  flex justify-center items-center gap-4 p-1.5 mt-3 rounded-xl'>
                    <Phone className=" text-white" size={15} />Call us
                </Link>
            </div>
            <div className="relative lg:w-[50%] flex justify-center items-center lg:pt-0 pt-10">
                <div className="relative w-full h-[360px] overflow-hidden group">
                    <Image
                        alt="Fama Barber Shop and Beauty Salon Logo"
                        src='/hero.jpg'
                        fill
                        style={{ objectFit: 'fill' }}
                        className="absolute rounded-2xl transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection