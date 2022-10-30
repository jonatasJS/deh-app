import type { AppProps } from "next/app";

import "../styles/globals.css";

import "boxicons/css/boxicons.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
