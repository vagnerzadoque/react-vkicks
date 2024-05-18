import resolve from '@rollup/plugin-node-resolve';
import ignore from 'rollup-plugin-ignore';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.ts', // Certifique-se de que este arquivo existe
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true // Adicionando source map
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true // Adicionando source map
    },
    {
      file: 'dist/umd/index.js',
      format: 'umd',
      name: 'react-vkicks',
      sourcemap: true // Adicionando source map
    }
  ],
  plugins: [
    ignore(['**/*.stories.tsx', '**/*.stories.ts']),
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'] // Adicionando extensões
    }),
    commonjs(),
    typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.stories.ts", "**/*.stories.tsx"],
        noEmitOnError: false // Garante que o TypeScript não emitirá em caso de erro
    }),
    terser()
  ],
  external: ['react', 'react-dom']
};
