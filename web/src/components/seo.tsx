/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
// import { useStaticQuery, graphql } from 'gatsby'
import useSiteSettings from '../hooks/useSiteSettings'

interface MetaProperty {
  property: string
  content: string
}

interface MetaName {
  name: string
  content: string
}

type Meta = MetaName | MetaProperty

export interface SEOProps {
  title: string
  description?: string
  lang?: string
  meta?: Meta[]
  path?: string
}

const SEO: FC<SEOProps> = ({
  description = '',
  lang = 'en',
  meta = [],
  title,
  path = '/',
}) => {
  const siteSettings = useSiteSettings()

  const metaDescription = description /* || site.siteMetadata.description*/

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteSettings.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
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
          name: `twitter:card`,
          content: `summary`,
        },
        // {
        //   name: `twitter:creator`,
        //   content: site.siteMetadata.author.name,
        // },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
