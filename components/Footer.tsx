import Link from "next/link"
import Image from "next/image";
import { Facebook, Instagram, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#222222]  text-gray-50 shadow ">
            <section className="p-2 md:px-10 md:py-10 grid px-5 md:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-6">
                <div>
                    <div className="flex flex-col items-center md:grid md:place-items-center gap-2 pb-5">
                        <Image
                            src='/Logo.png'
                            alt="Fama Barber Shop and Beauty Salon Logo"
                            height={50}
                            width={60}
                            className=""
                        />
                        <div className="md:text-center pt-2 md:pt-4">
                            <h3 className="font-semibold text-lg md:text-xl">Fama Barber Shop and Beauty Salon</h3>
                            <p>Classic cuts with modern style</p>
                        </div>
                        <div className="flex gap-5 pt-5">
                            <Facebook size={40} className="text-[#F4BF37] p-2 bg-[#423A25] rounded-full" />
                            <Instagram size={40} className="text-[#F4BF37] p-2 bg-[#423A25] rounded-full" />
                        </div>

                    </div>
                </div>
                <div>
                    <div className="text-lg uppercase mb-3 font-semibold">
                        Quick Links
                    </div>
                    <ul className="space-y-4 text-sm">
                        <li className="pt-3">
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link href="/about-us" >About</Link>
                        </li>
                        <li >
                            <Link href="/sectors" aria-label="Go to the Sectors page">Services</Link>
                        </li>
                        <li>
                            <Link href="/laboratory" aria-label="Go to the Laboratory page">Gallery</Link>
                        </li>
                        <li>
                            <Link href="/contact-us" aria-label="Go to the Contact page">Contact</Link>
                        </li>
                    </ul>

                </div>
                <div>
                    <div className="text-lg uppercase mb-3 font-semibold">Contact Us</div>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-2">
                            <span><MapPin size={20} className="text-[#F4BF37] inline-block" /></span>
                            500 N Bell Ave #109, Denton, TX 76209, United States
                        </li>
                        <li>+1 940-612-9127</li>
                    </ul>
                </div>
                <div>
                    <div className="text-lg uppercase mb-3 font-semibold">
                        Newsletter
                    </div>
                    <div className="flex flex-col gap-1 items-center mb-2 rounded-md">
                        <p className="text-sm font-medium">Subscribe to our newsletter to receive updates and news.</p>
                        <form className="w-full pt-6" >
                            <input type="text" className="px-3 border-2 border-white rounded-xl p-1 w-full" placeholder="Your email" />
                            <input type="submit" className="w-full mt-3 text-white rounded-xl bg-[#F4BF37] p-1" />
                        </form>
                    </div>
                </div>
            </section>
            <section className="bg-[#222222] border-t-2 border-white p-2 md:px-24 md:py-5 md:flex justify-between text-sm text-center">
                <p className="text-sm"> © {new Date().getFullYear()} Fama Barber Shop and Beauty Salon. All Rights Reserved.</p>
                <div className="flex gap-1 justify-center items-center lg:pt-0 pt-2">
                    Design & Developed by
                    <Link
                        href="https://vikas-me.vercel.app/"
                        target="_blank"
                        className=""
                    >
                        Vikas
                    </Link>

                </div>

            </section>
        </footer>
    )
}

export default Footer