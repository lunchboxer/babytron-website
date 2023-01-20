import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    prerender: {
      entries: ['*', '/users/[id]', '/users/edit/[id]'],
    },
    adapter: adapter(),
    alias: {
      $graphql: './src/lib/graphql',
    },
  },
}

export default config
