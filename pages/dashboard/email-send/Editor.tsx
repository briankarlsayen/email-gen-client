import { useRef } from "react";
import EmailEditor from "react-email-editor";
// import tools from "./custom/tools";
const Editor = () => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current?.editor.exportHtml((data: any) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };
  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  const onReady = () => {
    // editor is ready
    console.log("onReady");
  };

  const opts = {
    // id: "123",
    // displayMode: "email",
    customJS: [
      // "https://examples.unlayer.com/examples/simple-custom-tool/custom.js",
      // "http://localhost:3000/dashboard/email-send/custom",
      // window.location.protocol + "//" + window.location.host + "/custom.js",
      "https://examples.unlayer.com/examples/custom-js/custom.js",
      // console.log("I am custom JS!"),
    ],
    // appearance: {
    //   theme: "dark",
    // },
  };

  // window.location.protocol + "//" + window.location.host + "/custom.js";

  return (
    <div>
      <div>
        <button className="btn btn-primary" onClick={exportHtml}>
          Export HTML
        </button>
      </div>
      <EmailEditor
        ref={emailEditorRef}
        onLoad={onLoad}
        onReady={onReady}
        options={opts}
      />
    </div>
  );
};

export default Editor;
