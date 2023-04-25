import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

function Teste() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("posts/teste/Page.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <>
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        components={{
          p: (props) => (
            <p
              className="custom-paragraph"
              {...props}
              style={{ textAlign: "center" }}
            />
          ),
          img: (props) => (
            <img
              className="custom-paragraph2"
              {...props}
              style={{ width: 300, height: 100 }}
            />
          ),
        }}
      />
    </>
  );
}

export default Teste;
