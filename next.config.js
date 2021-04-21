/** @type import('next/dist/next-server/server/config-shared').NextConfig */
module.exports = {
  env: {
    GTM_ID: process.env.GTM_ID,
  },
  i18n: {
    defaultLocale: process.env.NEXT_DEFAULT_LOCALE || 'ja',
    locales: (process.env.NEXT_LOCALES || 'ja').split(','),
  },
};
