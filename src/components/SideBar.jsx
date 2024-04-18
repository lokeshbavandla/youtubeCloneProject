import { sideBarData, recommendedCategories } from "../constants";
import { selectedCategoryHandler, toggleMenuHandler } from "../redux/videoAppSlice";
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";

function SideBar(){

    const dispatch = useDispatch();
    const selectedCategory = useSelector((state)=>state.videoApp.selectedCategory);
    const navigate = useNavigate();

    return(
        
            <div className="bg-black h-[calc(100vh-4rem)] max-w-[15rem] mt-[4rem] md:mt-[4.5rem] border-t-2 border-t-gray-700 overflow-auto z-[-500]">
                    <div className="flex flex-col gap-2 text-white px-7 pt-10">

                        {sideBarData.map((data)=>(
                        <button key={data.id} className={`flex items-center gap-5 hover:bg-gray-700 px-5 py-2 hover:rounded-full ${selectedCategory==data.searchResult ? 'bg-gray-700 rounded-full' : ''}`}
                            onClick={()=>{//setSelectedCategory(data.categoryName)
                                dispatch(selectedCategoryHandler(data.searchResult))
                                dispatch(toggleMenuHandler(false));
                                navigate('/')
                            }}
                        >
                            
                                <span className="material-symbols-rounded text-red-500">
                                    {data.name}
                                </span>

                            <span className="text-[1rem]">{data.categoryName}</span>
                        </button>
                        ))}

                        <div className="w-full h-[1px] bg-gray-700 mt-2 mb-4"></div>

                    </div>

                    <div className="flex flex-row flex-wrap gap-2 text-white px-10 py-1">

                        <div className="text-xl font-bold mb-2 mr-10">Your Feed</div>

                        {recommendedCategories.map((data)=>(
                            <button key={data.id} className=" text-sm flex items-center bg-gray-700 px-2 py-1 rounded-full"
                                onClick={()=>{//setSelectedCategory(data.name)
                                    dispatch(selectedCategoryHandler(data.name))
                                    dispatch(toggleMenuHandler(false))
                                    navigate('/')
                                }}
                            >
                                <span className="text-red-500">
                                    {data.name}
                                </span>
                            </button>))}
                    </div>

            </div>
        
    )
}

export default SideBar;