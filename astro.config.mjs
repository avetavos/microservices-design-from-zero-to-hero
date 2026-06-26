// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://avetavos.github.io',
  base: '/microservices-design-from-zero-to-hero',
  output: 'static',
  integrations: [starlight({
      title: 'Microservices Design Patterns — From Zero to Hero',
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/microservices-design-from-zero-to-hero/enhance.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/microservices-design-from-zero-to-hero/manifest.webmanifest' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/microservices-design-from-zero-to-hero/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/microservices-design-from-zero-to-hero/icon-192.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#2563EB' } },
        { tag: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: "Microservices Design Patterns" } },
        { tag: 'script', content: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/microservices-design-from-zero-to-hero/sw.js',{scope:'/microservices-design-from-zero-to-hero/'}).catch(function(){})})}" },
      ],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/microservices-design-from-zero-to-hero' }],
      sidebar: [
        { label: 'Intro & Principles', collapsed: true, items: [{ autogenerate: { directory: 'intro-and-principles' } }] },
        { label: 'Decomposition', collapsed: true, items: [{ autogenerate: { directory: 'decomposition' } }] },
        { label: 'Data Management', collapsed: true, items: [{ autogenerate: { directory: 'data-management' } }] },
        { label: 'Transactional Messaging', collapsed: true, items: [{ autogenerate: { directory: 'transactional-messaging' } }] },
        { label: 'Communication', collapsed: true, items: [{ autogenerate: { directory: 'communication' } }] },
        { label: 'Reliability', collapsed: true, items: [{ autogenerate: { directory: 'reliability' } }] },
        { label: 'Observability', collapsed: true, items: [{ autogenerate: { directory: 'observability' } }] },
        { label: 'Deployment & Cross-cutting', collapsed: true, items: [{ autogenerate: { directory: 'deployment-and-cross-cutting' } }] },
      ],
      }), preact()],
});