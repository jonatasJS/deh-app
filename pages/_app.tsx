import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Header from "../components/Sidebar";

import "boxicons/css/boxicons.css";
import "react-toastify/dist/ReactToastify.css";

import styles from "../styles/Home.module.css";
import "../styles/globals.css";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Header />
      <Image
        priority
        width={50}
        height={50}
        className={styles.profile}
        src="https://sim.tins.com.br/media/1/usuarios/60911012346.jpg?externo=true"
        alt="Debora"
      />
      <motion.main
        key={router.asPath}
        variants={{
          hidden: { opacity: 0, x: -200, y: 0 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 0, y: -200 },
        }}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
      >
        <Component {...pageProps} />
      </motion.main>
      <ToastContainer />
    </div>
  );
}
