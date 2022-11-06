import { createRoute, createHistoryRouter } from 'atomic-router';
import { createBrowserHistory } from 'history';
import { paths } from '@pages/paths';

import { createRoutesView } from '@shared/routes';
import { MainPage } from '@pages/index';

const route = {
  main: createRoute(),
};

export const routes = [{ path: paths.main, route: route.main }];

export const router = createHistoryRouter({
  routes,
});

router.setHistory(createBrowserHistory());

export const Pages = createRoutesView({
  routes: [{ route: route.main, view: MainPage }],
});
