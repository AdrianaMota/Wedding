import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import defaultTheme from "../utils/theme.js";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

import "@fontsource/parisienne/400.css";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={defaultTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
