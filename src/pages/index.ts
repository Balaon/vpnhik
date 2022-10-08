import { routes } from '@shared/routes';
import { createHistoryRouter } from 'atomic-router';
import { lazy } from 'react';
import { createRoutesView } from 'atomic-router-react';

const MainPage = lazy(() => import('./main').then((mod) => ({ default: mod.MainPage })));

const routesView = [{ route: routes.main, view: MainPage }];

type Routes = Parameters<typeof createHistoryRouter>[0]['routes'];

export const pagesRoutes: Routes = [{ path: '/main', route: routes.main }];

export const Pages = createRoutesView({ routes: routesView });
