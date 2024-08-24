import { createRoutesFromElements, Outlet, Route } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import ComponentPage from '../../pages/components/index';
import HomePage from '../../pages/home/index';
import SetTitlePage from '../../pages/setTitle/index';
import { routePath } from './routePath';
import ResultPage from '../../pages/result';

const AppLayout = () => (
  <>
    <Outlet />
  </>
);

const BackgroundLayout = () => (
  <div className="bg-[#EDEDED]">
    <Outlet />
  </div>
);
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routePath.home} element={<AppLayout />}>
      <Route index element={<HomePage />} />,
      <Route element={<BackgroundLayout />}>
        <Route path={routePath.setTitle} element={<SetTitlePage />} />,
        <Route path={routePath.result} element={<ResultPage />} />,
        <Route path={routePath.components} element={<ComponentPage />} />,
      </Route>
    </Route>
  )
);
