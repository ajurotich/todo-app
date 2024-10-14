import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	
	//add server preference obj to run app on port 3000
	server: {
		port: 3000
	}
})
