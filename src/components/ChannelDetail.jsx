import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../utils/apiFetch";
import {ErrorComponent, Loader, VideoCard} from './'

function ChannelDetail(){

    const [channelDetails,setChannelDetails] = useState(null);
    const [videos,setVideos] = useState(null);
    const { id } = useParams();

    const [error,setError] = useState(null);

    useEffect(()=>{
        setChannelDetails(null);
        setVideos(null);
        setError(null);
        fetchApi(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetails(data?.items[0])).catch((error)=>{
            setError(error);
        });

        fetchApi(`search?channelId=${id}&part=snippet%2Cid&order=date`).then((data)=>setVideos(data?.items)).catch((error)=>{
            setError(error);
        });

        console.log(channelDetails);
        console.log(videos);
    }, [id]);

    if(!videos || !channelDetails) return <Loader />;

    if(error) return <ErrorComponent />;

    return(
        <div className="bg-[#131415] min-h-[100vh] pt-[1rem] pb-[1rem]">
        <div className="w-full ">
            <div className=" mx-1 rounded-sm min-[350px]:h-[6rem] min-[350px]:mt-[4rem] min-[350px]:mx-4 sm:h-[10rem] sm:mx-[1rem] sm:mt-[5rem] md:mx-[2rem] md:mt-[5rem] lg:mx-[4rem] h-[4rem] sm:mx-[1rem] md:h-[10rem] rounded-lg lg:h-[12rem] lg:mt-[5.5rem] xl:h-[14rem] xl:mt-[5.5rem] xl:mx-[5rem]">
                <div className="w-full h-full object-cover object-center rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
            </div>
            
            <div className="mx- min-[350px]:mx-4 sm:mx-[1rem] md:mx-[2rem] lg:mx-[4rem] xl:mx-[5rem] mt-10 flex flex-col xl:flex-row xl:items-center justify-center gap-5">
                <div className="flex rounded-sm pb-4 max-xl:border-b-[1px] border-b-gray-500 xl:border-r-[1px] flex-1 items-center">
                    <div className="w-[4rem] sm:w-[5rem]">
                        <img src={channelDetails?.snippet?.thumbnails?.high?.url} alt="" className="rounded-full w-full"/>
                    </div>

                    <div className="ml-4">
                        <p className="font-bold text-white text-md sm:text-lg ">{channelDetails?.snippet?.title}</p>
                        <p className="text-gray-400 text-sm sm:text-[1rem]">{channelDetails?.snippet?.customUrl}</p>
                        <div className="text-[12px] text-gray-400 flex gap-2 sm:text-[1rem]">   
                            <p>{channelDetails?.statistics?.subscriberCount} Subscribers | {channelDetails?.statistics?.videoCount} Videos</p>              
                        </div>
                    </div>

                    <div>
                    </div>
                </div>

                <div className="flex-[2_2_0%]">
                    <p className="text-white font-bold">About</p>
                    <p className="line-clamp-3 text-sm text-gray-400">{channelDetails?.snippet?.description}</p>
                </div>
            </div>
        </div>

        <div className="mx-1 min-[350px]:mx-4 sm:mx-[1rem] md:mx-[2rem] lg:mx-[4rem] xl:mx-[5rem] pt-10 mt-10 border-t-[1px] border-t-gray-400 mb-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 min-[875px]:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center	">
                    {
                        videos.length>0 && videos.map((video)=> video?.id?.videoId ? (
                            <div key={video?.id?.videoId}>
                                <VideoCard video={video} styles="max-sm:w-[20rem]" />
                            </div>
                        ) : null)
                    }
            </div>
        </div>
       
        </div>
    )
}

export default ChannelDetail;