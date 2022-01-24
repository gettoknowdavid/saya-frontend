import { lightThemePrimitives, LightTheme, createLightTheme } from 'baseui';

const PRIMARY = '#FFFFFF';

const THEME = createLightTheme(
  {
    ...lightThemePrimitives,
    mono300: '#efefef',
    primaryFontFamily: 'Poppins',
  },
  {
    primaryFontFamily: 'Poppins',
    colors: {
      primary: PRIMARY,
      accent: '#FFA100',
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
        [LightTheme.mediaQuery.medium]: { fontSize: '26px', lineHeight: '29px' },
        [LightTheme.mediaQuery.large]: { fontSize: '28px', lineHeight: '30px' },
      },

      heroTextBold: {
        lineHeight: '26px',
        color: '#2E2E2E',
        maxWidth: '400px',
      },
      heroTagLine: {
        lineHeight: '26px',
        color: '#2E2E2E',
        maxWidth: '400px',
        marginBottom: '6px',
      },
    },
  },
);

export default THEME;
