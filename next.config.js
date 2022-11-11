/** @type {import('next').NextConfig} */
//const withPWA = require("next-pwa");
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
// });

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // next.js config
})