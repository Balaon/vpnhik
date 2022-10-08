import { IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

import { useColorModeToogle } from '../../shared/theme';

export const ThemeColorSwitcher = () => {
  const [themeLiteral, toggleTheme] = useColorModeToogle('light', 'dark');

  const ThemeSwitchIcon = useColorModeValue(FaSun, FaMoon);

  return (
    <IconButton
      size="md"
      aria-label={`Switch to ${themeLiteral} theme`}
      icon={<ThemeSwitchIcon />}
      onClick={toggleTheme}
    />
  );
};
