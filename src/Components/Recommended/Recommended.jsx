import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { API_KEY } from '../../data';
import valueConverter from '../../data';
import thumbnial1 from '../../assets/thumbnail1.png';
import thumbnial2 from '../../assets/thumbnail2.png';
import thumbnial3 from '../../assets/thumbnail3.png';
import thumbnial4 from '../../assets/thumbnail4.png';
import thumbnial5 from '../../assets/thumbnail5.png';
import thumbnial6 from '../../assets/thumbnail6.png';
import thumbnial7 from '../../assets/thumbnail7.png';
import thumbnial8 from '../../assets/thumbnail8.png';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {

    const [recommended, setRecommended] = useState([]);

    const fetchRecommended = async () => {
        const sidelist_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        // fetching feed data 
        await fetch(sidelist_url).then(res => res.json()).then(data => setRecommended(data.items))

    }

    useEffect(() => { fetchRecommended(); }, [])
    return (
        <div className='recommended'>
            {recommended.map((item, index) => {
                return (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list" Key={index}>
                        <img src={item.snippet.thumbnails.medium.url} />
                        <div className='vid-info'>
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{valueConverter(item.statistics.viewCount)}</p>
                        </div>
                    </Link>
                )

            })}
        </div>
    )
}

export default Recommended