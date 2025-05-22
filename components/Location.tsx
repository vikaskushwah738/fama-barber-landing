import { MapPin, Phone, Rocket } from "lucide-react"
import Link from "next/link"

const Location = () => {
    return (
        <section className="bg-[#1A1A1A] py-24 lg:px-16 md:px-10 px-5 relative overflow-hidden">
            <div
                className="absolute top-[-50px] right-[-20px] w-[280px] h-[280px] rounded-full z-5  bg-[#25231C]"
            ></div>
            <div className="flex justify-center items-center flex-col z-10">
                <p className="text-[#DEAE34] font-bold pt-8 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative z-10">
                    Visit Our Shop
                </p>
                <h2 className="text-4xl text-white font-bold pt-4 group relative inline-block z-10">
                    <span className="pb-1 text-white relative after:content-[''] after:absolute after:bottom-0 after:left-20 after:w-20 after:h-[3px] after:bg-[#DEAE34] after:transition-all after:duration-300 group-hover:after:left-0 group-hover:after:w-full">
                        Our Location
                    </span>
                </h2>
                <p className="text-[#71717B] lg:px-52 md:px-24 px-6 text-center pt-10 text-lg">Conveniently located in Denton, TX:</p>
            </div>
            <div className="lg:flex gap-5">
                <div className="lg:w-[50%] z-10 pt-5 transition-all duration-300 transform hover:-translate-y-2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56865499.864684716!2d-121.9644891!3d29.5514734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d2a0020404b%3A0x2417fbad065476dd!2sHandcrafted%20Barbershop!5e0!3m2!1sen!2sin!4v1747889657261!5m2!1sen!2sin"

                        className="rounded-xl w-full lg:h-[400px] h-[380px]"
                        loading="lazy"></iframe>
                </div>
                <div className="bg-[#222222] lg:w-[50%] px-5 mt-5 rounded-xl relative z-10 border border-[#71717B] transition-all duration-300 transform hover:-translate-y-2">
                    <h3 className="text-white pt-4 text-xl"><span className="border-b-2 border-[#DEAE34]">Cont</span>act Information</h3>
                    <div className="flex items-center gap-6 pt-10">
                        <div className="bg-[#DEAE34] p-2 rounded-full">
                            <MapPin size={20} className="text-white" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white">Address</h4>
                            <p className="text-[#71717B]">500 N Bell Ave #109, Denton, TX 76209, United States</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 pt-10">
                        <div className="bg-[#DEAE34] p-2 rounded-full">
                            <Phone className=" text-white" size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white">Phone</h4>
                            <p className="text-[#71717B]">+1 940-612-9127</p>
                        </div>
                    </div>
                    <div className="pt-12 flex gap-6 pb-16">
                        <Link href={"/"}
                            className='transition-all transform hover:-translate-y-1 duration-300 ease-in-out w-44 text-white bg-[#DEAE34]  flex justify-center items-center gap-4 p-1.5 mt-3 rounded-xl'>
                            <Rocket className=" text-white" size={15} />Get Dirctions
                        </Link>
                        <Link href="tel:+19406129127"
                            className='transition-colors duration-300 ease-in-out w-36 text-black bg-[#1A1A1A] hover:bg-[#DEAE34]   flex justify-center items-center gap-4 p-1.5 mt-3 rounded-xl'>
                            <Phone className="text-black" size={15} />Call us
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className="absolute bottom-[-40px] left-[-40px] w-72 h-72 rounded-full z-1 bg-[#25231C]"

            ></div>
        </section>
    )
}

export default Location