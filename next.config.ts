import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    'http://10.0.0.222:3000',
    // you can also add localhost if you ever hit it locally:
    'http://localhost:3000'
  ],
};

export default nextConfig;
