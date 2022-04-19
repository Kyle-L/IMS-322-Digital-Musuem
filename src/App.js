import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import {
  Augustus, Diane, Death, Neptune, ThreeGraces,
} from './pages';
import './style.css';
import Navbar from './components/Navbar';

function App() {
  const pages = [
    {
      path: '/',
      component: <Home />,
    },
    {
      path: '/death',
      component: <Death />,
    },
    {
      path: '/neptune',
      component: <Neptune />,
    },
    {
      path: '/diane',
      component: <Diane />,
    },
    {
      path: '/augustus',
      component: <Augustus />,
    },
    {
      path: '/three-graces',
      component: <ThreeGraces />,
    },
  ];

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {pages.map((page) => (<Route key={page.path} path={page.path} element={page.component} />))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
