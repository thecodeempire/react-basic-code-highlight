import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import nightOwl from "react-syntax-highlighter/dist/esm/styles/hljs/night-owl";
import beautify from "js-beautify";

SyntaxHighlighter.registerLanguage("javascript", js);

function CodeViewer({ code }) {
  const formattedCode = beautify(code);
  return (
    <div style={{ width: "80%", height: "100rem" }}>
      <SyntaxHighlighter language="javascript" style={nightOwl}>
        {formattedCode}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeViewer;
