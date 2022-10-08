import effector from 'effector';

const domain = effector.createDomain('entities/home');

type Maybe<T> = T | null;

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

const slice = effector.createStore(state, { name: domain.shortName });

export type Slice = typeof slice;
