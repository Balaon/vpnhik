import { IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styled from '@emotion/styled';

import { useColorModeToogle } from '../../shared/theme';

export const ThemeColorSwitcher = () => {
  const [themeLiteral, toggleTheme] = useColorModeToogle('light', 'dark');

  const ThemeSwitchIcon = useColorModeValue(FaSun, FaMoon);

  return (
    <IconButtonStyled
      size="md"
      aria-label={`Switch to ${themeLiteral} theme`}
      icon={<ThemeSwitchIcon />}
      onClick={toggleTheme}
    />
  );
};

const IconButtonStyled = styled(IconButton)`
  position: fixed;
  right: 0;
`;
