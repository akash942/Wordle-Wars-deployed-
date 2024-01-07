import Modal from "./Modal";
import { useState } from "react";

export default function LosingModal({ answer }) {
  const [display, setDisplay] = useState(true);

  const handleClose = (e) => {
    if (e.srcElement !== "button") {
      setDisplay(false);
    }
  };
  return (
    <Modal title={"Sorry you lost!!!!"} body={`the word was ${answer}`} handleClose={handleClose}></Modal>
  );
}
