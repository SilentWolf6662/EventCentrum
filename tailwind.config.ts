import type { Config } from 'tailwindcss'

const config: Config = {
	prefix: 'tw-',
	corePlugins: {
		preflight: true,
	},
	content: [
	'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
	'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
	'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'primary': '#3b4c5d',
				'secondary': '#e4af10',
				'about': '#76d1ff',
			},
			fontFamily: {
				'arial': ['arial'],
			},
		},
	},
	plugins: [],
}
export default config
