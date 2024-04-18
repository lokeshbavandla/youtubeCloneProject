import { useEffect, useState } from "react";
import { fetchApi } from "../utils/apiFetch";
import {ErrorComponent, Loader, Videos} from './'
import {useSelector} from 'react-redux'

function Feed(){
    const [videos,setVideos] = useState(null);
    const selectedCategory = useSelector((state)=>state.videoApp.selectedCategory);
    const [error,setError] = useState(null);

    useEffect(()=>{
        setVideos(null);
        setError(null);

        fetchApi(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVideos(data.items)).catch((error)=>{
            setError(error.message);
        });

        console.log(videos);
    }, [selectedCategory])

    if(!videos) return <Loader />;
    if(error) return <ErrorComponent />;


    return(
        <div className="pt-[7rem] pb-[2rem] px-[2rem] bg-[#131415] bg-gray-700">
            {/* <div className={`fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] ${toggleMenu ? 'block' : 'hidden'}`}>
                    <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            </div> */}

            <div>
                <Videos videos={videos}/>
            </div>

        </div>
    )
}


export default Feed;