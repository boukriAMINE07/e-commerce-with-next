'use client'
import {useState} from "react";
import SearchBar from "@/app/components/SearchBar";
import Avatar from "@/app/components/Avatar";
import Link from "next/link";
import {ShoppingCartIcon} from "@heroicons/react/24/outline";
import {ChevronUpIcon} from "@heroicons/react/24/outline";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";


type Props = {}


const Navbar = (props: Props) => {
    const [showProfile, setShowProfile] = useState<boolean>(false)
    const [showNav, setShowNav] = useState<boolean>(false)
    const navItems = [{name: "Shop", link: "/"}, {name: "Filters", link: "/filters"}, {
        name: "My products",
        link: "/myproducts"
    }]
    return (
        <div>
            <div className="flex items-center justify-between py-4 relative">
                <div className="flex items-center md:space-x-10 lg:space-x-10">
                    <div className="font-semibold text-2xl"><Link href="/">SEINE</Link></div>
                    <nav className="max-md:hidden">
                        <ul className="flex items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]">
                            {navItems.map((item, index) => (<li key={index}>
                                <Link href={item.link} className="py-3 inline-block w-full">{item.name}</Link>
                            </li>))}

                        </ul>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <SearchBar/>
                    <Avatar/>
                    <Link href={"/cart"}>
                        <div className="p-2 bg-gray-100 rounded-full">
                            <ShoppingCartIcon className="h-5 w-5" aria-hidden="true"/>
                        </div>
                    </Link>
                    <span onClick={() => setShowNav((!showNav))}
                          className="p-[9px] bg-gray-100 rounded-full md:hidden ">
                    <ChevronUpIcon
                        className={`h-5 w-5 transition ease-in duration-150 ${showNav ? "rotate-180" : "0"}`}/>
                </span>
                </div>

            </div>
            <div className={`md:hidden ${showNav ? "pb-4 px-5" : "h-0 invisible opacity-0"}`}>
                <ul className={`flex flex-col text-[15px] opacity-75 px-2`}>
                    {navItems.map((item, index) => (<li key={index}>
                        <Link href={item.link} className="py-3 inline-block w-full">{item.name}</Link>
                    </li>))}
                </ul>
                <div className={"flex items-center bg-gray-100 p-2 rounded-lg my-4 py-3"}>
                    <button >
                        <MagnifyingGlassIcon className="h-4 w-4 opacity-50" aria-hidden="true" />
                    </button>
                    <input type="text" placeholder="Search ..." autoComplete="false" className={"outline-none bg-transparent caret-blue-500 ml-2 placeholder:font-light placeholder:text-gray-600 text-[15px]"}/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
