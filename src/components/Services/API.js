import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '2a8ba5d6d1e87afb6f0a309b33e3467f';

export async function getTrendingFilms() {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);

  return results;
}

export async function getFilmsBySearchQuery(query) {
  const {
    data: { results },
  } = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);

  return results;
}

export async function getFilmById(movieId) {
  // movieId = 14911;
  // https://api.themoviedb.org/3/search/movie/14911?api_key=2a8ba5d6d1e87afb6f0a309b33e3467f
  const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  console.log(data);
  // console.log(data.results);

  return data;
}
// let movieId = 14911;
export async function getCastData(movieId) {
  const {
    data: { cast },
  } = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
  console.log(cast);
  return cast;
}

export async function getReviewsData(movieId) {
  // movieId = 203739;
  const {
    data: { results },
  } = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);

  return results;
}

export async function getTrailerData(movieId) {
  const {
    data: { results },
  } = await axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}`);
  console.log(results);
  return results;
}
