import Head from "next/head";
import type { ChangeEvent } from "react";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import { saveAs } from "file-saver";

export default function Home() {
  const [valueTextArea, setValueTextArea] = useState("");

  async function formatText(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;

    return setValueTextArea(value);
  }

  async function transformToLinkAndCopyToClipboard() {
    if (valueTextArea == "")
      return toast.info("Não contém conteudo para copiar!", {
        theme: "dark",
        pauseOnFocusLoss: false,
        position: "bottom-right"
      });
    const textFormated = valueTextArea.split("\n");
    let text = "";
    for (let i = 0, len = textFormated.length; i < len; ++i) {
      const e = textFormated[i];

      text = `${text}https://sim.tins.com.br/ti/dashboard/${e}/\n`;
    }

    copy(text);
    var blob = new Blob([text], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "links.txt");
    toast.success("Copiado com sucesso!", {
      theme: "dark",
      pauseOnFocusLoss: false,
      position: "bottom-right"
    });
    return setValueTextArea("");
  }

  return (
    <>
      <Head>
        <title>App for Deh</title>
      </Head>
      <main>
        <h1>Cole aqui</h1>

        <textarea name="" id="" value={valueTextArea} onChange={formatText} />

        <button onClick={transformToLinkAndCopyToClipboard}>
          <i className="bx bx-copy icon"></i>
          COPIAR
        </button>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { post: {} },
  };
}
