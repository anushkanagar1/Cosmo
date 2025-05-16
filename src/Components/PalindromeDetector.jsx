import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import Sidebar from "./Sidebar";

const testCases = [
  { input: "madam", expected: true },
  { input: "hello", expected: false },
  { input: "racecar", expected: true },
];

const PalindromeDetector = () => {
  const [code, setCode] = useState(`function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}`);
  const [results, setResults] = useState([]);
  const [time, setTime] = useState(1200);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) clearInterval(timer);
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (sec) =>
    `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(
      sec % 60
    ).padStart(2, "0")}`;

  const runTests = () => {
    const outputs = [];
    try {
      eval(code); // defines isPalindrome()
      if (typeof isPalindrome !== "function")
        throw new Error("No isPalindrome function found");

      for (const test of testCases) {
        const result = isPalindrome(test.input);
        outputs.push({
          input: test.input,
          expected: test.expected,
          result,
          pass: result === test.expected,
        });
      }
    } catch (error) {
      outputs.push({ error: error.message });
    }
    setResults(outputs);
  };

  const handleSubmit = () => {
    alert("Submitted!");
  };

  return (
    <div className="flex min-h-screen bg-[#0a043c] text-white">
      <Sidebar />
      <div className="bg-[#0b0120] text-white p-10 m-10 font-sans h-min-screen">
        <h1 className="text-3xl font-bold mb-2">Palindrome Detector</h1>
        <p className="text-white/70 text-sm mb-4 max-w-xl">
          Write a function that checks if a given string is a palindrome. A
          palindrome is a word, phrase, number, or other sequence that reads the
          same forward and backward.
        </p>

        <div className="flex justify-between items-center mb-6">
          <div></div>
          <div className="bg-white text-black px-3 py-1 rounded-full font-mono">
            ⏱ {formatTime(time)}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-[#b877f7]">
              Code Editor
            </h2>
            <CodeMirror
              value={code}
              height="400px"
              width="650px"
              theme="dark"
              extensions={[javascript()]}
              onChange={(val) => setCode(val)}
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 pl-45 text-[#b877f7]">
              Test Cases
            </h2>
            <div className="space-y-3 pl-45">
              {results.length === 0 ? (
                <p className="text-sm text-white/50">Run test to see output</p>
              ) : results[0]?.error ? (
                <div className="bg-red-700 text-white p-3 rounded-md">
                  {results[0].error}
                </div>
              ) : (
                results.map((res, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-md ${
                      res.pass ? "bg-green-700" : "bg-red-700"
                    }`}
                  >
                    <div>
                      <strong>Input:</strong> {res.input}
                    </div>
                    <div>
                      <strong>Expected:</strong> {String(res.expected)}
                    </div>
                    <div>
                      <strong>Result:</strong> {String(res.result)}
                    </div>
                    <div>
                      <strong>Status:</strong>{" "}
                      {res.pass ? "✅ Pass" : "❌ Fail"}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          <button
            onClick={runTests}
            className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all"
          >
            Run Test
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PalindromeDetector;
