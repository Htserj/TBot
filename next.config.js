/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    // domains: ["images.unsplash.com", "core.telegram.org"],
    remotePatterns: [
      {
        hostname: "core.telegram.org",
      },
    ],
  },
};

export default config;
