/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'uk'],
    defaultLocale: 'en',
  },
  env:{
    CAT_API : process.env.CAT_API,
    CAT_API_KEY: process.env.CAT_API_KEY,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
