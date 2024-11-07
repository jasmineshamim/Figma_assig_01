export default function Recent() {
    return (
        <div className="recent_post lg:h-[900px] sm:h-[525px] md:h-[525px]">
            <div className="mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold mx-5 md:mx-40 pt-[26px]">Recent Post</h2>
                    <a href="#" className="view font-semibold text-xl pt-[26px] mx-5 md:mx-40">View all</a>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center mx-5 md:mx-0 md:space-x-6">

                <div className="w-full sm:w-[480px] h-[375px] bg-white mb-6 sm:mb-0 md:mr-12 ">
                    <h2 className="font-bold text-[27px] px-6 md:px-10 pt-6 md:pt-9">Making a design system from scratch</h2>
                    <div className="group px-6 pt-5 md:px-10">
                        <h4>
                            12 Feb 2024 <span className="mx-5">|</span> Design, Pattern
                        </h4>
                    </div>
                    <div className="md:mt-9 mt-4 md:px-10 px-6 md:mr-3">
                        <p className="amet text-base font-normal">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>

                <div className="w-full sm:w-[480px] h-[375px] bg-white sm:ml-7  ">
                    <h2 className="font-bold text-[27px] px-6 md:px-10 pt-6 md:pt-9">Making a design system from scratch</h2>
                    <div className="group px-6 pt-5 md:px-10">
                        <h4>
                            12 Feb 2024 <span className="mx-5">|</span> Design, Pattern
                        </h4>
                    </div>
                    <div className="mt-4 px-6 md:mt-9 md:mr-3 md:px-10">
                        <p className="amet text-base font-normal">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
