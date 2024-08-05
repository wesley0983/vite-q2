import { defineConfig, loadEnv } from 'vite'
const path = require('path')

// import react from '@vitejs/plugin-react'
//
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })
// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    esbuild: {
      jsxInject: `import React from 'react'`,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@jsl': path.resolve(__dirname, 'src/core/jsl/src/js/lib'),
        '@jsl-react': path.resolve(__dirname, 'src/core/jsl/src/js/react')
      },
    },
    server: {
      port: Number(process.env.VITE_PORT),
    },
  })
}
