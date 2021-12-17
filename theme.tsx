import { createLightTheme, LightTheme, lightThemePrimitives } from 'baseui';

const PRIMARY = '#FFFFFF';

const THEME = createLightTheme(
  { ...lightThemePrimitives },
  {
    primaryFontFamily: 'CMG Sans',
    colors: {
      primary: PRIMARY,
      accent100: '#8A8A8A',
      accent200: '#737373',
      accent300: '#5C5C5C',
      accent400: '#454545',
      accent500: '#2E2E2E',
      accent600: '#171717',
      accent700: '#000000',
    },
    sizing: {
      horizontal10: { paddingLeft: '10px', paddingRight: '10px' },
      horizontal16: { paddingLeft: '16px', paddingRight: '16px' },
      horizontal20: { paddingLeft: '20px', paddingRight: '20px' },
      horizontal40: { paddingLeft: '40px', paddingRight: '40px' },
    },
    typography: {
      logo: {
        margin: '0',
        padding: '0',
        fontFamily: 'Bodoni MT',
        fontWeight: '800',
        color: '#000000',
        [LightTheme.mediaQuery.small]: { fontSize: '24px', lineHeight: '28px' },
        [LightTheme.mediaQuery.medium]: { fontSize: '25px', lineHeight: '29px' },
        [LightTheme.mediaQuery.large]: { fontSize: '26px', lineHeight: '30px' },
      },
    },
  },
);

export default THEME;
