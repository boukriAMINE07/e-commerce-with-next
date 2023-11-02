import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import {useState} from "react";
type Props = {}
const SearchBar = (props:Props) => {

    return (
        <div>
            <div className="flex items-center bg-gray-100 p-2 rounded-full max-md:hidden">
                <button >
                    <MagnifyingGlassIcon className="h-4 w-4 opacity-50" aria-hidden="true" />
                </button>
                <input type="text" placeholder="Search ..." autoComplete="false" className={"outline-none bg-transparent caret-blue-500 ml-2 placeholder:font-light placeholder:text-gray-600 text-[15px]"}/>
            </div>
        </div>
    );
};

export default SearchBar;
