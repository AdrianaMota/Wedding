import { extendTheme } from "@chakra-ui/react";

const defaultTheme = extendTheme({
	fontSizes: {
		xxxl: "16rem",
		xxl: "8rem",
		xl: "7.5rem",
		l: "5rem",
		m: "4rem",
		s: "2rem",
		xs: "1rem",
	},
	colors: {},
	fonts: {
		main: "'Poppins', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
		heading: "'Parisienne', cursive;",
	},
	styles: {
		global: {
			html: {
				fontFamily: "main",
				fontSize: "10px",
			},
			body: {
				fontSize: "s",
				fontFamily: "main",
				fontWeight: "300",
			},
			"html, body": {
				fontFamily: "main",
				color: "gray.600",
			},
		},
	},
});

export default defaultTheme;
