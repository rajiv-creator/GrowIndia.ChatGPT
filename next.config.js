// next.config.js
const path = require("path");
const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { instrumentationHook: true }, // needed so Sentry auto-loads
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  webpack: (config) => {
    // Keep your alias: allows imports like "@/lib/supabaseClient"
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};

module.exports = withSentryConfig(
  nextConfig,
  {
    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,
    authToken: process.env.SENTRY_AUTH_TOKEN,
    release: process.env.VERCEL_GIT_COMMIT_SHA, // tie errors to Vercel commit
  },
  {
    disableServerWebpackPlugin: false,
    disableClientWebpackPlugin: false,
  }
);

