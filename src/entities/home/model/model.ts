import { createDomain, createStore } from 'effector';

const domain = createDomain('entities/home');
interface State {
  statistics: {
    memberCount: Maybe<number>;
  };
}

const state: State = {
  statistics: {
    memberCount: null,
  },
};

const slice = createStore(state, { name: domain.shortName });

export type Slice = typeof slice;
