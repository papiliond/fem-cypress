import { defineConfig } from 'cypress'

export default defineConfig({
  experimentalStudio: true,
  e2e: {
    baseUrl: 'http://localhost:3000/',
  },
})
