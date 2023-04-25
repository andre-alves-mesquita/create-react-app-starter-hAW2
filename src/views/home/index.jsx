import { createElement, Fragment, useEffect, useState } from "react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { Page } from "./Page";

function Home() {
  const [Content, setContent] = useState(Fragment);

  useEffect(() => {
    unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeReact, { createElement, Fragment })
      .process(Page)
      .then((file) => {
        setContent(file.result);
      });
  }, []);
  return Content;
}

export default Home;
