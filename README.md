[![Netlify Status](https://api.netlify.com/api/v1/badges/ad7e589d-7716-4190-981f-3258aaa42d8c/deploy-status)](https://app.netlify.com/sites/gatsby-starter-anoun-1-markdown/deploys)

<p align="center">
  <a href="https://gatsby-starter-anoun-1-markdown.netlify.com/" target="_blank">
    <img alt="ANOUN" src="./content/assets/gatsby-starter-anoun-1-markdown.netlify.com_.png" />
  </a>
</p>

# Gatsby Starter by ANOUN #1 - Markdown

## Features

* [MDC React Components](https://github.com/material-components/material-components-web-react)
* [MDC Theming](https://material.io/develop/web/docs/theming/)
* Modern Design
* Home Page
* About Page
* Contact Page
  * [Formspark](https://formspark.io/) contact form
* Blog
  * Featured images for blog posts
  * Markdown post format
* SEO
  * Open Graph Tags
  * Dynamic Titles and Descriptions
  * Sitemap.xml
* Prettier code formatting
* CSS Fluid Typography
* PWA Support
* Google Analytics Support

## Coming Soon

* JSON LD Content
* Even easier customization (Typography.js, custom logo support, email, phone, social links across the site, etc.)
* Instructions for Setup (Blog post and a YouTube Tutorial)
* Pagination

## Performance Test

[View Lighthouse Test Results](https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=https://gatsby-starter-anoun-1-markdown.netlify.com/)

## Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ANOUN/gatsby-starter-anoun-1-forestry/)

## Customization

### Website Data

Edit `content/website.js`

```
module.exports = {
  // SEO
  title: "Gatsby Starter #1 | ANOUN | Markdown", // Navigation and Site Title
  titleTemplate: "%s · Gatsby Starter #1",
  description: "This is Gatsby Starter #1 by ANOUN with content sourcing from Markdown files. Don't be shy, clone it on Github if you'd like!",
  siteUrl: "https://gatsby-starter-anoun-1-markdown.netlify.com/", // Domain of your site. No trailing slash!
  image: "/images/anoun-share-image.png", // Used for SEO

  // Manifest
  icon: "src/favicon.png", // Used for manifest favicon generation
  short_name: "ANOUN", // shortname for manifest. MUST be shorter than 12 characters
  owner: "ANOUN", // Author for schemaORGJSONLD
  theme_color: "#663399",
  background_color: "#ffffff",

  // Social and Analytics
  twitterUsername: "@anouncompany", // Twitter Username
  googleAnalyticsID: "",
}
```

### Theme

Edit `src/styles/theme.scss`

```
:root {
    --mdc-theme-primary: #663399;
    --mdc-theme-on-primary: #ffffff;
    --mdc-theme-secondary: #000000;
    --mdc-theme-on-secondary: #ffffff;
    --mdc-theme-surface: #fefefe;
    --mdc-theme-background: #ffffff;
    --mdc-theme-on-background: #000000;
}
```

## Credits

Designed by [ANOUN](https://anoun.company)

Made in Idaho

