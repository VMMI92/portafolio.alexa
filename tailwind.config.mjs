/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	'./node_modules/flowbite/**/*.js'
	],
		
	darkMode: 'class',
	theme: {

		extend: {
			width:{
				'7/10': '70%',
        '3/10': '30%',
			},
			height: {
        '7/10': '70%',
        '[650px]': '650px',
      },
			colors:{
				"tea-rose" : "#F4C1C0",
				"rose-red" : "#CA2E55",
				"glaucous" : "#7D82B8",
				"keppel" : "#60AB9A",
				"mint-green" : "#BEE3DB",
			},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
