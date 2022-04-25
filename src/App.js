import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewPageLayout from './layouts/ViewPageLayout';
import { Arria, Caesar, Death, Hercule, Home, Louis, Neptune, Sculptures, ThreeGraces } from './pages';
import './style.css';

function App() {
  const pages = [
    {
      path: '/',
      component: <Home />,
    },
    {
      path: '/sculptures',
      component: <Sculptures />
    },
    {
      path: '/sculpture/arria',
      component: <Arria />,
    },
    {
      path: '/sculpture/caesar',
      component: <Caesar />,
    },
    {
      path: '/sculpture/death',
      component: <Death />,
    },
    {
      path: '/sculpture/hercule',
      component: <Hercule />,
    },
    {
      path: '/sculpture/louis-xiv',
      component: <Louis />,
    },
    {
      path: '/sculpture/neptune',
      component: <Neptune />,
    },
    {
      path: '/sculpture/three-graces',
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
