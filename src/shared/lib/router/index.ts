import { createEvent } from 'effector';

import type { RouteInstance, RouteParams } from 'atomic-router';

export const routeLoaded = createEvent<RouteInstance<RouteParams>>();
