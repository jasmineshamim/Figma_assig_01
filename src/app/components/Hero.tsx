import Image from "next/image";
export default function Hero() {
    return (
        <section className="bg min-h-[600px] p-12 flex items-center justify-evenly max-md:flex-col max-md:justify-center">
            <div className="max-md:order-2 mb-4 md:mb-0 max-md:text-center space-y-4 md:mt-16 mt-0 md:ml-32 ml-0">
                <h1 className="hero_text md:text-5xl text-3xl font-extrabold md:w-[550px]">
                    Hi, I am John, <br />Creative Technologist
                </h1>
                <p className="md:pt-5 pt-0 text-lg md:text-xl">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                    <button className="button md:w-[205px] md:h-[50px] md:ml-[4px] ml-0 md:mt-[11px] mt-3 text-white text-lg 
                    font-medium drop-shadow-2xl ">
                        <a className="" href="#">Download Resume</a>
                    </button>
     
            </div>
            <div className="md:order-1 mb-10 w-full flex justify-center md:mt-[120px] mt-0 md:ml-[150px] ml-0
            drop-shadow-2xl ">
                <Image
                    className="md:w-[281px] md:h-[280px] h-[236px] w-[240px] rounded-full md:mr-32 mr-0 drop-shadow-2xl"
                    src="/images/profile.png"
                    alt="Profile"
                    width={200} 
                    height={200} 
                />
            </div>
        </section>
    );
}