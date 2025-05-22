'use client'
import { Globe, Menu, Phone, SunMoon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef<HTMLUListElement | null>(null);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        function handleClickOutSideEvent(event: MouseEvent) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutSideEvent);

        return () => {
            document.removeEventListener('mousedown', handleClickOutSideEvent);
        };
    }, []);
    return (
        <header className="fixed w-full z-25">
            <nav className="bg-[#1A1A1A] text-white font-medium h-20 flex items-center lg:px-24 md:px-10 px-5 justify-between">
                <div className="h-10 w-12 relative">
                    <Image
                        alt="Fama Barber Shop and Beauty Salon Logo"
                        src='/logo.png'
                        fill
                        style={{ objectFit: 'fill' }}
                        className="absolute rounded-2xl "
                        priority
                    />
                </div>
                <ul className="lg:flex hidden gap-7">
                    <li><Link href={"/"} className=''>Home</Link></li>
                    <li><Link href="#about" className=''>About</Link></li>
                    <li><Link href="#services" className=''>Services</Link></li>
                    <li><Link href="#gallery" className=''>Gallery</Link></li>
                    <li><Link href="#contact" className=''>Contact</Link></li>
                </ul>
                <ul className="lg:flex hidden gap-7 items-center">
                    <li><SunMoon size={20} strokeWidth={1.25} /></li>
                    <li><Globe size={20} strokeWidth={1.25} /></li>
                    <li className="flex gap-2"><Phone className="text-[#DEAE34]" size={19} />+91 940-612-9127</li>
                    <li className="bg-[#DEAE34] hover:bg-[#f0cd74] rounded-xl text-sm p-2"><Link href="#contact" className=''>Book an Appointment</Link></li>
                </ul>

                <div className="text-blue-950 text-3xl lg:hidden">

                    <button onClick={toggleNavbar}>
                        <span className="sr-only">{isOpen ? 'Close navigation' : 'Open navigation'}</span>
                        {isOpen ? <X className="text-gray-50" /> : <Menu className="text-gray-50" />}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <ul
                    ref={sidebarRef}
                    // bg-opacity-70 
                    onClick={toggleNavbar}
                    className={`${isOpen ? "translate-x-0" : "-translate-x-3/4"} ease-in-out translate-all duration-500 lg:hidden fixed w-[75%] right-0 space-y-4 h-screen text-gray-50  bg-[#1E1E1E] opacity-70 z-10 flex flex-col items-center pt-5 md:px-10 px-5`}>
                    <ul className="flex flex-col w-full text-center gap-7">
                        <li className="border-b-2 border-[#DEAE34] pb-2"><Link href={"/"} className=''>Home</Link></li>
                        <li className="border-b-2 border-[#DEAE34] pb-2"><Link href="#about" className=''>About</Link></li>
                        <li className="border-b-2 border-[#DEAE34] pb-2"><Link href="#services" className=''>Services</Link></li>
                        <li className="border-b-2 border-[#DEAE34] pb-2"><Link href="#gallery" className=''>Gallery</Link></li>
                        <li className="border-b-2 border-[#DEAE34] pb-2"><Link href="#contact" className=''>Contact</Link></li>

                        <li className="border-b-2 border-[#DEAE34] pb-2 flex justify-center"><SunMoon size={20} strokeWidth={1.25} /></li>
                        <li className="border-b-2 border-[#DEAE34] pb-2 flex justify-center"><Globe size={20} strokeWidth={1.25} /></li>
                        <li className="gap-2 border-b-2 border-[#DEAE34] pb-2 flex justify-center"><Phone className="text-[#DEAE34]" size={19} />+91 940-612-9127</li>
                        <li className="border-b-2 border-[#DEAE34] pb-2"><Link href="#contact" className=''>Book an Appointment</Link></li>
                    </ul>
                </ul>
            )}
        </header >
    )
}

export default Navbar