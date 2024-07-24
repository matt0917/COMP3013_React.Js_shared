//To use all useState command on browser, declare this is to use client
// convert this component to frontend react component
"use client";

import { editBlock } from "@/app/actions";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

export function CodeEditor({ snippet }: any) {
  const [code, setCode] = useState(snippet.code);
  
  return (
    <div className="flex=col">
      <Editor
        height="40vh"
        width="70vw"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        options={{
          minimap: {enabled: false},
        }}
        onChange={(value) => setCode(value)}
      />
      <form action={editBlock.bind(null, snippet.id, code)}>
        <button className="rounded p-2 bg-red-600 hover:bg-red-700 text-white my-2 min-w-36" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}
