import { useState } from "react";
import Modal from "./Modal";

export default function WinningModal() {
  const [display, setDisplay] = useState(true);

  const handleClose = (e) => {
    if (e.srcElement !== "button") {
      setDisplay(false);
    }
  };

  return (
    <Modal
      display={display}
      header={"you won!!!!"}
      body={"do you want to play again?"}
      handleClose={handleClose}
    >
    <button className="bg-[#7fc73c] text-sky-400 p-1 rounded-md text-[#000]" onClick={()=>window.location.reload()}>play again</button>
    </Modal>
  );
}
