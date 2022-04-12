import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Death from './pages/Death';
import Home from './pages/Home';
import Neptune from './pages/Neptune';
import Diane from './pages/Diane';
import Augustus from './pages/Augustus';
import ThreeGraces from './pages/ThreeGraces';
import './style.css';

function App() {

  const pages = [
    {
      path: '/',
      component: <Home />
    },
    {
      path: '/death',
      component: <Death />
    },
    {
      path: '/neptune',
      component: <Neptune />
    },
    {
      path: '/diane',
      component: <Diane />
    },
    {
      path: '/augustus',
      component: <Augustus />
    },
    {
      path: '/three-graces',
      component: <ThreeGraces />
    }
  ]

  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            pages.map(page => (
              <Route key={page.path} path={page.path} element={page.component} />
            ))
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;