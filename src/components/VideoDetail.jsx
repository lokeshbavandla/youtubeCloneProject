import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams,Link} from "react-router-dom";
import { fetchApi } from "../utils/apiFetch";
import {VideoCard, ErrorComponent} from './'

function VideoDetail(){

    const { id } = useParams();

    const [videoDetails,setVideoDetails] = useState(null);

    const [videos,setVideos] = useState([]);

    const [videoComments,setVideoComments] = useState([]);

    const [error,setError] = useState(null);

    useEffect(()=>{

        setError(null);

        fetchApi(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`).then((data)=>setVideoDetails(data.items[0])).catch((error)=>{
            setError(error.message);
        });
        fetchApi(`search?relatedToVideoId=${id}&part=id%2Csnippet&type=video`).then((data)=>setVideos(data.items)).catch((error)=>{
            setError(error.message);
        });
        fetchApi(`commentThreads?part=snippet&videoId=${id}`).then((data)=>setVideoComments(data.items)).catch((error)=>{
            setError(error.message);
        });
        console.log(videoDetails);
        console.log(videos);
    }, [id]);

    if(error) return <ErrorComponent />;

    return(
        <div className="bg-[#131415] min-h-[100vh] pt-[6rem] flex p-[1rem] pt-[6rem] max-[957px]:flex-col max-[957px]:gap-[25rem] max-[500px]:gap-[30rem] sm:pl-[2rem] sm:px-[1rem] md:pl-[2rem] lg:pl-[3rem] lg:px-[1.5rem] xl:pl-[4rem] xl:pr-[2rem] gap-5">
            <div className="min-[957px]:flex-[3_3_0%] h-[32rem] max-[957px]:h-[25rem]">
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width='100%'height='100%' controls/>

                <div className="mt-4">
                    <h2 className="text-2xl font-bold text-white">{videoDetails?.snippet?.title}</h2>
                </div>

                

                <div className="flex justify-between items-center mb-5 py-5 max-[575px]:flex-col max-[575px]:items-start max-[575px]:justify-start max-[575px]:gap-2">
                    <div>
                        <Link to={ `/channel/${videoDetails?.snippet?.channelId}`}>
                        <p className="text-xl font-bold text-gray-400">{videoDetails?.snippet?.channelTitle}</p>
                        </Link>
                    </div>

                    <div className="flex gap-4 font-bold text-white">
                        <div className="py-2 px-6 bg-gray-600 cursor-pointer flex gap-2 rounded-full">
                            <span className="">{videoDetails?.statistics?.likeCount}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg>
                        </div>
                        <div className="py-2 px-6 bg-gray-600 cursor-pointer rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                            </svg>
                        </div>

                        <button className="py-2 bg-red-500 px-6 rounded-lg">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="bg-gray-600 px-[2rem] flex flex-col gap-5 text-gray-200 rounded-lg py-[1rem]">
                    <div className="flex gap-4 font-bold max-[575px]:flex-col max-[575px]:gap-2">
                        <p>{videoDetails?.statistics?.viewCount} views</p>
                        <p>Uploaded Date: {(videoDetails?.snippet?.publishedAt)?.split('T')[0]}</p>
                    </div>
                    
                    <div className="line-clamp-6 max-[580px]:line-clamp-4">
                        {(videoDetails?.snippet?.description)?.split('\n')?.map((text)=>(
                            <p>{text}</p>
                        ))}
                        <div className="mt-[2rem]">
                            <p>Tags:</p>
                            {(videoDetails?.snippet?.tags)?.map((tag)=>(
                                <p>#{tag}</p>
                            ))}
                    </div>
                    
                    </div>
                    
                </div>

                <div className="my-10 text-gray-400 max-[957px]:hidden">
                    <p className="text-xl my-[1.5rem] font-bold">{videoDetails?.statistics?.commentCount} Comments</p>

                   <div>
                    {
                        videoComments.length>0 && videoComments.map((comment)=>(
                            <div className="flex gap-2 mb-5">
                                <div className="w-[4rem]">
                                    <img src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="" className="w-[3rem] h-[3rem] object-cover rounded-full"/>
                                </div>

                                <div className="flex flex-col gap-1 flex-1">
                                    <p className="text-sm font-bold">{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
                                    <p className="text-sm">{comment?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
                                    <div className="text-sm text-gray-400 flex gap-5 items-center mt-1">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                            </svg>
                                            <span className="text-sm ml-1">{comment?.snippet?.topLevelComment?.snippet?.likeCount==0 ? '' : comment?.snippet?.topLevelComment?.snippet?.likeCount}</span>
                                        </div>

                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                                            </svg>
                                        </div>

                                        <p className="font-bold">Reply</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                   </div>

                    
                </div>
            </div>

            <div className="md:flex-1 grid grid-cols-1 min-[420px]:max-[957px]:grid-cols-2  gap-5">
                {
                    videos.length>0 && videos?.map((video)=>(
                        <div key={video?.id?.videoId}>
                                <VideoCard video={video} styles="max-lg:h-[17rem]" imgstyle="max-sm:h-[10rem] max-sm:w-full max-lg:w-[20rem] sm:max-[975px]:w-[30rem] sm:max-[975px]:h-[12rem] max-lg:h-[10rem] max-lg:object-cover" contentStyle="max-lg:text-sm "/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default VideoDetail;