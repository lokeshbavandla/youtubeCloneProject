import { useEffect } from "react";
import { Link } from "react-router-dom";

function ChannelCard({channelDetail}){

    useEffect(()=>{
        console.log(channelDetail);
    })
    return(
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <div className="flex flex-col items-center p-5 bg-gray-600 rounded-md gap-2 h-[21rem]">

                <div>
                    <img src={channelDetail?.snippet?.thumbnails?.high?.url || "https://yt3.ggpht.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s800-c-k-c0xffffffff-no-rj-mo"} alt="" className="h-[10rem] w-[10rem] object-cover rounded-full"/>
                </div>

                <p className="text-md text-center font-medium text-white">{channelDetail?.snippet?.channelTitle}</p>
                <p className="line-clamp-4 text-gray-200  text-sm text-center">{channelDetail?.snippet?.description}</p>
            </div>
        </Link>
    )
}

export default ChannelCard;