import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '86a1cc89777a565dcdd4691f802dc14c';

export const getTrending = async () => {
  const response = await axios.get(BASE_URL + '/trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });

  if (response.status !== 200) {
    throw new Error('smth went wrong');
  }

  return response.data.results;
};

export const getMovieById = async movieId => {
  const response = await axios.get(BASE_URL + `/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });

  if (response.status !== 200) {
    throw new Error('smth went wrong');
  }

  return response.data;
};

export const getMovieCast = async movieId => {
  const response = await axios.get(BASE_URL + `/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });

  if (response.status !== 200) {
    throw new Error('smth went wrong');
  }

  return response.data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(BASE_URL + `/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });

  if (response.status !== 200) {
    throw new Error('smth went wrong');
  }

  return response.data.results;
};

export const findMovie = async query => {
  const response = await axios.get(BASE_URL + `/search/movie`, {
    params: {
      api_key: API_KEY,
      query: query,
    },
  });

  if (response.status !== 200) {
    throw new Error('smth went wrong');
  }

  return response.data.results;
};
