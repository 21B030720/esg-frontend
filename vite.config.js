import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, './src/assets'),
			'@http': path.resolve(__dirname, './src/http'),
			'@services': path.resolve(__dirname, './src/services'),
			'@common': path.resolve(__dirname, './src/common'),
			'@localization': path.resolve(__dirname, './src/localization'),
			'@modules': path.resolve(__dirname, './src/modules'),
			'@routes': path.resolve(__dirname, './src/routes'),
		},
	},
});
