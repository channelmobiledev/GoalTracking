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

/**
 * Goal Category Data
 */
export const GoalCategoryData = [
  {
    id: 0,
    title: 'Financial',
    icon: 'currency-usd',
  },
  {
    id: 1,
    title: 'Heath',
    icon: 'dumbbell',
  },
  {
    id: 2,
    title: 'Career',
    icon: 'briefcase-outline',
  },
  {
    id: 3,
    title: 'Relationship',
    icon: 'heart-pulse',
  },
  {
    id: 4,
    title: 'Education',
    icon: 'book-open-page-variant',
  },
];
