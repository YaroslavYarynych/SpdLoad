import {
  Routes,
  Route,
  HashRouter as Router,
} from 'react-router-dom';
import { App } from './App.js';
import { Favourites } from './components/organisms/favourites/Favourites.js';
import { HomePage } from './components/organisms/home/HomePage.js';
import { NotFoundPage } from './components/organisms/notFoundPage/NotFound.js';

export const Root = () => (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="favourites" element={<Favourites />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
);