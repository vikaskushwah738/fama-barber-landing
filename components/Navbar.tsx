import { Globe, Phone, SunMoon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="bg-[#1A1A1A] text-white font-medium h-20 flex items-center px-24 justify-between">
            <div className="h-10 w-12 relative">
                <Image
                    alt="Fama Barber Shop and Beauty Salon Logo"
                    src='/Logo.png'
                    fill
                    style={{ objectFit: 'fill' }}
                    className="absolute rounded-2xl "
                    priority
                />
            </div>
            <ul className="flex gap-7">
                <li><Link href={"/"} className=''>Home</Link></li>
                <li><Link href="#about" className=''>About</Link></li>
                <li><Link href="#services" className=''>Services</Link></li>
                <li><Link href="#gallery" className=''>Gallery</Link></li>
                <li><Link href="#contact" className=''>Contact</Link></li>
            </ul>
            <ul className="flex gap-7 items-center">
                <li><SunMoon size={20} strokeWidth={1.25} /></li>
                <li><Globe size={20} strokeWidth={1.25} /></li>
                <li className="flex gap-2"><Phone className="text-[#DEAE34]" size={19} />+91 940-612-9127</li>
                <li className="bg-[#DEAE34] hover:bg-[#f0cd74] rounded-xl text-sm p-2">Book an Appointment</li>
            </ul>
        </nav>
    )
}

export default Navbar