import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/install-button.ts',
  output: {
    file: 'dist/install-button.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
    typescript({
      tsconfig: './tsconfig.json',
      compilerOptions: {
        target: 'es2020',
        module: 'es2020',
      }
    })
  ],
  external: ['lit', '@material/web'],
};