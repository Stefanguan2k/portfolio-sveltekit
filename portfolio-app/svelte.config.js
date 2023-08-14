import adapter from '@sveltejs/adapter-static';
import { importAssets } from 'svelte-preprocess-import-assets';

const config = {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true,
    }),
  },
  preprocess: [importAssets()],
};

export default config;
