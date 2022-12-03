import { isObject } from '@shared/lib/fp';

import type { MessageDescriptor } from 'react-intl';

export const isMessage = (message: unknown): message is MessageDescriptor =>
  isObject(message) && 'id' in message && 'defaulteMessage' in message;
