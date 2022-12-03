import { changeLocale, getIntl } from '@shared/i18n';

export const initI18n = async (activeLocale: string) => {
  const instance = getIntl();

  if (instance.locale !== activeLocale) changeLocale(activeLocale);
};
