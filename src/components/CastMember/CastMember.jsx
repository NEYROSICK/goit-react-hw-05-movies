import PropTypes from 'prop-types';
import { Character, Heading, Img, Li } from './castMember.styled';
import Unknown from 'assets/images/unknown.png';

const CastMember = ({ img, name, character }) => {
  return (
    <Li>
      <Img
        width="190"
        src={img ? 'https://image.tmdb.org/t/p/original' + img : Unknown}
        alt={name + ' picture'}
      />
      <Heading>{name}</Heading>
      <Character>{character}</Character>
    </Li>
  );
};

CastMember.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default CastMember;
