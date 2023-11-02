import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import {useState} from "react";
const Avatar = () => {
    const [showProfile, setShowProfile] = useState<boolean>(false)

    return (
        <div onClick={()=>setShowProfile(!showProfile)} className="relative cursor-pointer">
            <img src="user.jpg" className="w-[35px] h-[35px] rounded-full" alt={"tstt"}/>
            <div className={`absolute  z-[2] bg-gray-200 my-2  opacity-50 shadow-lg ${showProfile?"":"hidden"} `}>
                <Link href={"/sign"}   >SignIn</Link>
            </div>
        </div>

    );
};

export default Avatar;
