
import Link from "next/link"
const CTA = () => {
    return (

        <section className="md:px-16 sm:px-10 px-5 relative overflow-hidden flex flex-col justify-center items-center md:h-[450px] h-auto bg-[#F4BF37] text-white">
            <div
                className="absolute top-[-40px] left-[-40px] w-60 h-60 rounded-full z-0 bg-[#F5C64B]"
            ></div>

            <div
                className="absolute top-[70px] right-[-75px] w-60 h-60 rounded-full z-0 bg-[#F5C64B]"
            ></div>

            <h2 className="text-center text-4xl font-bold z-10 lg:pt-3 pt-10">Ready for a Fresh Cut?</h2>
            <p className="pt-6 lg:px-72 text-lg text-center z-10">Visit Fama Barber Shop and Beauty Salon for premium men&apos;s grooming services. Our expert barbers are ready to give you a clean, precise cut and a relaxing barbershop experience.</p>
            {/* <div className="flex md:flex-row flex-col md:gap-5 gap-2 pt-14 relative z-10 lg:pb-0 pb-14">
                <Link className="bg-white text-[#F4BF37] p-1.5 px-5 w-full md:w-auto  rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1" href="#contact">Book an Appointment</Link>
                <Link className="bg-[#1A1A1A] text-[#F4BF37] p-1.5 px-5 w-full md:w-auto  rounded-xl border-2 border-white hover:bg-[#F4BF37] hover:text-[#1A1A1A] transition-all duration-300 ease-in-out transform hover:-translate-y-1" href="#services">View Our Services</Link>
            </div> */}
            <div className="w-full md:justify-center flex md:flex-row flex-col items-stretch md:items-center md:gap-5 gap-2 pt-14 relative z-10 lg:pb-0 pb-14">
                <Link
                    className="bg-white text-[#F4BF37] p-1.5 px-5 w-full md:w-auto rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 text-center"
                    href="#contact"
                >
                    Book an Appointment
                </Link>
                <Link
                    className="bg-[#1A1A1A] text-[#F4BF37] p-1.5 px-5 w-full md:w-auto rounded-xl border-2 border-white hover:bg-[#F4BF37] hover:text-[#1A1A1A] transition-all duration-300 ease-in-out transform hover:-translate-y-1 text-center"
                    href="#services"
                >
                    View Our Services
                </Link>
            </div>


            <div
                className="absolute bottom-[-98px] left-[120px] w-60 h-60 rounded-full z-0 bg-[#F5C64B]"
            ></div>
        </section>
    )
}

export default CTA