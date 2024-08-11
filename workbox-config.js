module.exports = {
  globDirectory: "public/", // Ensure this matches your public directory
  globPatterns: [
    "**/*.{html,js,css,glb}", // Adjust to match your file types
  ],
  swDest: "public/sw.js", // Output service worker file
  runtimeCaching: [
    {
      urlPattern: /\.(?:glb)$/, // Match .glb files
      handler: "CacheFirst",
      options: {
        cacheName: "glb-cache",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      },
    },
  ],
};
