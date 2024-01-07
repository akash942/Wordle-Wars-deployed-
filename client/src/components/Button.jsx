export default function Button({ addLetter, letter, color }) {
  console.log("letter passed: " + letter + " color passed: " + color);
  let buttonColor = "#2c3032";
  let start = 'start'
  console.log(letter + " passed color: " + color);
  if (color !== undefined && color !== buttonColor) {
    buttonColor = "";
  }
  if (color!=='#2c3032') {
    start=''
  }
  return (
    <button
      className={`button-letter transition hover:[#fff] ${start} bg-[${buttonColor}] ${color}`}
      onClick={() => {
        addLetter((prev) => {
          if (prev.length < 5) {
            return prev + letter;
          } else {
            return prev;
          }
        });
      }}
    >
      {letter}
    </button>
  );
}
