const withTM = require('next-transpile-modules')(["@soulswapfinance/cross-chain-widget"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}


// Please declare withTM as your last plugin (the outermost one)
module.exports = withTM(nextConfig)

