import React from 'react'
import "./index.scss" 
import img1 from '../../../assets/image0.jpg'
import img2 from '../../../assets/image1.jpg'
import img3 from '../../../assets/image2.jpg'
import img4 from '../../../assets/image3.jpg'
import img5 from '../../../assets/image4.jpg'
import ContentWrapper from '../../../components/ContentWrapper/ContentWrappper'
import Img from '../../../components/Img/Img'
const herobanner = () => {
    const images = [img1,img2,img3,img4,img5]
    const background = images[Math.floor(Math.random() * images.length)];
  return (
    <div className='heroBanner'>
    <div className='backdrop-Img'> <Img src={background} /></div>
    <div className='opacity-layer'></div>
    <ContentWrapper>
        <div className='heroBannerContent'>
            <span className='title'>Welcome</span>
            <span className='subTitle'>Millions of movies,TV shows and people to discover. Explore now.</span>
            <div className='searchInput'>
                <input type='text' placeholder='Search for a movie or tv show.....' />
                <button>Search</button>
            </div>
        </div>
    </ContentWrapper>
    </div>
  )
}
export default herobanner
