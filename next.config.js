const path= require('path')

module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
      return config;
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    images:{
      domains:['cdn.myanimelist.net'],
      formats: ['image/avif', 'image/webp'],
    },
  };