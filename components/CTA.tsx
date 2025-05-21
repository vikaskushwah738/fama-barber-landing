
import Link from "next/link"
const CTA = () => {
    return (
        <section className="flex flex-col justify-center items-center h-[450px] bg-[#F4BF37] text-white">

            <h2 className="text-center text-4xl font-bold">Ready for a Fresh Cut?</h2>
            <p className="pt-6 lg:px-72 text-lg md:px-20 sm:px-10 px-5 text-center">Visit PMC Barbershop for premium men's grooming services. Our expert barbers are ready to give you a clean, precise cut and a relaxing barbershop experience.</p>
            <div className="flex gap-5 pt-4">
                <Link className="bg-white text-[#F4BF37] p-1.5 px-4 rounded-xl" href={"/"}>Book an Appointment</Link>
                <Link className="bg-[#1A1A1A] text-[#F4BF37] p-1.5 px-4 rounded-xl border-2 border-white hover:bg-[#F4BF37] hover:text-[#1A1A1A]" href={"/"}>View Our Services</Link>
            </div>

        </section>
    )
}

export default CTA