import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const ExpertStylists = () => {
    return (
        <section className="bg-[#1A1A1A] py-24 lg:px-16 md:px-10 px-5 relative overflow-hidden">

            <div
                className="absolute top-[-50px] right-[-20px] w-[280px] h-[280px] rounded-full z-5  bg-[#25231C]"
            ></div>
            <div className="flex justify-center items-center flex-col z-10">
                <p className="text-[#DEAE34] font-bold pt-8 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative z-10">
                    Expert Stylists
                </p>
                <h2 className="text-4xl text-white font-bold pt-4 group relative inline-block z-10">
                    <span className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-28 after:w-20 after:h-[3px] after:bg-[#DEAE34] after:transition-all after:duration-300 group-hover:after:left-0 group-hover:after:w-full">
                        Meet Our Barbers
                    </span>
                </h2>
                <p className="text-[#71717B] lg:px-52 md:px-24 px-6 text-center pt-10 text-lg">Our team of skilled barbers is dedicated to providing you with the perfect cut and grooming experience.</p>
            </div>
            <div className="pt-10 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <div className="group bg-[#222222] h-[500px] rounded-2xl hover:border-2 hover:border-[#DEAE34] transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer relative z-10">
                    <div className="overflow-hidden mt-5 w-full h-[220px] relative group">
                        <Image
                            alt="Fama Barber Shop and Beauty Salon Logo"
                            src='/shop.jpg'
                            fill
                            style={{ objectFit: 'fill' }}
                            className="z-4 absolute transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                            priority
                        />
                    </div>
                    <div className="flex justify-center flex-col text-white pt-5 px-5 text-center">
                        <span className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-32 after:w-20 after:h-[3px] after:bg-[#DEAE34] after:transition-all after:duration-300 group-hover:after:left-0 group-hover:after:w-full">

                        </span>
                        <h3 className="pt-4 group-hover:text-[#F4BF37] transition-colors duration-300 ease-in-out">Jason Rodriguez</h3>
                        <h4 className="text-[#F4BF37]">Owner & Master Barber</h4>
                        <p className="text-[#71717B] pt-3 text-sm">With over 15 years of experience, Jason founded PMC Barbershop to bring premium men's grooming services to Denton. Specializing in classic cuts and</p>
                    </div>

                    <div className="flex justify-center gap-5 pt-4 transition-all duration-300  transform group-hover:-translate-y-2">
                        <Facebook size={40} className="text-[#F4BF37] p-2 bg-[#423A25] rounded-full" />
                        <Instagram size={40} className="text-[#F4BF37] p-2 bg-[#423A25] rounded-full" />
                    </div>
                </div>
                <div className="group bg-[#222222] h-[500px] rounded-2xl hover:border-2 hover:border-[#DEAE34] transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer relative z-10">
                    <div className="overflow-hidden mt-5 w-full h-[220px] relative group">
                        <Image
                            alt="Fama Barber Shop and Beauty Salon Logo"
                            src='/shop.jpg'
                            fill
                            style={{ objectFit: 'fill' }}
                            className="z-4 absolute transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                            priority
                        />
                    </div>
                    <div className="flex justify-center flex-col text-white pt-5 px-5 text-center">
                        <span className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-32 after:w-20 after:h-[3px] after:bg-[#DEAE34] after:transition-all after:duration-300 group-hover:after:left-0 group-hover:after:w-full">

                        </span>
                        <h3 className="pt-4 group-hover:text-[#F4BF37] transition-colors duration-300 ease-in-out">Terrence Jackson</h3>
                        <h4 className="text-[#F4BF37]">Barber & Stylist</h4>
                        <p className="text-[#71717B] pt-3 text-sm">
                            Terrence specializes in modern men's styling, textured cuts, and hair designs. With his creative approach and technical skill, he excels at transforming your look...</p>
                    </div>

                    <div className="flex justify-center gap-5 pt-4 transition-all duration-300  transform group-hover:-translate-y-2">
                        <Facebook size={40} className="text-[#F4BF37] p-2 bg-[#423A25] rounded-full" />
                        <Instagram size={40} className="text-[#F4BF37] p-2 bg-[#423A25] rounded-full" />
                    </div>
                </div>
                <div className="group bg-[#222222] h-[500px] rounded-2xl hover:border-2 hover:border-[#DEAE34] transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer relative z-10">
                    <div className="overflow-hidden mt-5 w-full h-[220px] relative group">
                        <Image
                            alt="Fama Barber Shop and Beauty Salon Logo"
                            src='/shop.jpg'
                            fill
                            style={{ objectFit: 'fill' }}
                            className="z-4 absolute transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                            priority
                        />
                    </div>
                    <div className="flex justify-center flex-col text-white pt-5 px-5 text-center">
                        <span className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-32 after:w-20 after:h-[3px] after:bg-[#DEAE34] after:transition-all after:duration-300 group-hover:after:left-0 group-hover:after:w-full">

                        </span>
                        <h3 className="pt-4 group-hover:text-[#F4BF37] transition-colors duration-300 ease-in-out">Marcus Williams</h3>
                        <h4 className="text-[#F4BF37]">Senior Barber</h4>
                        <p className="text-[#71717B] pt-3 text-sm">
                            Marcus brings 8 years of experience to PMC Barbershop. His expertise in fades, beard sculpting, and precision lineup work has earned him a loyal...</p>
                    </div>

                    <div className="flex justify-center gap-5 pt-4 transition-all duration-300  transform group-hover:-translate-y-2">
                        <Facebook size={40} className="text-[#F4BF37] p-2 bg-[#423A25] rounded-full" />
                        <Instagram size={40} className="text-[#F4BF37] p-2 bg-[#423A25] rounded-full" />
                    </div>
                </div>

            </div>
            <div
                className="absolute bottom-[-40px] left-[-40px] w-72 h-72 rounded-full z-1 bg-[#25231C]"

            ></div>
        </section>
    )
}

export default ExpertStylists