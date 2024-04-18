import { Link } from "react-router-dom";

function VideoCard({video, styles = '', imgstyle='', contentStyle = ''}){

    return(
        <div className={`bg-gray-600 rounded-md mb-4 h-[21rem] ${styles!='' ? styles : ''}`} >
            <Link to={`/video/${video?.id?.videoId || 'OgS1ZWZItno'}`}>
                <div>
                    <img src={video?.snippet?.thumbnails?.high?.url || 'https://i.ytimg.com/vi/OgS1ZWZItno/hqdefault.jpg'} alt="" className={`rounded-t-md w-[25rem] h-[14rem] object-cover ${imgstyle!='' ? imgstyle : ''}`}/>
                </div>
            </Link>

            <div className={`py-2 px-4 mt-1 text-[1rem] ${contentStyle!='' ? contentStyle : ''}`}>
            <Link to={`/video/${video?.id?.videoId || 'OgS1ZWZItno'}`}>
                <p className="font-bold text-white line-clamp-2">{video?.snippet?.title || 'Complete full stack freelance ready course'}</p>
            </Link>

                <div>
                    <Link to={`/channel/${video?.snippet?.channelId || 'UCNQ6FEtztATuaVhZKCY28Yw'}`}>
                    <p className="font-medium text-gray-200 mt-1">{video?.snippet?.channelTitle || 'Chai aur Code'}</p>
                    </Link>
                </div>
            </div>
           
        </div>
        
    )
}

export default VideoCard;