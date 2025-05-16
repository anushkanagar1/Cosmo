import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("HTML");
  const { id } = useParams();

  const handleSubmit = () => {
    alert("Code submitted!");
  };

  return (
    <div className="flex min-h-screen bg-[#0b0120] text-white">
      <Sidebar />

      <main className="flex-1 p-8 flex flex-col">
        <div className="flex justify-end w-38 m-4 bg-[#5e45a3] text-white">
          Language
          <select
            className="bg-transparent border-b border-white/30 px-2 py-1 focus:outline-none text-sm text-black"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JAVA">JAVA</option>
          </select>
        </div>

        <div className="flex flex-grow gap-8">
          <div className="flex-1 bg-[#5e45a3] p-4 rounded-md">
            <h3 className="font-bold mb-2">Code Editor</h3>
            <div className="bg-white text-black rounded-md overflow-hidden h-full">
              <CodeMirror
                value={code}
                height="100%"
                theme="dark"
                extensions={[javascript()]}
                onChange={(val) => setCode(val)}
              />
            </div>
          </div>

          <div className="flex-1 bg-[#5e45a3] p-4 rounded-md">
            <h3 className="font-bold mb-2">Output</h3>
            <div className="bg-white text-black rounded-md h-full p-4">
              <p>Your output will appear here.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Submit
          </button>
        </div>
      </main>
    </div>
  );
};

export default CodeEditor;
