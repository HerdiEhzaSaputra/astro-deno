import { defineConfig } from 'astro/config';
import deno from '@astrojs/deno';
import UnoCSS from 'unocss/astro';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: deno(),
  integrations: [UnoCSS(), react()]
});