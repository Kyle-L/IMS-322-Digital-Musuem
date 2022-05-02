import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ViewPageLayout from './layouts/ViewPageLayout';
import { About, Arria, Caesar, Death, Hercule, Louis, Neptune, Philopoemen, Sculptures, ThreeGraces } from './pages';
import './style.css';

function App() {
  const pages = [
    {
      path: '/',
      component: <Sculptures />
    },
    {
      path: '/about',
      component: <About />
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
    {
      path: '/sculpture/philopoemen',
      component: <Philopoemen />,
    }
  ];

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          {pages.map((page) => (
            <Route key={page.path} element={<ViewPageLayout />}>
              <Route path={page.path} element={page.component} />
            </Route>
          ))}
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
