import { getMovieReviews } from 'api/movies';
import { Container } from 'components/Layout/layout.style';
import ReviewCard from 'components/ReviewCard/ReviewCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NotFound, Ul } from './reviews.styled';
import { Hourglass } from 'react-loader-spinner';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState();
  const [status, setStatus] = useState('pending');
  const [errorMsg, setErrorMsg] = useState('');

  const { movieId } = useParams();

  const fetchMovieReviews = async () => {
    try {
      const reviewsInfo = await getMovieReviews(movieId);
      setMovieReviews(reviewsInfo);
      setStatus('resolved');
    } catch (error) {
      setErrorMsg(error.message);
      setStatus('rejected');
    }
  };

  useEffect(() => {
    fetchMovieReviews(movieId);
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
    return movieReviews.length ? (
      <section>
        <Container>
          <Ul>
            {movieReviews.map(review => {
              return (
                <ReviewCard
                  key={review.id}
                  author={review.author}
                  content={review.content}
                />
              );
            })}
          </Ul>
        </Container>
      </section>
    ) : (
      <Container>
        <NotFound>Sorry, we don't find any reviews for this movie😢</NotFound>
      </Container>
    );
  }

  if (status === 'rejected') {
    console.warn(errorMsg);
  }
};

export default Reviews;
