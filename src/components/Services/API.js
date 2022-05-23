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
  const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);

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

  console.log(results);

  const trailers = [];
  for (const item of results) {
    const { name, type } = item;
    if (name === 'Official Trailer') {
      trailers.push(item);
    } else {
      if (type === 'Trailer') {
        trailers.push(item);
      }
    }
  }
  console.log(trailers);
  return trailers;
}
