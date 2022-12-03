import { useStore } from 'effector-react/scope';
import type { RouteInstance } from 'atomic-router';

export function useIsOpened(route: RouteInstance<any> | RouteInstance<any>[]) {
  return Array.isArray(route)
    ? route.map((route) => useStore(route.$isOpened)).some(Boolean)
    : useStore(route.$isOpened);
}
