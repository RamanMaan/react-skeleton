import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import _package from './package.json';

const input = 'src/index.js';
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js');

export default {
  input,
  output: [
    {
      file: minifyExtension(_package.main),
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: minifyExtension(_package.module),
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    external(),
    resolve(),
    commonjs(),
    terser(),
  ],
};
