/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    NEXT_PUBLIC_APP_URL:
      `https://${process.env.VERCEL_URL}` || "http://localhost:3000",
  },
};

export default nextConfig;
