import { fork } from 'effector';
import { initI18n } from '@features/intl-i18n';

export const appStart = async () => {
  const scope = fork();

  await Promise.all([initI18n('ru')]);

  return scope;
};
