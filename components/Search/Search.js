import React from "react";
import { ImSearch } from 'react-icons/im';

const Search = ({ title, value, setSearch }) => {

    return (
        <div className="flex flex-col mb-5 md:items-center md:justify-between md:flex-row pt-4">
            <p className='font-medium text-2xl p-4  md:py-0'>{title}</p>
            <div className="flex border">
                {setSearch ?
                    <input className={` block p-2 outline-none bg-white-100 md:w-[250px] w-full `} type="text"

                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={`Search ${value}`} /> :
                    <input className={` block p-2 outline-none bg-white-100 md:w-[250px] w-full `} type="text"
                        disabled
                        placeholder={`In process `} />
                }
                <div className="flex items-center px-5 text-white bg-black py-4 md:py-0"><ImSearch /></div>
            </div>
        </div>
    )
}
export default Search;