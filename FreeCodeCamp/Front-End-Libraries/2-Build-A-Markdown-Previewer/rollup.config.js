import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default [{
  input: 'app.js',
  output: {
    file: 'index.js',
    format: 'esm'
  },
  plugins: [
    resolve(),
    babel({ 
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react']
    }),
    commonjs()
  ],
  external: [
    'react'
  ],
  globals: {
    react: "React"
  }
}];
