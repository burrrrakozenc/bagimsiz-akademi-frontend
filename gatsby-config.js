module.exports = {
  siteMetadata: {
    title: `BAGIMSIZ AKADEMI`,
    description: `Bagimsiz akademi`,
    author: `@burrakozenc`,
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
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL 
        ? "https://bagimsiz-akademi.herokuapp.com" 
        : "http://localhost:1337",
        contentTypes: ["article", "category", "writer"],
        singleTypes: [`homepage`, `global`],
        queryLimit: 1000,
        // loginData: {
        //   identifier: "",
        //   password: "",
        // },
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-styled-components',
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // Directory with the strings JSON
        path: `${__dirname}/src/intl`,
        // Supported languages
        languages: [`tr`, `en`, `ku`,],
        // Default site language
        defaultLanguage: `tr`,
        // Redirects to `/pt` in the route `/`
        redirect: true,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-lunr',
    //   options: {
    //     languages: [{ name: 'en' }],
    //     fields: [
    //       { name: 'title', store: true },
    //       { name: 'description', store: true },
    //     ],
    //   }
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
