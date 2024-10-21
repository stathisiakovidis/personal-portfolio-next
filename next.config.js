/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProduction ? "/personal-portfolio-next" : "",
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
