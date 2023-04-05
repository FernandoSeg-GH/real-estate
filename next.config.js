/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig, {
  webpack: (config, { isServer }) => {
    // Add your fonts to the Next.js build process
    config.module.rules.push({
      test: /\.(woff(2)?|eot|ttf|otf|)$/,
      type: 'asset/inline',
    });

    if (!isServer) {
      // Load your fonts using CSS
      config.module.rules.push({
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      });
    }

    return config;
  },
};
