import { createI18nInstance } from '@shared/lib/i18n';

import ru from './translations/ru.json';

export const { onIntlUpdate, changeLocale, getIntl } = createI18nInstance({
  dafaultLocale: 'ru',
  dafaultLocaleMessages: ru,
  importLocale: (locale) => import(`./translations/${locale}.json`).then((mod) => mod.default),
});

export * from './messages';
export * from './lib';
