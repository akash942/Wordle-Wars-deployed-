import { useState, useContext, useEffect } from "react";
import Letter from "./Letter";
import { letterPlaceContext } from "../letterPlaceContext";

export default function Word({ word, current,id, answer}) {
  const [place, setPlace] = useState([]);
  const [submit, setSubmit] = useState(false)
  const letterPlace = useContext(letterPlaceContext)

  
  useEffect(() => {
    if (word.length===5 && current===id) {
      console.log("checking...", word);
      console.log("answer is:", answer);
      const wordArr = word.split("");

      wordArr.forEach((letter, i) => {
        //assigning the places for each letter
        if (letter === answer[i]) {
          console.log("letter="+letter+" answer="+answer[i]);
          place.push("correct");
          letterPlace.push({value: letter, color: "correct"})
          console.log("arr:",letterPlace);
        } else if (letter !== answer[i] && answer.includes(letter)) {
          place.push("misplaced");
          letterPlace.push({value: letter, color: "misplaced"})
        } else if (!answer.includes(letter)) {
          place.push("not-present");
          letterPlace.push({value: letter, color: "not-present"})
        }
      });
        // if (submit === true) {
          // setSubWord(word)
          setSubmit(true)//internal submit state
        // }
      

      if (word === answer) {
        //if answer is correct
        console.log("correct answer!!!");
        // setGameOver(true)
      }
    }

    

    
    // console.log("place[0]:", place[0]);
  }, [current]);

  return (
    <div className="flex flex-row gap-1.5 justify-center content-center max-w-max ">
      <Letter
        sub={submit}
        placeColor={place[0]}
        letter={word[0]}
      />
      <Letter 
        sub={submit}
        placeColor={place[1]}
        letter={word[1]}
      />
      <Letter
        sub={submit}
        placeColor={place[2]}
        letter={word[2]}
      />
      <Letter
        sub={submit}
        placeColor={place[3]}
        letter={word[3]}
      />
      <Letter
        sub={submit}
        placeColor={place[4]}
        letter={word[4]}
      />
    </div>
  );
}
