import Head from "next/head";
import Header from "../../components/Sidebar";
import styles from "../../styles/Home.module.css";

export default function Teste() {
  return (
    <main>
      <Head>
        <title>Test Page</title>
        <meta name="description" content="Generated by Jônatas" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&display=optional"
          rel="stylesheet"
        />
      </Head>
      <h1>TESTE</h1>
    </main>
  );
}
