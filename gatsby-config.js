module.exports = {
  siteMetadata: {
    title: `Goran Milovanovic`,
    slogan: `Software developer`,
    description: `Software engineer with more than 15 years experience in development web, mobile and desktop applications.`,
    author: `Goran Milovanovic`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:400,600,800`,
          `Fira+Sans\:300,400,400i,500,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    'gatsby-plugin-sass',
  ],
};
