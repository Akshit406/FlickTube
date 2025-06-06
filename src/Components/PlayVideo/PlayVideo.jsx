import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import valueConverter, { API_KEY } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const PlayVideo = () => {

    const { videoId } = useParams();

    const [apiData, setApiData] = useState(null);

    const [channelData, setChannelData] = useState(null);

    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
        // fetching videos data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));
    }

    const fetchOtherData = async () => {
        //fethcing channel data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]))

        //fetching comment data
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
        await fetch(comment_url).then(res => res.json()).then(data => setCommentData(data.items))
    }

    useEffect(() => {
        fetchVideoData();
    }, [videoId])

    useEffect(() => {
        fetchOtherData();
    }, [apiData])

    return (
        <div className='play-video'>
            {/* <video src={video1} controls autoplay muted /> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <h3>{apiData ? apiData.snippet.title : "title here"}</h3>
            <div className="play-video-info">
                <p>{apiData ? valueConverter(apiData.statistics.viewCount) : "16K"} &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}</p>
                <div>
                    <span><img src={like} />{apiData ? valueConverter(apiData.statistics.likeCount) : 27}</span>
                    <span><img src={dislike} /></span>
                    <span><img src={share} />Share</span>
                    <span><img src={save} />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : "Insert channel name here"} </p>
                    <span>{channelData ? valueConverter(channelData.statistics.subscriberCount) : "1M"} subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : "Insert Description"}</p>
                <hr />
                <h4>{apiData ? valueConverter(apiData.statistics.commentCount) : 27} Comments</h4>

                {commentData.map((item, index) => {
                    return (
                        <div key={index} className="comment">
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} />
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                                <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                                <div className="comment-action">
                                    <img src={like} />
                                    <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                                    <img src={dislike} />

                                </div>
                            </div>

                        </div>)
                })}



            </div>

        </div>
    )
}

export default PlayVideo
