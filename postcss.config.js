const config = {
  plugins: [
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production'
      ? [
          require('@fullhuman/postcss-purgecss')({
            content: ['./src/**/*.html', './src/**/*.js'],
            safelist: [
              'fa-search',
              'fa-bolt',
              'fa-snowflake',
              'fa-photo-video',
              'fa-handshake',
              'fa-ruble-sign',
              'alert-success',
              'alert-danger',
            ],
          }),
          require('cssnano')({
            preset: 'default',
          }),
        ]
      : []),
  ],
}

module.exports = config
