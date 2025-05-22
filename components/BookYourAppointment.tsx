import { Clock4, MapPin, Phone, } from "lucide-react"

import ServiceForm from "./ServiceForm"

const BookYourAppointment = () => {
    return (
        <section className="bg-[#1A1A1A] py-24 lg:px-16 md:px-10 px-5 relative overflow-hidden" id='contact'>
            <div
                className="absolute top-[-50px] right-[-20px] w-[280px] h-[280px] rounded-full z-5  bg-[#25231C]"
            ></div>
            <div className="flex justify-center items-center flex-col z-10">
                <p className="text-[#DEAE34] font-bold pt-8 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative z-10">
                    Book Your Appointment
                </p>
                <h2 className="text-4xl text-white font-bold pt-4 group relative inline-block z-10">
                    <span className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-12 after:w-20 after:h-[3px] after:bg-[#DEAE34] after:transition-all after:duration-300 group-hover:after:left-0 group-hover:after:w-full">
                        Contact Us
                    </span>
                </h2>
                <p className="text-[#71717B] lg:px-52 md:px-24 px-6 text-center pt-10 text-lg">Ready for a fresh look? Book your appointment today or contact us for any questions.</p>
            </div>
            <div className="lg:flex gap-5">
                <div className="bg-[#222222] lg:w-[35%] px-5 mt-5 rounded-xl relative z-10 hover:border-2 hover:border-[#DEAE34] transition-all transform hover:-translate-y-2 duration-300 ease-in-out">
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
                    <div className="flex items-center gap-6 pt-10 pb-10">
                        <div className="bg-[#DEAE34] p-2 rounded-full">
                            <Clock4 className=" text-white" size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white">Business Hours</h4>
                            <p className="text-[#71717B]">
                                Mon-Fri: 9:00 AM - 7:00 PM, Sat: 9:00 AM - 5:00 PM, Sun: Closed</p>
                        </div>
                    </div>

                </div>
                <div className="bg-[#222222] lg:w-[75%] mt-5 rounded-xl hover:border-2 hover:border-[#DEAE34] transition-all transform hover:-translate-y-2 duration-300 ease-in-out">
                    <ServiceForm />
                </div>
            </div>
            <div
                className="absolute bottom-[-40px] left-[-40px] w-72 h-72 rounded-full z-1 bg-[#25231C]"

            ></div>
        </section>
    )
}

export default BookYourAppointment