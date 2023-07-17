/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		fontFamily: { sans: ["Montserrat"] },
		colors: {
			primary: "#5742D8",
			hover: "#311CB2",
		},
		extend: {},
	},

	plugins: [require("flowbite/plugin")],
};
