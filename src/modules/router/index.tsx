import { createRoutesFromElements, Outlet, Route } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import ComponentPage from '../../pages/components/index';
import HomePage from '../../pages/home/index';

const AppLayout = () => (
  <>
    <Outlet />
  </>
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="" element={<HomePage />} />,
      <Route path="components" element={<ComponentPage />} />,
    </Route>
  )
);
