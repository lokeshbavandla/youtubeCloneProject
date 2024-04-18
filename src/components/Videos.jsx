import {ChannelCard, Loader, VideoCard} from "./";

function Videos({videos=[]}){

    // if(!videos.length) return <Loader />;

    return(
        <div className="grid grid-rows min-[550px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-[350px]:flex-col">
            {
                videos.map((video)=>(
                    (video?.id?.kind=="youtube#channel" || video?.id?.kind =="youtube#video" ) &&<div key={video?.id?.videoId || video?.id?.channelId}>
                        {video.id.videoId && <VideoCard video={video}/>}
                        {video.id.channelId && <ChannelCard channelDetail={video}/>}
                    </div>
                ))
            }
        </div>
    )
}

export default Videos;