// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  webpack(config) {
    // eslint-disable-next-line no-param-reassign
    config.externals = config.externals || {};
    // eslint-disable-next-line no-param-reassign
    config.externals['styletron-server'] = 'styletron-server';
    // eslint-disable-next-line no-param-reassign
    // config.resolve.alias = {
    //   ...config.resolve.alias,
    // your aliases
    // Atoms: path.resolve(__dirname, 'components/atoms/'),
    // Molecules: path.resolve(__dirname, 'components/molecules/'),
    // Organisms: path.resolve(__dirname, 'components/organisms/'),
    // Enums: path.resolve(__dirname, 'enums/'),
    // Graphql: path.resolve(__dirname, 'graphql/'),
    // Hooks: path.resolve(__dirname, 'hooks/'),
    // Lib: path.resolve(__dirname, 'lib/'),
    // Redux: path.resolve(__dirname, 'redux/'),
    // Types: path.resolve(__dirname, 'types/'),
    // Utils: path.resolve(__dirname, 'utils/'),
    // };
    return config;
  },
  env: {
    NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
  },
};
