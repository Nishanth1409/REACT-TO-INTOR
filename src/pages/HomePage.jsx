import React, { useEffect, useState } from 'react'

// Layout / HOC (high order component) 
import DefaultLayout from '../layout/DefaultLayout'


// Components
import EntertainmentCard from '../components/Entertainment/EntertainmentCard.component'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component'

// api's
import axios from 'axios'
import { TMDB_API_KEY, TMDB_BASE } from '../config/tmdb'


const HomePage = () => {

    const [recommendedMovies, setRecommendedMovies ] = useState([]);
    const [premierMovies, setPremierMovies ] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents ] = useState([]);


    useEffect(()=>{
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get(`${TMDB_BASE}/movie/top_rated?api_key=${TMDB_API_KEY}`)
            setRecommendedMovies(getTopRatedMovies.data.results)
        }
        requestTopRatedMovies()
    }, []);

        useEffect(()=>{
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get(`${TMDB_BASE}/movie/popular?api_key=${TMDB_API_KEY}`)
            setPremierMovies(getPopularMovies.data.results)
        }
        requestPopularMovies()
    }, [])


    useEffect(()=>{
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get(`${TMDB_BASE}/movie/upcoming?api_key=${TMDB_API_KEY}`)
            setOnlineStreamEvents(getUpcomingMovies.data.results)
        }
        requestUpcomingMovies()
    }, [])
       


  return (
    <>
        <HeroCarousel />

        <div className='container px-4 mx-auto my-8 md:px-12'>
            <h1 className='text-2xl text-bold text-gray-800 sm:,l-3 my-3'>The Best of Entertainment</h1>
            <EntertainmentCard />
        </div>

        <div className='container px-4 mx-auto my-8 md:px-12'>
            <PosterSlider 
            title= "Recommended Movies"
            subtitle="List of Recommended Movies"
            posters= {recommendedMovies}
            isDark={false}
            />
        </div>

        <div className='py-12 bg-premier-800'>
            <div className='container flex flex-col gap-3 px-4 mx-auto my-8 md:px-12'>
                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="RuPay" className='w-full h-full'/>
             <PosterSlider 
            title= "Premiers"
            subtitle="Brand new release every Friday"
            posters= {premierMovies}
            isDark={false}
            />
            </div>          
        </div>

        <div className='container px-4 mx-auto my-8 md:px-12'>
             <PosterSlider 
            title= "Online Streaming Events"
            subtitle="Online Streaming Events"
            posters= {onlineStreamEvents}
            isDark={false}
            />
        </div>
    </>
  )
}

export default DefaultLayout(HomePage) 