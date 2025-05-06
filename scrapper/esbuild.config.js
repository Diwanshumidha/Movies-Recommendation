// esbuild.config.ts
import { build } from 'esbuild';

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  target: ['node18'],
  outfile: 'netlify/functions/api/index.js',
  format: 'cjs',
  external: ['express'], // or inline it if needed
  sourcemap: true,
});
