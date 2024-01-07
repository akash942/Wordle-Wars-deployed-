import { useEffect, useState, useRef } from "react";
import "./App.css";
import "./index.css";
import Nav from "./components/Nav";
import Keyboard from "./components/Keyboard";
import WordCanvas from "./components/WordCanvas";
import { letterPlaceContext } from "./letterPlaceContext";
import Modal from "./components/modals/Modal";
import { Link } from "react-router-dom";
import WinningModal from "./components/modals/WinningModal";

function App() {
  const [word, setWord] = useState("");
  const [submit, setSubmit] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [KeyboardLetters, setKeyboardLetters] = useState([]);
  const [letterPlace, setLetterPlace] = useState([]);
  const [display, setDisplay] = useState(false);
  // const [valid, setValid] = useState(false)

  const wordArr = [
    "GRAIN",
    "BRAIN",
    "TRAIN",
    "ADIEU",
    "ALIVE",
    "DRAIN",
    "GRAAA",
  ];
  let answer = useRef("");

  const handleOpen = () => {
    setDisplay(true);
    console.log("open");
  };

  const handleClose = (e) => {
    console.log(e);
    if (e.srcElement !== "button") {
      setDisplay(false);
    }
  };

  const wordNotPresent = () => {
    console.log("word not present in word list");
  };

  const checkWord = async (word) => {
    try {
      return await fetch(`check?word=${word}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          return data.exists;
        });
      // console.log("server res:", exists);
      // return exists
    } catch (error) {
      console.error(error);
    }
  };

  function exists(word) {
    const includes = wordArr.includes(word);
    // const apiIncludes = await fetch(`https://api.oed.com/v2/entries/{${word}}?fields=definition,etymologies,pronunciations`)
    console.log(includes);
    return includes;
    // return apiIncludes
  }

  useEffect(() => {
    const handleKeydown = async (e) => {
      // console.log("word:", word);
      // console.log(word.length);
      if (e.key.length === 1 && word.length < 5 && !gameOver) {
        if ((e.key >= "a" && e.key <= "z") || (e.key >= "A" && e.key <= "Z")) {
          // console.log(e.key)
          const letter = e.key.toUpperCase();
          setWord((prev) => prev + letter);
        }
      } else if (e.key === "Enter") {
        console.log("enter was pressed");
        // checkWord(word);
        console.log(word);
        const wordExists = await checkWord(word); //first checking if the word exists
        console.log(wordExists);
        if (wordExists) {
          // setValid(true)
          // alert("word submitted")
          setSubmit(true);
        }
      } else if (e.key === "Backspace") {
        setWord((prev) => {
          const newWordArr = prev.slice(0, -1);
          return newWordArr;
        });
      }
    };
    if (submit && word === answer.current) {
      // alert("game over")//jk
      setGameOver(true);
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [word, gameOver, submit]);

  useEffect(() => {
    if (!answer.current) {
      try {
        fetch("/assign")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            answer.current = data.word.toUpperCase();
            console.log("answer:", answer);
          })
          .catch((err) => console.error(err));
      } catch (err) {
        console.error("error: ", err);
      }
    }
    // window.addEventListener('click',handleClose)
    //   return () => {
    //     window.removeEventListener('click', handleClose)
    //   }
  });

  return (
    <letterPlaceContext.Provider value={letterPlace}>
      <div className="main bg-[#0e0f10] text-white">
        <Nav handleClick={handleOpen} />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Modal
            display={display}
            header={"How to play?"}
            body={"Guess the word in 6 tries"}
            handleClose={handleClose}
          >
            <div className="flex flex-col justify-center items-start gap-2.5">
            <div className="flex flex-row justify-between items-center gap-1">
            <div className=" w-4 h-4 bg-[#42713e]"></div><span>letter is correctly placed</span>
            </div>
            <div className="flex flex-row justify-between gap-1 items-center">
            <div className="w-4 h-4 bg-[#907e2f]"></div><span>letter is misplaced</span>
            </div>
            <div className="flex flex-row justify-between gap-1 items-center">
            <div className="w-4 h-4 bg-[#0d2f41]"></div><span>letter is not in the word</span>
            </div>
            </div>
          </Modal>
          {gameOver && <WinningModal />}
        </div>
        <div className="center-div p-5 ">
          <WordCanvas
            KeyboardLetters={KeyboardLetters}
            answer={answer.current}
            setWord={setWord}
            changeSubmit={setSubmit}
            submit={submit}
            word={word} /*correct={correct}*/
          />
        </div>
        <div className="center-div pt-2">
          <Keyboard
            appendLetter={setWord}
            setSubmit={setSubmit}
            word={word}
            exists={exists}
          />
        </div>
      </div>
    </letterPlaceContext.Provider>
  );
}

export default App;
