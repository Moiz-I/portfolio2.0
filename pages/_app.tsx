import "../styles/globals.css";
import "./lib/font-awesome/css/all.min.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
