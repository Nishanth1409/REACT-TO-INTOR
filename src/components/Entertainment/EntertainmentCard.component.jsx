import React from 'react'
import Slider from 'react-slick'

const EntertainmentCard = (props) => {
  return (
    <>
        <div className='w-full px-2 h-30'>
            <img src={props.src} className='w-full h-full rounded-lg' alt="entertainment" />
        </div>
    </>
  )
}

const EntertainmentCardSlider = () =>{
    const EntertainmentImage = [
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/workshops-collection-202007231330.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/fitness-collection-2020081150.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/kids-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/comedy-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/music-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/esports-collection-202011150107.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/self-improvement-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/interactive-games-collection-202012041129.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/art-and-crafts-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/theatre-shows-collection-202012041128.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/adventure-collection-202010140844.png",
    ];

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 4,
    }

    return(
        <>
            <Slider {...settings}>
                {EntertainmentImage.map((image)=> (
                    <EntertainmentCard src={image} />
                ))}
            </Slider>
        </>
    )
} 

export default  EntertainmentCardSlider
