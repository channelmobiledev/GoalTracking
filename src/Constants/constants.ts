import {DefaultTheme} from 'react-native-paper';

/**
 * Theme settings
 */
export const theme = {
  ...DefaultTheme,
  roundness: 2,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#009688',
    accent: '#00BCD4',
    LightPrimary: '#B2DFDB',
    DarkPrimary: '#00796B',
    text: '#212121',
    textPrimary: '#FFFFFF',
    secondaryText: '#757575',
    divider: '#BDBDBD',
  },
};
