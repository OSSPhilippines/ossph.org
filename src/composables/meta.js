import { useRoute } from 'vue-router';
import ogBannerImage from '../assets/images/og-banner.png';

const TITLE_DEFAULT = 'Open Source Software PH';
const DESCRIPTION_DEFAULT = 'Open Source Software PH (OSSPH) is a developer-led initiative to grow the community of developers building open source software across the Philippines.';
const BASE_URL = 'https://ossph.org';
const TWITTER_SITE = '@OSSPhilippines'; // Twitter handle for the site

/**
 * Builds the full URL for the current page
 * @param {string} path - The route path (e.g., '/team', '/projects')
 * @returns {string} Full URL (e.g., 'https://ossph.org/team')
 */
function buildFullUrl (path) {
  // Remove trailing slash and ensure path starts with /
  const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
  return `${BASE_URL}${cleanPath}`;
}

export const useBuildMeta = ({ 
  title = `${TITLE_DEFAULT} (OSSPH)`, 
  page, 
  description = DESCRIPTION_DEFAULT,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage
} = {}) => {
  // Get current route to build dynamic URLs
  const route = useRoute();
  const currentPath = route.path;
  const fullUrl = buildFullUrl(currentPath);
  
  // Build Twitter Card values (default to Open Graph values if not provided)
  const twitterTitleValue = twitterTitle || `${page} - ${title}`;
  const twitterDescriptionValue = twitterDescription || description;
  const twitterImageValue = twitterImage || ogBannerImage;

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
        template () {
          return `${page} - ${title}`;
        },
      },
      ogDescription: {
        property: 'og:description',
        template () {
          return `${description}`;
        },
      },
      ogType: {
        property: 'og:type',
        template () {
          return 'website';
        },
      },
      ogUrl: {
        property: 'og:url',
        template () {
          return fullUrl;
        },
      },
      ogImage: {
        property: 'og:image',
        template () {
          return ogBannerImage;
        },
      },
      // Twitter Card meta tags
      twitterCard: {
        name: 'twitter:card',
        content: twitterCard,
      },
      twitterTitle: {
        name: 'twitter:title',
        template () {
          return twitterTitleValue;
        },
      },
      twitterDescription: {
        name: 'twitter:description',
        template () {
          return twitterDescriptionValue;
        },
      },
      twitterImage: {
        name: 'twitter:image',
        template () {
          return twitterImageValue;
        },
      },
      twitterSite: {
        name: 'twitter:site',
        content: TWITTER_SITE,
      },
    },

    // Link tags
    link: {
      material: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      canonical: {
        rel: 'canonical',
        href: fullUrl,
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
  };
};
