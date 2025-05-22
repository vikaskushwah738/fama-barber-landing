import { Check } from "lucide-react"

import Link from "next/link"

const ServicePrices = () => {
    return (
        <section className="bg-[#1A1A1A] py-24 lg:px-16 md:px-10 px-5 relative overflow-hidden">

            <div
                className="absolute top-[-50px] right-[-20px] w-[280px] h-[280px] rounded-full z-5  bg-[#25231C]"
            ></div>
            <div className="flex justify-center items-center flex-col z-10">
                <p className="text-[#DEAE34] font-bold pt-8 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative z-10">
                    Quality Barbering at Fair Prices

                </p>
                <h2 className="text-4xl text-white font-bold pt-4 group relative inline-block z-10">
                    <span className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-28 after:w-20 after:h-[3px] after:bg-[#DEAE34] after:transition-all after:duration-300 group-hover:after:left-0 group-hover:after:w-full">
                        Our Service Prices
                    </span>
                </h2>
                <p className="text-[#71717B] lg:px-52 md:px-24 px-6 text-center pt-10 text-lg">Choose from our range of professional barbering services.</p>
            </div>
            <div className="pt-10 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <div className="group bg-[#222222] h-[480px] rounded-xl border-2 border-t-8  border-[#DEAE34] lg:px-6 px-5 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer relative z-10">

                    <h4 className="pt-5 text-white font-bold text-xl"> <span className="border-b-2  border-[#DEAE34]">Class</span>ic Services</h4>
                    <p className="pt-8"><span className="text-xl font-bold text-white">$</span>  <span className="text-5xl text-[#DEAE34]  font-extrabold">$25</span> <span className="text-[#71717B]">/mon</span></p>
                    <ul className=" pl-3 pt-7 space-y-4 text-white">
                        <li className="flex items-center gap-3 "><span className="bg-[#DEAE34] p-1 rounded-full"> <Check size={15} /></span>  Men&apos;s Haircut</li>
                        <li className="flex items-center gap-3 "><span className="bg-[#DEAE34] p-1 rounded-full"><Check size={15} /></span>  Kids Haircut (12 & under)</li>
                        <li className="flex items-center gap-3 "><span className="bg-[#DEAE34] p-1 rounded-full"><Check size={15} /></span>  Senior Haircut (65+)</li>
                        <li className="flex items-center gap-3 "><span className="bg-[#DEAE34] p-1 rounded-full"><Check size={15} /></span>  Military/First Responder Cut</li>
                        <li className="flex items-center gap-3 "><span className="bg-[#DEAE34] p-1 rounded-full"><Check size={15} /></span>  Basic Beard Trim</li>
                        <li className="flex items-center gap-3 "><span className="bg-[#DEAE34] p-1 rounded-full"><Check size={15} /></span>  Neck & Line Cleanup (between cuts)</li>
                    </ul>

                    <div className="text-white w-full text-center bg-[#DEAE34] p-2 mt-5 rounded-xl transition-all duration-300 transform hover:-translate-y-1 relative">
                        <Link href={"/"}
                            className=' '>
                            Book now
                        </Link>
                    </div>

                </div>
                <div className="group bg-[#222222] h-[480px] rounded-xl hover:border-2  hover:border-[#DEAE34] lg:px-6 px-5 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer relative z-10">

                    <h4 className="pt-5 text-white font-bold text-xl"> <span className="border-b-2  border-[#DEAE34]">Prem</span>ium Services</h4>
                    <p className="pt-8"><span className="text-xl font-bold text-white">$</span>  <span className="text-5xl text-[#DEAE34]  font-extrabold">$35</span> <span className="text-[#71717B]">/mon</span></p>
                    <ul className=" pl-3 pt-7 space-y-4 text-white">
                        <li className="flex items-center gap-3"> <span className="bg-[#DEAE34] p-1 rounded-full"> <Check size={15} /></span>Haircut & Beard Combo</li>
                        <li className="flex items-center gap-3"> <span className="bg-[#DEAE34] p-1 rounded-full"> <Check size={15} /></span>Hot Towel Shave</li>
                        <li className="flex items-center gap-3"> <span className="bg-[#DEAE34] p-1 rounded-full"> <Check size={15} /></span>Full Beard Shaping & Design</li>
                        <li className="flex items-center gap-3"> <span className="bg-[#DEAE34] p-1 rounded-full"> <Check size={15} /></span>Color Camo (Gray Blending)</li>
                        <li className="flex items-center gap-3"> <span className="bg-[#DEAE34] p-1 rounded-full"> <Check size={15} /></span>Hair & Scalp Treatment</li>
                        <li className="flex items-center gap-3"> <span className="bg-[#DEAE34] p-1 rounded-full"> <Check size={15} /></span>Head Shave with Hot Towel</li>

                    </ul>

                    <div className="hover:text-white w-full text-center text-black bg-[#1A1A1A] hover:bg-[#DEAE34] border-[#71717B] border p-2 mt-5 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                        <Link href={"/"}
                            className=' '>
                            Book now
                        </Link>
                    </div>

                </div>
                <div className="group bg-[#222222]  h-[480px] rounded-xl hover:border-2 hover:border-[#DEAE34] lg:px-6 px-5 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer relative z-10">

                    <h4 className="pt-5 text-white font-bold text-xl"> <span className="border-b-2  border-[#DEAE34]">Pack</span>ages</h4>
                    <p className="pt-8"><span className="text-xl font-bold text-white">$</span>  <span className="text-5xl text-[#DEAE34]  font-extrabold">$50</span> <span className="text-[#71717B]">/mon</span></p>
                    <ul className=" pl-3 pt-7 space-y-4 text-white">

                        <li className="flex items-center gap-3"> <span className="bg-[#DEAE34] p-1 rounded-full"> <Check size={15} /></span> The Works (Cut, Shave, Treatment)</li>
                        <li className="flex items-center gap-3"> <span className="bg-[#DEAE34] p-1 rounded-full"> <Check size={15} /></span> Father & Son Combo</li>
                        <li className="flex items-center gap-3"> <span className="bg-[#DEAE34] p-1 rounded-full"> <Check size={15} /></span> Groom&apos;s Package</li>
                        <li className="flex items-center gap-3"> <span className="bg-[#DEAE34] p-1 rounded-full"> <Check size={15} /></span> Monthly Membership (2 cuts/mo)</li>
                        <li className="flex items-center gap-3"> <span className="bg-[#DEAE34] p-1 rounded-full"> <Check size={15} /></span> First-Time Client Special</li>
                        <li className="flex items-center gap-3"> <span className="bg-[#DEAE34] p-1 rounded-full"> <Check size={15} /></span> Loyalty Program</li>
                    </ul>

                    <div className="hover:text-white w-full text-center text-black bg-[#1A1A1A] hover:bg-[#DEAE34] border border-[#71717B] p-2 mt-5 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                        <Link href={"/"}
                            className=' '>
                            Book now
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

export default ServicePrices