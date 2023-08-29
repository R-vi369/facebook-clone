import { Avatar } from '@mui/material'
import React from 'react'
import './storyReel.scss'
const StoryReel = () => {
    return (
        <div className='storyReels'>
            <div className='Story' style={{ backgroundImage: `url('https://burst.shopifycdn.com/photos/woman-dressed-in-white-leans-against-a-wall.jpg?width=1200&format=pjpg&exif=0&iptc=0')` }}>
                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREgRYMy7odP4A3oYLU7EKfDcttOtgvd7mpBA&usqp=CAU' />
                <p>Shivani maul </p>
            </div>
            <div className='Story' style={{ backgroundImage: `url('https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=')` }}>
                <Avatar src='https://nikfashions.in/wp-content/uploads/2017/06/Bas-Kay-Bhava-Womens-T-shirt-1.jpg' />
                <p>Mahesh bhaskar </p>
            </div> <div className='Story' style={{ backgroundImage: `url('https://media.vogue.co.uk/photos/62fbbf88d749165282fb92e6/2:3/w_2560%2Cc_limit/GettyImages-1371416748.jpg')` }}>
                <Avatar src='https://image.spreadshirtmedia.net/image-server/v1/mp/products/T631A2PA4699PT17X49Y10D154960696W19164H22997/views/1,width=800,height=800,appearanceId=2,backgroundColor=F2F2F2,modelId=2552,crop=detail/football-maman-drole-dire-cool-t-shirt-femme.jpg' />
                <p>suchita kriplani </p>
            </div> <div className='Story' style={{ backgroundImage: `url('https://www.rd.com/wp-content/uploads/2019/09/GettyImages-1126205831-scaled.jpg?fit=700,453')` }}>
                <Avatar src='https://image.spreadshirtmedia.net/image-server/v1/mp/products/T6A1PA5835PT17X26Y77D188633941W25917H31101/views/1,width=800,height=800,appearanceId=1,backgroundColor=F2F2F2,modelId=1405,crop=detail/funny-sayings-my-mind-is-like-internet-browser-mens-t-shirt.jpg' />
                <p>Hakku namatata  </p>
            </div> <div className='Story' style={{ backgroundImage: `url('https://media.istockphoto.com/id/1435661969/photo/close-up-of-children-holding-a-planet-at-the-beach.jpg?b=1&s=170667a&w=0&k=20&c=Sxw1A1n3Y9ZZiR-hQBtKSqBkjYN8J1Wgs4HLbp2yh2c=')` }}>
                <Avatar  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9VAhCYY3xqvjBo1Y3_YUsdlpwVoYCrc7xw&usqp=CAU'/>
                <p>The Earth</p>
            </div>
        </div>
    )
}

export default StoryReel