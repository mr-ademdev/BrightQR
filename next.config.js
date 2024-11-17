const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})
   
  module.exports = withNextra({
    images: {
      domains: ['lh5.googleusercontent.com','lh3.googleusercontent.com','utfs.io','avatars.githubusercontent.com','raw.githubusercontent.com'],
    },
  })
   
  // If you have other Next.js configurations, you can pass them as the parameter:
  // module.exports = withNextra({ /* other next.js config */ })