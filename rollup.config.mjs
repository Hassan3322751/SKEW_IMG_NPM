import externals from 'rollup-plugin-node-externals';
import postcss from 'rollup-plugin-postcss';
import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/components/SkewImg.jsx',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.esm.js',
      format: 'es'
    }
  ],
  plugins: [
    externals({ peerDeps: true }),
    postcss({
      extract: true,
      modules: false,
      minimize: true
    }),
    resolve({
      extensions: ['.js', '.jsx']  // Add JSX support
    }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
      exclude: 'node_modules/**'
    })
  ]
};


// const { babel } = require('@rollup/plugin-babel');
// const postcss = require('rollup-plugin-postcss');
// const externals = require('rollup-plugin-node-externals');
// const resolve = require('@rollup/plugin-node-resolve');
// const commonjs = require('@rollup/plugin-commonjs');

// module.exports = {
//   input: 'src/components/SkewImg.js',
//   output: [
//     {
//       file: 'dist/index.js',
//       format: 'cjs'
//     },
//     {
//       file: 'dist/index.esm.js',
//       format: 'es'
//     }
//   ],
//   plugins: [
//     externals({
//       peerDeps: true
//     }),
//     postcss({
//       extract: true,
//       modules: false,
//       minimize: true
//     }),
//     resolve(),
//     commonjs(),
//     babel({
//       babelHelpers: 'bundled',
//       presets: ['@babel/preset-react']
//     })
//   ]
// };