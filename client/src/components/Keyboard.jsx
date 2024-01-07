import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import Enter from "./Enter";
import Cross from "./Cross";
import { firstRow , secondRow, thirdRow, assignLetterPosition } from "../keyboardLetters";
import { letterPlaceContext } from "../letterPlaceContext";

export default function Keyboard({ appendLetter, setSubmit, word, exists }) {
  const letterPlace = useContext(letterPlaceContext);
  

  let arr;
  useEffect(() => {
    letterPlace.forEach((letter) => {
      arr = assignLetterPosition(letter);
    });
    console.log("the:", arr);
    console.log("e color: "+firstRow[2].color);
    console.log("u color: "+firstRow[6].color);
    console.log("i color: "+firstRow[7].color);
  });

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row gap-1">
        {firstRow.map((letter, i) => (
          <Button
            key={i}
            letter={letter.value}
            addLetter={appendLetter}
            color={letter.color}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center items-center gap-1">
        {secondRow.map((letter, i) => (
          <Button key={i} letter={letter.value} addLetter={appendLetter} color={letter.color}/>
        ))}
      </div>
      <div className="flex flex-row gap-1 justify-center items-center mx-0">
        <Enter setSubmit={setSubmit} word={word} exists={exists} />
        {thirdRow.map((letter, i) => (
          <Button key={i} letter={letter.value} addLetter={appendLetter} color={letter.color}/>
        ))}
        <Cross addLetter={appendLetter} />
      </div>
    </div>
  );
}
