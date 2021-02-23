module.exports = {
  siteMetadata: {
    title: `Dream Machine BeCapital`,
    author: `@BeCapitaltech`,
    description: `Uma nova maneira de pensar e agir no mercado de capitais. Acreditamos que investir é para todos.`,
    siteUrl: `https://maquinadossonhos.be.capital/`,
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
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Trasandina'],
          urls: [`${__dirname}/static/fonts/fonts.css`],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dream Machine BeCapital`,
        short_name: `Dream Machine BeCapital`,
        start_url: `/`,
        background_color: `#1A4A73`,
        theme_color: `#1A4A73`,
        lang: 'pt-br',
        display: `standalone`,
        icon: 'src/assets/logo/svg/bec_logo_rgb.svg',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
