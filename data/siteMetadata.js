const siteMetadata = {
  title: 'Blog | Sidharth Singh',
  author: 'Sidharth Singh',
  headerTitle: 'Inner Monologue No Jutsu! 🌀',
  description: 'my personal blog where I share my idle thoughts',
  snippets: 'Reuseable code snippets collected by Sid',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://example.vercel.app',
  siteRepo: 'https://github.com/Sidharth-Singh10/blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'sidharthsingh714@gmail.com',
  github: 'https://github.com/Sidharth-Singh10',
  twitter: 'https://x.com/sid10singh',
  linkedin: 'https://www.linkedin.com/in/sidharth-singh-a14414285/',
  // change
  website: '',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-F6V2QTJ628', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'sid10singh',
  },
}

module.exports = siteMetadata
