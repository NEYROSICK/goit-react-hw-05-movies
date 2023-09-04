import React, { useEffect, useState } from 'react';
import { getTrending } from 'api/movies';
import MovieCard from 'components/MovieCard/MovieCard';
import { Container } from 'components/Layout/layout.style';
import { MoviesList } from 'pages/Movies/movies.styled';
import { H1, Main } from './home.styled';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [status, setStatus] = useState('resolved');
  const [errorMsg, setErrorMsg] = useState('');

  const [loaderVisibiliy, setLoaderVisibility] = useState(true);

  const fetchMovies = async () => {
    try {
      const trending = await getTrending();
      setTrendingMovies(trending);
      setStatus('resolved');
      setLoaderVisibility(false);
    } catch (error) {
      setErrorMsg(error.message);
      setStatus('rejected');
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // if (status === 'resolved') {
  return (
    <>
      <Loader visible={loaderVisibiliy} />

      {status === 'resolved' ? (
        <Main>
          <Container>
            <H1>Trending today</H1>
            <MoviesList>
              {trendingMovies.map(movie => {
                return <MovieCard key={movie.id} movie={movie} />;
              })}
            </MoviesList>
          </Container>
        </Main>
      ) : (
        console.warn(errorMsg)
      )}
    </>
  );
  // }

  // if (status === 'rejected') {

  // }
};

export default Home;
