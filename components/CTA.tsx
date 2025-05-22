
import Link from "next/link"
const CTA = () => {
    return (

        <section className="relative overflow-hidden flex flex-col justify-center items-center h-[450px] bg-[#F4BF37] text-white">
            <div
                className="absolute top-[-40px] left-[-40px] w-60 h-60 rounded-full z-0 bg-[#F5C64B]"
            ></div>

            <div
                className="absolute top-[70px] right-[-75px] w-60 h-60 rounded-full z-0 bg-[#F5C64B]"
            ></div>

            <h2 className="text-center text-4xl font-bold z-10">Ready for a Fresh Cut?</h2>
            <p className="pt-6 lg:px-72 text-lg md:px-20 sm:px-10 px-5 text-center z-10">Visit Fama Barber Shop and Beauty Salon for premium men&apos;s grooming services. Our expert barbers are ready to give you a clean, precise cut and a relaxing barbershop experience.</p>
            <div className="md:flex flex flex-col gap-5 pt-4 relative z-10">
                <Link className="bg-white text-[#F4BF37] p-1.5 px-4 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1" href="#contact">Book an Appointment</Link>
                <Link className="bg-[#1A1A1A] text-[#F4BF37] p-1.5 px-4 rounded-xl border-2 border-white hover:bg-[#F4BF37] hover:text-[#1A1A1A] transition-all duration-300 ease-in-out transform hover:-translate-y-1" href="#services">View Our Services</Link>
            </div>

            <div
                className="absolute bottom-[-98px] left-[120px] w-60 h-60 rounded-full z-0 bg-[#F5C64B]"
            ></div>
        </section>
    )
}

export default CTA