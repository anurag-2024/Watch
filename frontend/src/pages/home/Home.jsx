import React from 'react'
import Herobanner from './herobanner/herobanner'
import Movies from './section/Movies'
const Home = () => {
  return (
    <>
        <div className='homepage'>
            <Herobanner />
            <Movies />
        </div>
    </>
  )
}

export default Home
