import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Home, Augustus, Diane, Death, Neptune, ThreeGraces,
} from './pages';
import './style.css';
import ViewPageLayout from './layouts/ViewPageLayout';

function App() {
  const pages = [
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
      <Routes>
        <Route path="/" element={<Home />} />
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
