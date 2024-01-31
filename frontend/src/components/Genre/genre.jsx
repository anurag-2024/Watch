import React from 'react'
import './index.scss';
const genres = ({data}) => {
  return (
    <div className='genres'>
      {data?.map((item,index)=>{
          return (
            <span key={index} className='genre'>
                {item}
            </span>
          ) 
      })}
    </div>
  )
}

export default genres
