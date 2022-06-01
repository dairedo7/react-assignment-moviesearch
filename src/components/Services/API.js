import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '2a8ba5d6d1e87afb6f0a309b33e3467f';

export async function getTrendingFilms() {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
  console.log(results);
  return results;
}

export async function getFilmsBySearchQuery(query) {
  const {
    data: { results },
  } = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);

  return results;
}

export async function getFilmById(movieId) {
  const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  console.log(data);

  return data;
}
// let movieId = 14911;
export async function getCastData(movieId) {
  const {
    data: { cast },
  } = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);

  return cast;
}

export async function getReviewsData(movieId) {
  const {
    data: { results },
  } = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);

  return results;
}

export async function getTrailerData(movieId) {
  const {
    data: { results },
  } = await axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}`);
  // console.log(results);

  const trailer = results.filter(({ type }) => type === 'Trailer').pop();

  if (trailer) {
    return trailer;
  } else {
    Notify.warning('There is no trailer for current movie!');
    return 'No trailer was found!';
  }
}
