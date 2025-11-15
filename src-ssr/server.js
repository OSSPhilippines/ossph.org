/**
 * This file is used for creating the production SSR server
 * You can customize it as needed for your project
 *
 * Note: In @quasar/app-webpack v4+, production-export.js is no longer needed.
 * Firebase Functions export is integrated here.
 */

import * as functions from 'firebase-functions'
import { ssrProductionExport } from 'quasar/wrappers'

// Helper to get require function
// Quasar compiles this file to CJS, so require is available
function getRequire() {
  // In CJS context (compiled by Quasar), require is available globally
  if (typeof require !== 'undefined') {
    return require
  }
  // This should not happen since Quasar compiles to CJS
  throw new Error('require is not available')
}

// For production builds, use ssrProductionExport
const serverConfigFn = ssrProductionExport(({ app, port, isReady, ssrHandler }) => {
  return {
    create() {
      return app
    },
    listen() {
      return isReady().then(() => {
        app.listen(port, () => {
          console.log(`Server listening at http://localhost:${port}`)
        })
      })
    },
    serveStaticContent() {
      // Handled by Quasar
    },
    renderPreloadTag(file) {
      if (file.endsWith('.js')) {
        return `<link rel="modulepreload" href="${file}">`
      } else if (file.endsWith('.css')) {
        return `<link rel="stylesheet" href="${file}">`
      } else if (file.endsWith('.woff')) {
        return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`
      } else if (file.endsWith('.woff2')) {
        return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`
      } else if (file.endsWith('.gif')) {
        return ` <link rel="preload" href="${file}" as="image" type="image/gif">`
      } else if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`
      } else if (file.endsWith('.png')) {
        return ` <link rel="preload" href="${file}" as="image" type="image/png">`
      }
      return ''
    },
    // Firebase Functions export
    ossphSSRHandler: functions.https.onRequest(ssrHandler),
  }
})

let cachedConfig = null

// Export functions - handle both dev and production modes
export function create(middlewareParams) {
  // In dev mode, Quasar provides the app instance via `middlewareParams.app`
  // In production, middlewareParams contains: `app`, `port`, `isReady`, `ssrHandler`
  // Check if we're in production modes by checking for `isReady`
  const isProduction = middlewareParams && middlewareParams.isReady

  if (isProduction) {
    // Production mode: use ssrProductionExport config
    if (!cachedConfig) {
      cachedConfig = serverConfigFn(middlewareParams)
    }
    return cachedConfig.create()
  } else {
    // Dev mode: Quasar may provide the app instance via `middlewareParams.app`
    // If not provided, create a new Express app instance
    if (middlewareParams && middlewareParams.app) {
      return middlewareParams.app
    }
    // Create Express app if not provided (Quasar will use it)
    // Quasar compiles this file to CJS, so require should be available
    const express = getRequire()('express')
    return express()
  }
}

export function listen() {
  if (cachedConfig) {
    return cachedConfig.listen()
  }
  // Dev mode doesn't use listen from here - Quasar dev server handles it
  return Promise.resolve()
}

export async function serveStaticContent(middlewareParams) {
  if (cachedConfig) {
    return cachedConfig.serveStaticContent()
  }
  // Dev mode: return a function that serves static files
  // Quasar handles this in dev mode, but we provide a fallback
  const serveStatic = (await import('serve-static')).default
  return ({ urlPath, pathToServe }) => {
    const staticPath = middlewareParams.resolve.public(pathToServe)
    middlewareParams.app.use(urlPath, serveStatic(staticPath))
  }
}

export function renderPreloadTag(file) {
  if (cachedConfig) {
    return cachedConfig.renderPreloadTag(file)
  }
  // Default implementation for dev mode
  if (file.endsWith('.js')) {
    return `<link rel="modulepreload" href="${file}">`
  } else if (file.endsWith('.css')) {
    return `<link rel="stylesheet" href="${file}">`
  } else if (file.endsWith('.woff')) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`
  } else if (file.endsWith('.woff2')) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`
  } else if (file.endsWith('.gif')) {
    return ` <link rel="preload" href="${file}" as="image" type="image/gif">`
  } else if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
    return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`
  } else if (file.endsWith('.png')) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`
  }
  return ''
}

export default serverConfigFn
