import React, { useContext, useEffect, useState } from 'react';
import MovieLayout from '../layout/MovieLayout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MovieContext } from '../context/Movie.Context';
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';
import MovieHero from '../components/MovieHero/MovieHero.Component';

const MoviePage = () => {
    const { id } = useParams();
    const { movie, setMovie } = useContext(MovieContext);

    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    const API_KEY = process.env.REACT_APP_TMDB_API_KEY || "1f89b59aebcb2b9372294bd142f836e9";

    // Fetch Cast & Crew
    useEffect(() => {
        const requestCast = async () => {
            try {
                const getCast = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
                );
                setCast(getCast.data.cast);
            } catch (error) {
                console.error("Error fetching cast:", error);
            }
        };
        requestCast();
    }, [id, API_KEY]);

    // Fetch Similar Movies
    useEffect(() => {
        const requestSimilarMovies = async () => {
            try {
                const getSimilarMovies = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`
                );
                setSimilarMovies(getSimilarMovies.data.results); // Fixed "results"
            } catch (error) {
                console.error("Error fetching similar movies:", error);
            }
        };
        requestSimilarMovies();
    }, [id, API_KEY]);

    // Fetch Top Rated Movies
    useEffect(() => {
        const requestTopRatedMovies = async () => {
            try {
                const getTopRatedMovies = await axios.get(
                    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
                );
                setRecommendedMovies(getTopRatedMovies.data.results);
            } catch (error) {
                console.error("Error fetching top-rated movies:", error);
            }
        };
        requestTopRatedMovies();
    }, [API_KEY]);

    // Fetch Movie Details
    useEffect(() => {
        const requestMovie = async () => {
            try {
                const getMovieData = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
                );
                setMovie(getMovieData.data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };
        requestMovie();
    }, [id, API_KEY]);

    return (
        <>
            <MovieHero />
            <div className="container px-4 my-12 lg:ml-20">
                <div className="flex flex-col items-start gap-3">
                    <h1 className="gap-3 text-2xl font-bold text-gray-800">About the Movie</h1>
                    <p>{movie.overview}</p>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <h2 className="mb-3 text-2xl font-bold text-gray-800">Applicable Offers</h2>
                    <div className="flex flex-col gap-3 lg:flex-row">
                        <div className="flex items-start gap-2 p-3 bg-yellow-100 border-2 border-yellow-400 border-dashed rounded-md">
                            <div className="w-8 h-8">
                                <FaCcVisa className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-xl font-bold text-gray-700">Visa Stream Offer</h3>
                                <p className="text-gray-600">
                                    Get 75% off up to INR 200 on all RuPay Card* on BookMyShow Stream
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-2 p-3 bg-yellow-100 border-2 border-yellow-400 border-dashed rounded-md">
                            <div className="w-8 h-8">
                                <FaCcApplePay className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-xl font-bold text-gray-700">Film Pass</h3>
                                <p className="text-gray-600">
                                    Get 75% off up to INR 200 on all RuPay Card* on BookMyShow Stream
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                

                <div className="my-8">
                    <PosterSlider
                        title="Recommended Movies"
                        subtitle="Movies you may like"
                        posters={recommendedMovies}
                        isDark={false}
                    />
                </div>
                
                {/* <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <PosterSlider
                        title="Cast & Crew"
                        subtitle="Full cast & crew"
                        posters={cast}
                        isDark={false}
                    />
                </div> */}

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <PosterSlider
                        title="Similar Movies"
                        subtitle="Movies similar to this one"
                        posters={similarMovies}
                        isDark={false}
                    />
                </div>
            </div>
        </>
    );
};

export default MovieLayout(MoviePage);
