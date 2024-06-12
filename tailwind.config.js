/** @type {import('tailwindcss').Config} */
import tailwindcssAnimated from "tailwindcss-animated";
import { nextui } from "@nextui-org/react";

module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	plugins: [nextui(), tailwindcssAnimated],
	theme: {
		extend: {},
	},
};
