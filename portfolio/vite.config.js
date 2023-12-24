import ViteCompressionPlugin from 'vite-plugin-compression';
import VitePluginVisualizer from 'vite-plugin-visualizer';

export default {
  // ...otras configuraciones...
  plugins: [
    VitePluginVisualizer(),
    ViteCompressionPlugin({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip', // Puedes usar 'gzip' o 'brotli'
      ext: '.gz', // Extensión del archivo comprimido
    }),
  ],
};