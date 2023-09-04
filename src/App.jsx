import Layout from 'components/Layout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const Home = lazy(() => import('pages/Home'));
  const Movies = lazy(() => import('pages/Movies'));
  const MovieDetails = lazy(() => import('pages/MovieDetails'));
  const Cast = lazy(() => import('components/Cast'));
  const Reviews = lazy(() => import('components/Reviews'));

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
