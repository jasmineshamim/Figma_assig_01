import Image from "next/image";

export default function Feature() {
    return (
        <div className="bg w-auto h-auto p-5  ">
            <div className="px-5 md:pl-[200px] font-medium  text-2xl pt-[25px] md:pt-[80px]">
                <h2>Featured works</h2>
            </div>

            <div className="flex flex-col">
                {[1, 2, 3].map((index) => (
                    <div key={index} className="md:pl-[200px] pt-10 flex flex-col md:flex-row items-start rounded-sm">
                        <div className="flex-shrink-0">
                            <Image
                                src={`/images/feature${index}.png`}
                                alt={`Feature ${index}`}
                                width={250}
                                height={200}
                                className="md:h-[180px] w-[300px] md:w-[260px] rounded-md h-[200px]" // Changed to w-full for mobile
                            />
                        </div>

                        <div className="pl-0 md:pl-7">
                            <h1 className="font-bold text-2xl md:text-3xl mt-4 md:mt-0">Designing Dashboards</h1>
                            <div className="mt-3 flex flex-wrap">
                                <button className="rect w-[80px] h-[28px] rounded-full text-white mt-3 font-bold text-base md:text-xl">
                                    2024
                                </button>
                                <div className="head w-[90px] h-[20px] md:pt-2 pt-[14px] pl-2 md:pl-5 text-base md:text-2xl font-normal">
                                    Dashboard
                                </div>
                            </div>
                            <div className="w-full md:w-[535px] h-[160px] mt-4">
                                <p className="text-base font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}