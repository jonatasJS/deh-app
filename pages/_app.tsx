import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import "boxicons/css/boxicons.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
