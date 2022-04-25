import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewPageLayout from './layouts/ViewPageLayout';
import { Arria, Caesar, Death, Hercule, Home, Louis, Neptune, ThreeGraces } from './pages';
import './style.css';

function App() {
  const pages = [
    {
      path: '/',
      component: <Home />,
    },
    {
      path: '/arria',
      component: <Arria />,
    },
    {
      path: '/caesar',
      component: <Caesar />,
    },
    {
      path: '/death',
      component: <Death />,
    },
    {
      path: '/hercule',
      component: <Hercule />,
    },
    {
      path: '/louis-xiv',
      component: <Louis />,
    },
    {
      path: '/neptune',
      component: <Neptune />,
    },
    {
      path: '/three-graces',
      component: <ThreeGraces />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {pages.map((page) => (
          <Route key={page.path} element={<ViewPageLayout />}>
            <Route path={page.path} element={page.component} />
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
