/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {

		extend: {
			colors:{
				"tea-rose" : "#F4C1C0",
				"rose-red" : "#CA2E55",
				"glaucous" : "#7D82B8",
				"keppel" : "#60AB9A",
				"mint-green" : "#BEE3DB",
			},
		},
	},
	plugins: [],
}