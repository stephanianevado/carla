/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['cdn2.thecatapi.com'],
  },
}
