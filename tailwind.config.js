/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				darkCyan: "var(--dark-cyan)",
				lightCyan: "var(--light-cyan)",
				lightGray: "var(--light-gray)",
			},
		},
	},
	plugins: [],
};
