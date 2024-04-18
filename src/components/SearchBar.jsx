import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar(){

    const [searchEnabled,setSearchEnabled] = useState(false);

    const [searchValue,setSearchValue] = useState('');

    const navigate = useNavigate();

    return(

        <div>
             <div className={`flex items-center relative ${searchEnabled ? 'flex-1 block' : 'max-sm:hidden'} `}>
                <div className="absolute right-4 top-2 cursor-pointer text-red-500"
                    onClick={()=> searchValue != '' ? navigate(`/search/${searchValue}`) : null}
                >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                </div>

                <div className="min-w-[5rem] w-full flex">
                        <input type="text" className="outline-none text-black text-lg rounded-full pl-4 w-full py-1" placeholder="Search"
                            onChange={(e)=>setSearchValue(e.target.value)}
                            onFocus={()=>setSearchEnabled(true)}
                            onBlur={()=>setSearchEnabled(false)}
                        />

                        {/* <p className="text-lg bg-blue-500 px-4 py-1 rounded-full ml-[-2rem]">Search</p> */}
                </div>
            </div>

            <div className={`hidden ${searchEnabled ? 'hidden' : 'max-sm:block'}`}
                onClick={()=>setSearchEnabled(true)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
        </div>
       
    )
}

export default SearchBar;