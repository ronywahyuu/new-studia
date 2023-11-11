"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
type Props = {};

const Editor = (props: Props) => {
  const [value, setValue] = useState("");

  return <ReactQuill theme="snow" value={value} className=" bg-white" onChange={setValue} />;
};

export default Editor;
