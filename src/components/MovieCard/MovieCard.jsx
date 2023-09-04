import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';
import {
  Card,
  Img,
  ImgContainer,
  ImgLink,
  TitleLink,
} from './movieCard.styled';
import emptyIMG from 'assets/images/unknown-cover.jpg';

const MovieCard = ({ movie }) => {
  const location = useLocation();

  return (
    <Card key={movie.id}>
      <ImgLink to={`/movies/${movie.id}`} state={{ from: location }}>
        <ImgContainer>
          <Img
            src={
              movie.poster_path
                ? 'https://image.tmdb.org/t/p/original' + movie.poster_path
                : emptyIMG
            }
            width={192}
            height={282}
            alt={movie.original_title + ' Movie Poster'}
          />
        </ImgContainer>
      </ImgLink>
      <TitleLink to={`/movies/${movie.id}`} state={{ from: location }}>
        <p> {movie.original_title}</p>
      </TitleLink>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
