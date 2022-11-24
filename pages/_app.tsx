import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import Sidebar from "../components/Sidebar";

import "boxicons/css/boxicons.css";
import "react-toastify/dist/ReactToastify.css";

import styles from "../styles/Home.module.css";
import "../styles/globals.css";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Sidebar />
      <Image
        priority
        width={50}
        height={50}
        className={styles.profile}
        src="https://sim.tins.com.br/media/1/usuarios/60911012346.jpg?externo=true"
        alt="Debora"
      />
      <AnimatePresence exitBeforeEnter>
        <motion.main
          key={router.asPath}
          variants={{
            hidden: { opacity: 0, x: -500 },
            enter: { opacity: 1, x: 0 },
            exit: { opacity: 0, y: -500 },
          }}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear" }}
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
      <ToastContainer />
    </div>
  );
}
