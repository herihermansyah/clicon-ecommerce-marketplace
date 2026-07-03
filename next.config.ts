import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {hostname: "images.unsplash.com"},
      {hostname: "cdn.dummyjson.com"},
      {hostname: "dummyjson.com"},
    ],
  },
};

export default nextConfig;
