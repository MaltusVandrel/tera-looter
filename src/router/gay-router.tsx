import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home';

export const GayRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
    </Routes>
  );
};
