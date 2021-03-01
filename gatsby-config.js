require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Máquina dos Sonhos BeCapital`,
    author: `@BeCapitaltech`,
    description: `Máquina dos Sonhos BeCapital`,
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
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
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
        name: `Máquina dos Sonhos BeCapital`,
        short_name: `Máquina dos Sonhos BeCapital`,
        start_url: `/`,
        background_color: `#1A4A73`,
        theme_color: `#1A4A73`,
        lang: 'pt-br',
        display: `standalone`,
        icon: 'src/assets/logo/svg/bec_logo_rgb.svg',
      },
    },
    `gatsby-plugin-offline`,
  ],
};
