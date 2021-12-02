import esbuild from 'esbuild'

esbuild.build({
  entryPoints: ['./src/index.ts'],
  outfile: './dist/index.js',
  minify: false,
  bundle: true,
  sourcemap: true,
  platform: 'node',
  target: 'es2017',
  watch: true,
  loader: {
    '.svg': 'dataurl'
  }
})
