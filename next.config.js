/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // Old URLs, kept alive so existing links and indexed pages don't 404.
      { source: "/work-with-me", destination: "/freelance", permanent: true },
      { source: "/work/:slug", destination: "/case-studies/:slug", permanent: true },
    ];
  },
};

module.exports = nextConfig;
