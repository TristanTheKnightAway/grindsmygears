module.exports = {
  siteMetadata: {
    title: 'Know What Grinds My Gears?',
    description: 'Angry Unicorns',
    author: 'A Team of Angry Unicorns',
  },
  plugins: [
    {
      resolve: 'gatsby-source-drupal',
      options: {
        // baseUrl: 'http://grindsmygears',
        baseUrl: 'http://live-gmg-backend.pantheonsite.io',
        apiBase: 'jsonapi',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-image',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
