import { useEffect, useState } from "react";
import Word from "./Word";
export default function WordCanvas({
  word,
  changeSubmit,
  submit,
  setWord,
  answer,
  keybordLetters
}) {
  //NOTES:
  //-use react memo for unecessary re-rendering of the components

  const [current, setCurrent] = useState(-1);
  const [words, setWords] = useState([]);

  useEffect(() => {
    console.log("render");
    if (word.length === 5 && submit) {
      setCurrent((prev) => prev + 1);
      changeSubmit(false);
      // setValid(false)
      setWord("");
      console.log("submit:", submit);
      words.push(word);
    }
  }, [submit]);

  return (
    <div className="flex flex-col gap-1.5">
      <Word
        key={0}
        id={0}
        current={current}
        word={current === -1 ? word : words[0] || ""}
        submit={submit}
        answer={answer}
        keybordLetters={keybordLetters}
      />
      <Word
        key={1}
        id={1}
        current={current}
        word={current === 0 ? word : words[1] || ""}
        submit={submit}
        answer={answer}
        keybordLetters={keybordLetters}
      />
      <Word
        key={2}
        id={2}
        current={current}
        word={current === 1 ? word : words[2] || ""}
        submit={submit}
        answer={answer}
        keybordLetters={keybordLetters}
      />
      <Word
        key={3}
        id={3}
        current={current}
        word={current === 2 ? word : words[3] || ""}
        submit={submit}
        answer={answer}
        keybordLetters={keybordLetters}
      />
      <Word
        key={4}
        id={4}
        current={current}
        word={current === 3 ? word : words[4] || ""}
        submit={submit}
        answer={answer}
        keybordLetters={keybordLetters}
      />
      <Word
        key={5}
        id={5}
        current={current}
        word={current === 4 ? word : words[5] || ""}
        submit={submit}
        answer={answer}
        keybordLetters={keybordLetters}
      />
    </div>
  );
}
