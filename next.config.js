const withTM = require('next-transpile-modules')(["@soulswapfinance/cross-chain-widget"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['exchange.soulswap.finance', 'raw.githubusercontent.com', 'avatars.githubusercontent.com'],
  },

}


// Please declare withTM as your last plugin (the outermost one)
module.exports = withTM(nextConfig)

