import React, { useContext } from 'react'
import { MovieContext } from '../../context/Movie.Context'
import MovieInfo from './MovieInfo.Component'


const MovieHero = () => {
    const {movie} = useContext(MovieContext)
    const genres = movie.genres?.map(({name})=> name).join(", ")
    // console.log(genres)

  return <>
    <div>
        {/* mobile n tab screen size */}
        <div className='w-full lg:hidden'>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
            alt="cover photo" className='m-4 rounded'  />
        </div>
        <div className='flex flex-col gap-3 lg:hidden'>
            <div className='flex flex-col-reverse gap-3 px-4 my-3'>
                <div className='flex flex-col gap-2 text-black md:px-4'>
                    <h4>4.4k rating</h4>
                    <h4>Kannada, English, Hindi, Telgu, Tamil</h4>
                    <h4>{movie.runtime} min | {genres}</h4>
                </div>
            </div>
            <div className='flex items-center gap-3 md:px-4 '>
                <button className='w-full py-3 font-semibold text-white bg-red-500 rounded-md'>
                    Rent $149
                </button>
                <button className='w-full py-3 font-semibold text-white bg-red-600 rounded-md'>
                    Rent $599
                </button>
            </div>
        </div>

        {/* Large Screen Size */}
        <div className='relative hidden w-full lg:block ' style={{height: "30rem"}}>
            <div className='absolute z-10 w-full h-full' style={{background: "linear-gradient(90deg, rgba(1,0,1,0.6) 0%, rgba(1,1,1,0.6) 25%, rgba(1,1,1,0.7) 50%, rgba(1,1,1,0) 100%)"}} />

            <div className='absolute z-30 flex items-center gap-10 left-24 top-10' >
                <div className='w-64 h-96'>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie poster"
                    className='w-full h-full rounded-lg'
                    />
                </div>
                <div>
                    <MovieInfo movie={movie} />
                    
                </div>
            </div>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="backdrop" 
            className='object-cover object-center w-full h-full' />
        </div>
    </div>
  </>
}

export default MovieHero