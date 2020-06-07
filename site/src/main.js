// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/apple-touch-icon.png'
  });

  head.link.push({
    rel: 'icon',
    sizes: '32x32',
    href: '/favicon-32x32.png'
  });

  head.link.push({
    rel: 'icon',
    sizes: '16x16',
    href: '/favicon-16x16.png'
  });

  head.link.push({
    rel: 'manifest',
    href: '/site.webmanifest'
  });

  head.script.push({
    type: 'text/javascript',
    src: `https://maps.googleapis.com/maps/api/js?libraries=places&key=${process.env.GRIDSOME_GOOGLE_PLACES_API_KEY}`,
    body: true
  });
}