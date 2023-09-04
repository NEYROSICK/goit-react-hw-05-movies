import { findMovie } from 'api/movies';
import { Container } from 'components/Layout/layout.style';
import MovieCard from 'components/MovieCard/MovieCard';
import Searchbar from 'components/Searchbar/Searchbar';
import { Context } from 'context/GlobalContext';
import React, { useContext, useEffect, useState } from 'react';
import { BrandColor, H1, Main, MoviesList } from './movies.styled';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { searchParams } = useContext(Context);

  const [loaderVisibiliy, setLoaderVisibility] = useState(false);

  const fetchMovies = async () => {
    setLoaderVisibility(true);
    const result = await findMovie(searchParams.get('query'));
    setMovies(result);
    setLoaderVisibility(false);
  };

  useEffect(() => {
    if (searchParams.get('query')) {
      fetchMovies();
    }

    return () => {
      setMovies([]);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <Main>
      <Container>
        <Loader visible={loaderVisibiliy} />

        <Searchbar movies={movies} />
        {movies.length ? (
          <>
            <H1>
              <BrandColor>Results for: </BrandColor>
              {searchParams.get('query')}
            </H1>
            <MoviesList>
              {movies.map(movie => {
                return <MovieCard key={movie.id} movie={movie} />;
              })}
            </MoviesList>
          </>
        ) : null}
      </Container>
    </Main>
  );
};

export default Movies;
