module.exports = {
  siteMetadata: {
    title: `Frontend Mentor | Fylo landing page with two column layout`,
    description: `Fylo stores your most important files in one secure location. 
  Access them wherever you need, share and collaborate with friends, 
  family, and co-workers.`,
    author: `Kuba Chrapek @kuba.chrapek`,
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
        icon: `src/images/favicon-32x32.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
