import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';







const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();

const BACKEND_ADDRESS = process.env.VITE_BACKEND_ADDRESS;
console.log('Backend Address:', process.env.VITE_BACKEND_ADDRESS);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
		  '/api': {
			target: BACKEND_ADDRESS, // Backend server
			changeOrigin: true,
			secure: false,
			rewrite: (path) => path.replace(/^\/api/, ''),
		  },
		},
	  },
	  
	  
	  
	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, './src/assets'),
			'@common': path.resolve(__dirname, './src/common'),
			'@http': path.resolve(__dirname, './src/http'),
			'@localization': path.resolve(__dirname, './src/localization'),
			'@modules': path.resolve(__dirname, './src/modules'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@router': path.resolve(__dirname, './src/router'),
			'@services': path.resolve(__dirname, './src/services'),
		},
	},
});
