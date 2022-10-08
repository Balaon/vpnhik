import { Scope } from 'effector';

//TODO: убрфть appStore, добавить инициализацию страницб в которую будет пробразываться актуальный скоп приложения
export const appScope = (() => ({
  scope: null as Maybe<Scope>,
  update(scope: Scope) {
    this.scope = scope;
  },
}))();
