import adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $graphql: './src/lib/graphql',
    },
  },
}

export default config
