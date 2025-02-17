// https://github.com/egoist/vite-plugin-mix/issues/33

import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import type { Plugin } from 'vite'
import type { Adapter } from 'vite-plugin-mix'
import mixPlugin from 'vite-plugin-mix'

interface MixConfig {
  handler: string
  adapter?: Adapter | undefined
}

type MixPlugin = (config: MixConfig) => Plugin

interface Mix {
  default: MixPlugin
}

const mix = (mixPlugin as unknown as Mix).default

// use mix as function
export default defineConfig({
  plugins: [solidPlugin(), mix({ handler: './src/server' })],
  build: {
    target: 'esnext',
  },
})
