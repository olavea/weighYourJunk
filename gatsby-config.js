module.exports = {
  plugins: [
    "gatsby-theme-docz",
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ForutSigg!`,
        short_name: `ForutSigg!`,
        start_url: `/`,

        icon: `src/images/forutSiggIcon2.png`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
