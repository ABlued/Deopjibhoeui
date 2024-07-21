import { createRoutesFromElements, Outlet, Route } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import ComponentPage from '../../pages/components/index';

const AppLayout = () => (
  <>
    <Outlet />
  </>
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="components" element={<ComponentPage />} />,
    </Route>
  )
);
