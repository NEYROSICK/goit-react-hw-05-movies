import { getMovieById } from 'api/movies';
import { Container } from 'components/Layout/layout.style';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  Img,
  MovieContainer,
  MovieInfo,
  Main,
  GoBackBtn,
  Table,
  Tr,
  Td,
  Hr,
  ExtrasList,
  ExtraBtn,
} from './movieDetails.styled';
import styles from './movieDetails.module.css';
import { HiArrowCircleLeft } from 'react-icons/hi';
import emptyIMG from 'assets/images/unknown-cover.jpg';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('pending');
  const [errorMsg, setErrorMsg] = useState('');
  const { movieId } = useParams();

  const fetchMovieById = async () => {
    try {
      const movieInfo = await getMovieById(movieId);
      setMovie(movieInfo);
      setStatus('resolved');
    } catch (error) {
      setErrorMsg(error.message);
      setStatus('rejected');
    }
  };

  useEffect(() => {
    fetchMovieById(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const location = useLocation();

  if (status === 'pending') {
    return <></>;
  }

  if (status === 'resolved') {
    return (
      <Main>
        <section>
          <Container>
            <GoBackBtn to={location.state?.from ?? '/'}>
              <HiArrowCircleLeft /> Go Back
            </GoBackBtn>
            <MovieContainer>
              <Img
                width={400}
                height={600}
                src={
                  movie.poster_path
                    ? 'https://image.tmdb.org/t/p/original' + movie.poster_path
                    : emptyIMG
                }
                alt={movie.original_title}
              />
              <MovieInfo>
                <h1 className={`${styles.heading} ${styles.h1}`}>
                  {movie.original_title}
                </h1>
                <Table>
                  <tbody>
                    <Tr>
                      <Td>Year:</Td>
                      <Td>{Number.parseInt(movie.release_date)}</Td>
                    </Tr>
                    <Tr>
                      <Td>Country:</Td>
                      <Td>
                        {movie.production_countries
                          .map(({ name }) => name)
                          .join(', ')}
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Genre:</Td>
                      <Td>
                        {movie.genres.map(genre => genre.name).join(', ')}
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Age Rating:</Td>
                      <Td>{movie.adult ? 'TV-MA' : 'TV-PG'}</Td>
                    </Tr>
                    <Tr>
                      <Td>User Score:</Td>
                      <Td>{(movie.vote_average * 10).toFixed()}%</Td>
                    </Tr>
                  </tbody>
                </Table>
                <h2 className={styles.heading}>Overview</h2>
                <p>{movie.overview}</p>
              </MovieInfo>
            </MovieContainer>
            <Hr />
          </Container>
        </section>
        <div className="AdditionalInfo">
          <ExtrasList>
            <li>
              <ExtraBtn to="cast" state={location.state}>
                Cast
              </ExtraBtn>
            </li>
            <li>
              <ExtraBtn to="reviews" state={location.state}>
                Reviews
              </ExtraBtn>
            </li>
          </ExtrasList>
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </div>
      </Main>
    );
  }

  if (status === 'rejected') {
    console.warn(errorMsg);
  }
};

export default MovieDetails;
