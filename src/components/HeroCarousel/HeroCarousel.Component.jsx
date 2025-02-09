import React, { useState } from 'react'
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from './Arrow.Component';

const HeroCarousel = () => {
    const [images, setImages] = useState([ {
  "adult": false,
  "backdrop_path": "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
  "genre_ids": [
    16,
    35,
    10751,
    14,
    10749
  ],
  "id": 976573,
  "original_language": "en",
  "original_title": "Elemental",
  "overview": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
  "popularity": 2723.167,
  "poster_path": "/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
  "release_date": "2023-06-14",
  "title": "Elemental",
  "video": false,
  "vote_average": 7.8,
  "vote_count": 1526

  },
  {
  "adult": false,
  "backdrop_path": "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
  "genre_ids": [
    18,
    36
  ],
  "id": 872585,
  "original_language": "en",
  "original_title": "Oppenheimer",
  "overview": "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
  "popularity": 631.846,
  "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  "release_date": "2023-07-19",
  "title": "Oppenheimer",
  "video": false,
  "vote_average": 8.3,
  "vote_count": 2745
},
{
  "adult": false,
  "backdrop_path": "/waBWlJlMpyFb7STkFHfFvJKgwww.jpg",
  "genre_ids": [
    28,
    18
  ],
  "id": 678512,
  "original_language": "en",
  "original_title": "Sound of Freedom",
  "overview": "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
  "popularity": 438.828,
  "poster_path": "/kSf9svfL2WrKeuK8W08xeR5lTn8.jpg",
  "release_date": "2023-07-03",
  "title": "Sound of Freedom",
  "video": false,
  "vote_average": 8.1,
  "vote_count": 381
},
{
  "adult": false,
  "backdrop_path": "/fIQfdZ6fqf9mIbqBaexbgIEIk5K.jpg",
  "genre_ids": [
    35
  ],
  "id": 864168,
  "original_language": "en",
  "original_title": "Joy Ride",
  "overview": "When Audrey's business trip to Asia goes sideways, she enlists the aid of Lolo, her irreverent, childhood best friend who also happens to be a hot mess; Kat, her college friend turned Chinese soap star; and Deadeye, Lolo's eccentric cousin. Their no-holds-barred, epic experience becomes a journey of bonding, friendship, belonging, and wild debauchery that reveals the universal truth of what it means to know and love who you are.",
  "popularity": 237.469,
  "poster_path": "/lTZ3r9NBdbrR6NA90v3hFYqd6TC.jpg",
  "release_date": "2023-06-22",
  "title": "Joy Ride",
  "video": false,
  "vote_average": 6.6,
  "vote_count": 131
}])

const settingsLG= { dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow /> ,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
}

const settings = { dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
nextArrow: <NextArrow /> ,
    prevArrow: <PrevArrow />,
}
  return (
    <>
        <div className='lg:hidden'>
            <HeroSlider {...settings}>
                    {
                        images.map((images)=>(
                            <div className='w-full h-56 py-3 md:h-80'>
                                <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="hero banner" className='object-cover w-full h-full rounded-md' />
                            </div>
                        ))
                    }
            </HeroSlider>
        </div>
        <div className='hidden lg:block'>
            <HeroSlider {...settingsLG}>
                    {
                        images.map((images)=>(
                            <div className='w-full px-2 py-3 h-96'>
                                <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="hero banner" className='object-cover w-full h-full rounded-md' />
                            </div>
                        ))
                    }
            </HeroSlider>
        </div>
    </>
  )
}

export default HeroCarousel