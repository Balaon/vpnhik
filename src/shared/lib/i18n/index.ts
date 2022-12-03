import { createIntl, createIntlCache } from 'react-intl';

import { createSubscribption } from '../create-subscription';

import type { IntlShape } from 'react-intl';

interface CreateI18InstancePayload {
  dafaultLocale: string;
  dafaultLocaleMessages: Record<string, string>;
  importLocale: (locale: string) => Promise<Record<string, string>>;
}

type Subscriber = (intl: IntlShape) => void;

interface CreateI18nInstanceResult {
  getIntl: () => IntlShape;
  changeLocale: (locale: string) => void;
  onIntlUpdate: (arg: Subscriber) => () => void;
}

export const createI18nInstance = (payload: CreateI18InstancePayload): CreateI18nInstanceResult => {
  const { dafaultLocale, dafaultLocaleMessages, importLocale } = payload;
  const downloadedLocalenMap = new Map([[dafaultLocale, dafaultLocaleMessages]]);
  const cache = createIntlCache();

  const subscription = createSubscribption<Subscriber>();
  let intl = createIntl({ locale: dafaultLocale, messages: dafaultLocaleMessages });

  const changeLocale = async (locale: string) => {
    const localeExist = downloadedLocalenMap.has(locale);

    if (intl.locale === locale && localeExist) return;

    const messages = localeExist
      ? (downloadedLocalenMap.get(locale) as Record<string, string>)
      : await importLocale(locale);

    if (!localeExist) downloadedLocalenMap.set(locale, messages);

    intl = createIntl(
      {
        locale,
        messages,
      },
      cache,
    );

    subscription.notify(intl);
  };

  return {
    onIntlUpdate: subscription.subscribe,
    changeLocale,
    getIntl: () => intl,
  };
};
