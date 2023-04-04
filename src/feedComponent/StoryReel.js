import { Avatar } from '@mui/material'
import React from 'react'
import './storyReel.css'
const StoryReel = () => {
    return (
        <div className='storyReels'>
            <div className='Story' style={{ backgroundImage: `url('https://burst.shopifycdn.com/photos/woman-dressed-in-white-leans-against-a-wall.jpg?width=1200&format=pjpg&exif=0&iptc=0')` }}>
                <Avatar />
                <p>Shivani maul </p>
            </div>
            <div className='Story' style={{ backgroundImage: `url('https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=')` }}>
                <Avatar />
                <p>Mahesh bhaskar </p>
            </div> <div className='Story' style={{ backgroundImage: `url('https://media.vogue.co.uk/photos/62fbbf88d749165282fb92e6/2:3/w_2560%2Cc_limit/GettyImages-1371416748.jpg')` }}>
                <Avatar />
                <p>suchita kriplani </p>
            </div> <div className='Story' style={{ backgroundImage: `url('https://www.rd.com/wp-content/uploads/2019/09/GettyImages-1126205831-scaled.jpg?fit=700,453')` }}>
                <Avatar />
                <p>Hakku namatata  </p>
            </div> <div className='Story' style={{ backgroundImage: `url('https://media.istockphoto.com/id/1435661969/photo/close-up-of-children-holding-a-planet-at-the-beach.jpg?b=1&s=170667a&w=0&k=20&c=Sxw1A1n3Y9ZZiR-hQBtKSqBkjYN8J1Wgs4HLbp2yh2c=')` }}>
                <Avatar />
                <p>The Earth</p>
            </div>
        </div>
    )
}

export default StoryReel