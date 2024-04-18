import { useEffect, useState } from "react";
import { fetchApi } from "../utils/apiFetch";
import { useParams } from "react-router-dom";
import {Loader, Videos, ErrorComponent} from './'


function SearchFeed(){

    const [videos,setVideos] = useState(null);

    const { searchTerm } = useParams();

    const [error,setError] = useState(null);

    useEffect(()=>{
        setVideos(null);
        setError(null);

        fetchApi(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items)).catch((error)=>{
            setError(error.message);
        });

        console.log(videos);
    }, [searchTerm])

    if(!videos) return <Loader />;
    if(error) return <ErrorComponent />;


    return(

        <div className="pt-[6rem] pb-[2rem] px-[2rem] bg-[#131415] bg-gray-700">

            <div className="mb-[2rem] pl-2">
                <p className="text-2xl text-white font-medium">Search Results for <span className="text-red-500">{searchTerm}</span> videos </p>
            </div>
            {/* <div className={`fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] ${toggleMenu ? 'block' : 'hidden'}`}>
                    <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            </div> */}

            <div>
                <Videos videos={videos}/>
            </div>

        </div>
    )
}

export default SearchFeed;