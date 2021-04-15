import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title }) {

  useEffect(() => {
    setTimeout(function () {
      let viewheight = window.innerHeight
      let viewwidth = window.innerWidth
      let viewport = document.querySelector("meta[name=viewport]");
      viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
    }, 300);

  },[])

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'pt-BR',
      }}
      title={title || defaultTitle}
      meta={[
        // {
        //   name: `viewport`,
        //   content: `width=device-width, height=device-height, initial-scale=1`
        // },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title || defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata?.siteUrl,
        },
        {
          property: 'og:image',
          content: '../assets/icons/bec_logo_rgb.svg',
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title || defaultTitle,
        },
        {
          name: 'keywords',
          content:
            'BeCapital, be capital, becapital, Becapital, investimentos, máquina dos sonhos, maquina dos sonhos, dinheiro, independência financeira',
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'canonical',
          href: `${site.siteMetadata.siteUrl}`,
        },
      ].concat(meta)}
    >
      <title>{defaultTitle}</title>
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `pt-BR`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
