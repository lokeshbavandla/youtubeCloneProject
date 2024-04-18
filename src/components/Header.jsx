import { Link, useNavigate } from "react-router-dom";
import {SearchBar, SideBar} from './index'
import { useEffect, useMemo, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { toggleMenuHandler,selectedCategoryHandler } from "../redux/videoAppSlice";

function Header(){

    // const [toggleMenu,setToggleMenu] = useState(false);

    const dispatch = useDispatch();

    const toggleMenu = useSelector((state)=>state.videoApp.toggleMenu);

    const navigate = useNavigate();

    useEffect(()=>{
        console.log(toggleMenu);
    })

    return(
        <div>
                <div className=" fixed top-0 left-0 right-0 h-[4rem] bg-black text-xl text-white p-[0.75rem] flex items-center gap-5 justify-between sm:text-xl sm:py-[1.5rem] sm:px-[1.75rem] md:text-2xl md:py-[2.25rem] lg:text-2xl z-[1000]">

                    <div className="flex items-center">
                        <div className="mr-[0.5rem] sm:mr-[1rem] mt-[1px] cursor-pointer"
                            // onClick={()=>setToggleMenu((prev)=>!prev)}
                            onClick={()=> dispatch(toggleMenuHandler(!toggleMenu))}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </div>
                    </div>
                    
                    <div className="cursor-pointer" onClick={()=>{dispatch(selectedCategoryHandler('web development'));
                            navigate('/');
                }}>     
                                <h2 className="font-bold text-red-500">VideoTube</h2>
                    </div>
                   

                    {/* <div className="hidden max-sm:block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div> */}
                    <SearchBar />
                    
                    
                </div>

                <div className={`fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] ${toggleMenu ? 'block' : 'hidden'} z-[1]`}>
                    <SideBar/>
                </div>

</div>
    )
}

export default Header;