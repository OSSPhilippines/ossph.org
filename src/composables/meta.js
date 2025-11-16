import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ogBannerImage from '../assets/images/og-banner.png';

const TITLE_DEFAULT = 'Open Source Software PH';
const DESCRIPTION_DEFAULT = 'Open Source Software PH (OSSPH) is a developer-led initiative to grow the community of developers building open source software across the Philippines.';
const BASE_URL = 'https://ossph.org';
const TWITTER_SITE = '@OSSPhilippines'; // Twitter handle for the site

// Organization information for structured data
const ORGANIZATION = {
  name: 'Open Source Software Philippines',
  url: BASE_URL,
  logo: `${BASE_URL}/icons/apple-touch-icon.png`,
  sameAs: [
    'https://github.com/OSSPhilippines',
    'https://twitter.com/OSSPhilippines',
    'https://www.facebook.com/ossph.org',
    'https://discord.gg/DvtqKrWb86',
  ],
};

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

/**
 * Builds Organization structured data
 * @returns {Object} Organization schema
 */
function buildOrganizationSchema () {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORGANIZATION.name,
    url: ORGANIZATION.url,
    logo: ORGANIZATION.logo,
    sameAs: ORGANIZATION.sameAs,
  };
}

/**
 * Builds WebSite structured data
 * @param {string} url - The current page URL
 * @returns {Object} WebSite schema
 */
function buildWebSiteSchema (url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: TITLE_DEFAULT,
    url: BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/awesome?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Builds BreadcrumbList structured data
 * @param {string} path - The current route path
 * @param {string} pageName - The current page name
 * @returns {Object} BreadcrumbList schema
 */
function buildBreadcrumbSchema (path, pageName) {
  const breadcrumbs = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: BASE_URL,
    },
  ];

  // Add breadcrumbs for non-home pages
  if (path !== '/') {
    const pathSegments = path.split('/').filter(Boolean);
    let currentPath = '';

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const segmentName = segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({
        '@type': 'ListItem',
        position: index + 2,
        name: segmentName,
        item: `${BASE_URL}${currentPath}`,
      });
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs,
  };
}

export const useBuildMeta = ({
  title = `${TITLE_DEFAULT} (OSSPH)`,
  page,
  description = DESCRIPTION_DEFAULT,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
} = {}) => {
  // Get current route to build dynamic URLs (reactive)
  const route = useRoute();

  // Make `fullUrl` reactive so it updates when route changes
  const fullUrl = computed(() => buildFullUrl(route.path));

  // Build Twitter Card values (default to Open Graph values if not provided)
  const twitterTitleValue = twitterTitle || `${page} - ${title}`;
  const twitterDescriptionValue = twitterDescription || description;
  const twitterImageValue = twitterImage || ogBannerImage;

  // Build structured data schemas (reactive to route changes)
  const organizationSchema = buildOrganizationSchema();
  const webSiteSchema = computed(() => buildWebSiteSchema(fullUrl.value));
  const breadcrumbSchema = computed(() => buildBreadcrumbSchema(route.path, page));

  // Combine all structured data into an array (reactive)
  const structuredData = computed(() => [
    organizationSchema,
    webSiteSchema.value,
    breadcrumbSchema.value,
  ]);

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
          return fullUrl.value;
        },
      },
      ogImage: {
        property: 'og:image',
        template () {
          return ogBannerImage;
        },
      },
      ogSiteName: {
        property: 'og:site_name',
        content: TITLE_DEFAULT,
      },
      ogLocale: {
        property: 'og:locale',
        content: 'en_US',
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
        href: () => fullUrl.value,
      },
    },

    // JS tags - Structured data (JSON-LD)
    script: {
      ldJson: {
        type: 'application/ld+json',
        innerHTML: () => JSON.stringify(structuredData.value),
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
