import { useState } from "react";

const useWrite = () => {
  const [write, setWrite] = useState("");

  const handleInputChange = (e) => {
    setWrite(e.target.value);
  };

  const resetInput = () => {
    setWrite("");
  };

  return { write, handleInputChange, resetInput };
};

export default useWrite;
