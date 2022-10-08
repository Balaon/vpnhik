import { useColorMode, useColorModeValue } from '@chakra-ui/react';

/**
 * Change value based on color mode.
 *
 * @param light the light mode value
 * @param dark the dark mode value
 *
 * @example
 *
 * ```js
 * const Icon = useColorModeValue(MoonIcon, SunIcon)
 * ```
 */
export const useColorModeToogle = (light: string, dark: string): [string, () => void] => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue(light, dark);
  return [text, toggleColorMode];
};
