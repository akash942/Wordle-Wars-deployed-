import { useEffect, useState } from "react";

export default function Letter({letter,placeColor,sub}) {
  // const [input, setInput] = useState("");

  // const yellow = "#907e2f";
  // const gray = "#2c3032";
  // const green = "#42713e";

  useEffect(()=>{
    // console.log("placeColor:",placeColor);
  },[placeColor])

  return (
    <div
      onClick={() => {
        console.log("clicked");
        
      }}
      className={`letter ${sub?placeColor:''}`}
    >
      {letter}
    </div>
  );
}
