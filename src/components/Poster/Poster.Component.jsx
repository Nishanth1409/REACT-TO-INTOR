import React from 'react'
import { Link } from 'react-router-dom'

const Poster = (props) => {
  return (
  
        <Link to={`movie/${props.id}`}>
            <div className='flex flex-col items-start gap-2 px-1 md:px-3 w-full max-w-[9.5rem] md:max-w-[12.5rem]'>
                <div className='w-full h-40 md:h-80'>
                    <img src={`https://image.tmdb.org/t/p/original${props.poster_path}` } alt="Movie poster" 
                    className='w-full h-full object-cover rounded-md'
                    />
                </div>
                <h3 className={`text-sm md:text-lg font-bold leading-snug line-clamp-2 ${props.isDark ? 'text-white': 'text-black'}`}>{props.title}</h3>
            </div>
        </Link>
  )
}

export default Poster