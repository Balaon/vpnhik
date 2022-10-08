import { createStore, createEffect, scopeBind, sample } from 'effector';
import { createHistoryRouter, RouteInstance, RouteParams } from 'atomic-router';
import { filterMap } from '@shared/lib/fp';

import { routeLoaded } from '@shared/lib/router';
import { appScope } from '@shared/lib/view-importer/create-importer';

import { pagesRoutes } from '@pages/index';

import { createBrowserHistory } from 'history';

export const router = createHistoryRouter({ routes: pagesRoutes });

const catalogRoutes = filterMap(
  pagesRoutes,
  ({ path }) => path.includes('*'),
  ({ route }) => route,
);

//TODO: error page
// redirect(
//     {
//         clock: routes.notFound.open,
//         route: routes.someErrorPage
//     }
// )

router.setHistory(createBrowserHistory());

const $dummy = createStore({});
const $params = router.$activeRoutes.map(
  (routes) => routes.find((route) => !catalogRoutes.includes(route))?.$params ?? $dummy,
);

interface Payload {
  params: RouteParams;
  route: RouteInstance<RouteParams>;
}

const openRouteFx = createEffect((payload: Payload) => {
  const { params, route } = payload;

  if (appScope.scope) scopeBind(route.open, { scope: appScope.scope })(params);
});

sample({
  clock: routeLoaded,
  source: $params,
  fn: ($param, route) => ({ route, params: $params.getState() as RouteParams }),
  target: openRouteFx,
});
