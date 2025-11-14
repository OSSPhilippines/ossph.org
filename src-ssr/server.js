/**
 * This file is used for creating the production SSR server
 * You can customize it as needed for your project
 *
 * Note: For Firebase Functions deployment, see production-export.js
 */

import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { ssrProductionExport } from 'quasar/wrappers'

// Handle both ESM and CJS contexts (Quasar compiles to CJS in dev mode)
// In CJS context, __filename is available; in ESM, we use import.meta.url
let requireFn
if (typeof __filename !== 'undefined') {
  // CommonJS context (compiled by Quasar)
  requireFn = require
} else if (typeof import.meta !== 'undefined' && import.meta.url) {
  // ESM context
  requireFn = createRequire(import.meta.url)
} else {
  // Fallback
  requireFn = require
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
  }
})

let cachedConfig = null

// Export functions - handle both dev and production modes
export function create(middlewareParams) {
  // Check if we're in dev mode by checking if middlewareParams has the dev structure
  // In dev mode, middlewareParams has: port, resolve, publicPath, folders, render
  // In production, it has: app, port, isReady, ssrHandler
  const isDev = middlewareParams && middlewareParams.resolve && !middlewareParams.app

  if (isDev) {
    // Dev mode: Quasar provides the app instance via middlewareParams after create is called
    // We need to create a new Express app instance
    const express = requireFn('express')
    const app = express()
    return app
  } else {
    // Production mode: use ssrProductionExport config
    if (!cachedConfig) {
      cachedConfig = serverConfigFn(middlewareParams)
    }
    return cachedConfig.create()
  }
}

export function listen() {
  if (cachedConfig) {
    return cachedConfig.listen()
  }
  // Dev mode doesn't use listen from here
  return Promise.resolve()
}

export async function serveStaticContent(middlewareParams) {
  if (cachedConfig) {
    return cachedConfig.serveStaticContent()
  }
  // Dev mode: return a function that serves static files
  const serveStatic = requireFn('serve-static')
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
