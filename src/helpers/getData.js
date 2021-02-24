import axios from "axios";

export const getMovieByName = async (movie) => {

  const options = {
    method: "GET",
    url:
    `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${ encodeURI( movie ) }`,
    // 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/Men%20in%20black',
    headers: {
      "x-rapidapi-key": "d7828ac82cmshd2ab49d2f63a351p1c649djsnca3b6f57efdf",
      "x-rapidapi-host":
        "imdb-internet-movie-database-unofficial.p.rapidapi.com",
    },
  };
  let movies = []
  await axios
    .request(options)
    .then(function async(response) {
        movies=response.data.titles;
    })
    .catch(function (error) {
      console.error(error);
    });

  return movies;
};

export const getMovieById = async (movieId) => {

  const options = {
    method: "GET",
    url:
    `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${ encodeURI( movieId ) }`,
    headers: {
      "x-rapidapi-key": "d7828ac82cmshd2ab49d2f63a351p1c649djsnca3b6f57efdf",
      "x-rapidapi-host":
        "imdb-internet-movie-database-unofficial.p.rapidapi.com",
    },
  };
  let movie = {}
  await axios
    .request(options)
    .then(function async(response) {
        movie=response.data;
        console.log(movie)
    })
    .catch(function (error) {
      console.error(error);
    });

  return movie;
};
