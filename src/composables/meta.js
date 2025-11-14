import ogBannerImage from '../assets/images/og-banner.png'

const TITLE_DEFAULT = 'Open Source Software PH'
const DESCRIPTION_DEFAULT =
  'Open Source Software PH (OSSPH) is a developer-led initiative to grow the community of developers building open source software across the Philippines.'

export const useBuildMeta = ({
  title = `${TITLE_DEFAULT} (OSSPH)`,
  page,
  description = DESCRIPTION_DEFAULT,
}) => {
  return {
    // sets document title
    title,
    // optional; sets final title as "Index Page - My Website", useful for multiple level meta
    titleTemplate: title => `${page} - ${title}`,

    // meta tags
    meta: {
      description: { name: 'description', content: description },
      keywords: { name: 'keywords', content: `${page} - ${title}` },
      equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
      // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
      ogTitle: {
        property: 'og:title',
        template() {
          return `${page} - ${title}`
        },
      },
      ogDescription: {
        property: 'og:description',
        template() {
          return `${description}`
        },
      },
      ogType: {
        property: 'og:type',
        template() {
          return 'website'
        },
      },
      ogUrl: {
        property: 'og:url',
        template() {
          return 'https://ossph.org'
        },
      },
      ogImage: {
        property: 'og:image',
        template() {
          return ogBannerImage
        },
      },
    },

    // CSS tags
    link: {
      material: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    },

    // JS tags
    script: {
      ldJson: {
        type: 'application/ld+json',
        innerHTML: '{ "@context": "http://schema.org" }',
      },
    },

    // <html> attributes
    htmlAttr: {
      'xmlns:cc': 'http://creativecommons.org/ns#', // generates <html xmlns:cc="http://creativecommons.org/ns#">,
      empty: undefined, // generates <html empty>
    },

    // <body> attributes
    bodyAttr: {
      'action-scope': 'xyz', // generates <body action-scope="xyz">
      empty: undefined, // generates <body empty>
    },

    // <noscript> tags
    noscript: {
      default: 'This is content for browsers with no JS (or disabled JS)',
    },
  }
}
