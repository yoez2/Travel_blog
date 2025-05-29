import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Pages
import Home from '../pages/index';
import About from '../pages/about';
import Countries from '../pages/countries';
import CountryDetails from '../pages/countries/[id]';
import Login from '../pages/auth/Login';
import Profile from '../pages/profile';
import NotFound from '../pages/NotFound';

const PrivateRoute = ({ children }) => {
  const { loggedIn } = useAuth();
  return loggedIn ? children : <Navigate to="/auth/login" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/countries" element={<Countries />} />
      <Route path="/countries/:id" element={<CountryDetails />} />
      <Route path="/auth/login" element={<Login />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes; 