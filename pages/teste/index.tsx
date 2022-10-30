import Head from "next/head";

export default function Teste() {
  return (
    <>
      <Head>
        <title>Test Page</title>
      </Head>
      <h1>TESTE</h1>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { post: {} },
  }
}
