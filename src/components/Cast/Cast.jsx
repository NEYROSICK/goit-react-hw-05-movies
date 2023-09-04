import { getMovieCast } from 'api/movies';
import CastMember from 'components/CastMember/CastMember';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Ul } from './cast.styled';
import { Container } from 'components/Layout/layout.style';
import { NotFound } from 'components/Reviews/reviews.styled';
import { Hourglass } from 'react-loader-spinner';

const Cast = () => {
  const [movieCast, setMovieCast] = useState();
  const [status, setStatus] = useState('pending');
  const [errorMsg, setErrorMsg] = useState('');

  const { movieId } = useParams();

  const fetchMovieCast = async () => {
    try {
      const castInfo = await getMovieCast(movieId);
      setMovieCast(castInfo);
      setStatus('resolved');
    } catch (error) {
      setErrorMsg(error.message);
      setStatus('rejected');
    }
  };

  useEffect(() => {
    fetchMovieCast(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === 'pending') {
    return (
      <Container>
        <div
          style={{
            marginTop: '-60px',
            marginBottom: '20px',
          }}
        >
          <Hourglass
            visible={true}
            height="36"
            width="36"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#ff8600', '#fba647']}
          />
        </div>
      </Container>
    );
  }

  if (status === 'resolved') {
    return movieCast.length ? (
      <section>
        <Container>
          <Ul>
            {movieCast.map(member => {
              return (
                <CastMember
                  key={member.id}
                  img={member.profile_path}
                  name={member.name}
                  character={member.character}
                />
              );
            })}
          </Ul>
        </Container>
      </section>
    ) : (
      <Container>
        <NotFound>
          Sorry, we don't find any of cast members for this movie😢
        </NotFound>
      </Container>
    );
  }

  if (status === 'rejected') {
    console.warn(errorMsg);
  }
};

export default Cast;
