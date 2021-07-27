const colors = require('tailwindcss/colors')

const themeColors = {
	primary: {
		light: '#9FC6E0',
		DEFAULT: '#002647',
	},
	secondary: {
		DEFAULT: '#B22234',
	},
	accent: {
		DEFAULT: '#34495E'
	},
	white: colors.white,
	gray: colors.gray,
}

module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
			icons: ['Material Icons'],
		},
		colors: themeColors,
		fill: themeColors,
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};