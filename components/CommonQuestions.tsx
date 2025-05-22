
import FaqTabs from "./FaqTab"

const CommonQuestions = () => {
    return (
        <section className="bg-[#1A1A1A] py-24 lg:px-16 md:px-10 px-5 relative overflow-hidden">

            <div
                className="absolute top-[-50px] right-[-20px] w-[280px] h-[280px] rounded-full z-5  bg-[#25231C]"
            ></div>
            <div className="flex justify-center items-center flex-col z-10">
                <p className="text-[#DEAE34] font-bold pt-8 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative z-10">
                    Common Questions
                </p>
                <h2 className="text-4xl text-white font-bold pt-4 group relative inline-block z-10 text-center">
                    <span className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-44 after:w-20 after:h-[3px] after:bg-[#DEAE34] after:transition-all after:duration-300 group-hover:after:left-0 group-hover:after:w-full">
                        Frequently Asked Questions
                    </span>
                </h2>
                <p className="text-[#71717B] lg:px-52 md:px-24 px-6 text-center pt-10 text-lg">Answers to common questions about our barbershop services.</p>
            </div>

            <FaqTabs />

            <div
                className="absolute bottom-[-40px] left-[-40px] w-72 h-72 rounded-full z-1 bg-[#25231C]"

            ></div>
        </section>
    )
}

export default CommonQuestions