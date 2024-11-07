import Link from "next/link";

export default function Navigate() {
    return (
        <div className="bg">
            <div className="flex justify-end">
                <ul className="w-[283px] h-[25px] p-8 font-semibold text-xl flex  justify-end   items-center  gap-6 md:mr-7 md:mt-7">
                    <li>
                        <Link href="#">
                            Works
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}