import "./App.css";
import { useState, useEffect } from "react";
import { marked } from "marked";

function App() {
  const [outputHtml, setOutputHtml] = useState({ __html: "" });
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const htmlToInject = { __html: marked.parse(inputText) };
    setOutputHtml(htmlToInject);
  }, [inputText]);

  return (
    <div className="markdown-container">
      <h1>Markdown project</h1>
      <div className="input">
        <h2>Input Markdown</h2>
        <textarea
          name="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          id="text"
        ></textarea>
      </div>
      <div className="ouput">
        <h2>Output HTML</h2>
        <div dangerouslySetInnerHTML={outputHtml}></div>
      </div>
    </div>
  );
}

export default App;
