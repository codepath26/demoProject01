import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import FormateDate from "../DateFormater/FormateDate";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.post("https://hoblist.com/api/movieList", {
          category: "movies",
          language: "Kannada",
          genre: "all",
          sort: "voting",
        });
        console.log(response.data?.result);
        setMovies(response?.data?.result);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="flex flex-wrap">
      {movies.map((movie) => (
        <div key={movie._id} className="p-4  w-full  md:w-1/2 lg:w-1/3 flex ">
          <div className="flex flex-col shadow-lg md:p-2 w-full ">
            <div className="flex h-full  justify-between">
              <div className="flex flex-col  h-full w-[12%] ">
                <i className="fa-solid fa-caret-up text-2xl h-1/3  flex justify-center items-center   w-full"></i>
                <span className="h-1/3  flex justify-center items-center">
                  1
                </span>
                <i className="fa-solid fa-caret-down flex justify-center items-center  text-2xl h-1/3  w-full"></i>
                <span className="w-full border flex justify-center items-center">
                  Votes
                </span>
              </div>
              <div className="p-2 min-w-[100px] max-w-[200px]">
                <img
                  src={movie.poster}
                  alt="poseter"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" flex flex-col justify-start px-2">
                <h1 className="font-bold text-xl  mb-2">{movie.title}</h1>
                <div>
                  <h3 className="text-md">Genre: {movie.genre}</h3>
                  <h3 className="text-md">
                    Director: {movie.director.map((name) => name)}
                  </h3>
                  <h3 className="text-md">
                    Starring: {movie.stars.join(", ")}
                  </h3>
                  <h3 className="text-md">
                    Mins | {movie.language} | {FormateDate(movie.releasedDate)}
                  </h3>
                  <h3 className="text-sm text-blue-600">
                    {movie.pageViews} Views | Voted by {movie.totalVoted} People
                  </h3>
                </div>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 font-bold text-white px-3 py-2 mt-1 rounded-md w-full transition duration-150 ease-in-out">
              Watch Trailer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;

// description
// :
// ""
// director
// :
// ['Santhosh Ananddram']
// downVoted
// :
// ['6071243a315bc40c7d4459c7']
// genre
// :
// "action,drama"
// language
// :
// "Kannada"
// pageViews
// :
// 335
// poster
// :
// "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1558340965271_Yuvarathnaa.jpg"
// productionCompany
// :
// ['']
// releasedDate
// :
// 1617218999
// runTime
// :
// null
// stars
// :
// ['puneeth rajkumar']
// title
// :
// "Yuvarathnaa"
// totalVoted
// :
// 3
// upVoted
// :
// (2) ['6066b32b9de1c7591dac55dd', '6070a229315bc40c7d445944']
// voted
// :
// (2) [{…}, {…}]
// voting
// :
// 1
// writers
// :
// ['']
// _id
// :
// "5ce26565842db9428619496d"
