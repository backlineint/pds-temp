import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'index.ts',
    output: {
      file: 'dist/decoupled-node-sdk.es.js',
      format: 'es',
    },
    plugins: [typescript()],
  },
  {
    input: 'index.ts',
    output: {
      file: 'dist/decoupled-node-sdk.umd.js',
      format: 'umd',
      name: 'DecoupledNodeSdk',
    },
    plugins: [typescript()],
  },
];
