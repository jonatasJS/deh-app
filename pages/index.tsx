import Head from "next/head";
import type { ChangeEvent } from "react";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import { saveAs } from "file-saver";
import type { GetServerSidePropsContext } from "next";

export default function Home() {
  const [valueTextArea, setValueTextArea] = useState("");
  const [valueInput, setValueInput] = useState("");

  async function formatText(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;

    return setValueTextArea(value);
  }

  async function downloadTxtFile() {
    if (valueTextArea == "")
      return toast.info("Não contém conteudo para baixar!", {
        theme: "dark",
        pauseOnFocusLoss: false,
        position: "bottom-right",
      });
    const textFormated = valueTextArea.split("\n");
    let text = "";
    for (let i = 0, len = textFormated.length; i < len; ++i) {
      const e = textFormated[i];

      text = `${text}https://sim.tins.com.br/ti/dashboard/${e}/\n`;
    }

    var blob = new Blob([text], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, `${valueInput !== "" ? valueInput : "links"}.txt`);
    toast.success(`Download ${valueInput !== "" ? "\""+valueInput+"\" " : ""}efetuado com sucesso!`, {
      theme: "dark",
      pauseOnFocusLoss: false,
      position: "bottom-right",
    });
    setValueInput("");
    return setValueTextArea("");
  }
  
  async function transformToLinkAndCopyToClipboard() {
    if (valueTextArea == "")
    return toast.info("Não contém conteudo para copiar!", {
      theme: "dark",
      pauseOnFocusLoss: false,
      position: "bottom-right",
    });
    const textFormated = valueTextArea.split("\n");
    let text = "";
    for (let i = 0, len = textFormated.length; i < len; ++i) {
      const e = textFormated[i];
      
      text = `${text}https://sim.tins.com.br/ti/dashboard/${e}/\n`;
    }
    
    copy(text);
    toast.success("Copiado com sucesso!", {
      theme: "dark",
      pauseOnFocusLoss: false,
      position: "bottom-right",
    });
    setValueInput("");
    return setValueTextArea("");
  }
  
  return (
    <>
      <Head>
        <title>App for Deh</title>
      </Head>
      <main>
        <h1>Cole aqui</h1>

        <textarea
          name=""
          id=""
          placeholder="Números..."
          value={valueTextArea}
          onChange={formatText}
        />

        <input
          type="text"
          placeholder="Nome do arquivo (Opicional caso for baixar)"
          onChange={(e) => setValueInput(e.target.value)}
          value={valueInput}
        />

        <div>
          <button onClick={transformToLinkAndCopyToClipboard}>
            <i className="bx bx-copy icon"></i>
            Copiar
          </button>
          <button onClick={downloadTxtFile}>
            <i className="bx bx-download"></i>
            Baixar TXT
          </button>
        </div>
      </main>
    </>
  );
}

// export async function getStaticProps() {
//   return {
//     props: { post: {} },
//   };
// }

export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {},
  }
}
