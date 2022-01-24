export const ShopContentsStatefulTabOverrides = {
  TabList: {
    style: ({ $theme }) => ({
      display: 'flex',
      justifyContent: 'center',
      background: $theme.colors.mono300,
      marginBottom: '20px',
    }),
  },
  TabBorder: { style: () => ({ background: 'transparent' }) },
  TabHighlight: { style: () => ({ height: '1.4px' }) },
};

export const ShopContentTabOverrides = {
  Tab: {
    style: ({ $theme }) => ({
      background: '#EFEFEF',
      transitionProperty: 'all',
      transitionDuration: $theme.animation.timing900,
      ':hover': { backgroundColor: 'transparent' },
      [$theme.mediaQuery.small]: {
        paddingRight: '10px',
        paddingBottom: '6px',
        paddingLeft: '10px',
        marginRight: '6px',
        marginLeft: '6px',
      },
      [$theme.mediaQuery.medium]: {
        paddingRight: '10px',
        paddingBottom: '6px',
        paddingLeft: '10px',
        marginRight: '10px',
        marginLeft: '10px',
      },
      [$theme.mediaQuery.large]: {
        paddingRight: '40px',
        paddingBottom: '6px',
        paddingLeft: '40px',
        marginRight: '40px',
        marginLeft: '40px',
      },
    }),
  },
  TabPanel: {
    style: () => ({
      paddingRight: '0',
      paddingLeft: '0',
    }),
  },
};
