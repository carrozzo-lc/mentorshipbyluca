import { Suspense, lazy } from 'react';
// components
import LoadingScreen from '../components/common/loading-screen';

// ----------------------------------------------------------------------

const Loadable = <Props extends {}>(Component: React.ComponentType<Props>) => (props: Props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

// MAIN
export const GeneralPage = Loadable(lazy(() => import('../pages/mentorship/GeneralPage')));
export const CareerPage = Loadable(lazy(() => import('../pages/mentorship/CareerPage')));
export const EntrepeneurPage = Loadable(lazy(() => import('../pages/mentorship/EntrepeneurPage')));
export const Page404 = Loadable(lazy(() => import('../pages/Page404')));

