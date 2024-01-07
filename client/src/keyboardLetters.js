let firstRow = [
  { value: "Q", color: "#2c3032" },
  { value: "W", color: "#2c3032" },
  { value: "E", color: "#2c3032" },
  { value: "R", color: "#2c3032" },
  { value: "T", color: "#2c3032" },
  { value: "Y", color: "#2c3032" },
  { value: "U", color: "#2c3032" },
  { value: "I", color: "#2c3032" },
  { value: "O", color: "#2c3032" },
  { value: "P", color: "#2c3032" },
];

const secondRow = [
  { value: "A", color: "#2c3032" },
  { value: "S", color: "#2c3032" },
  { value: "D", color: "#2c3032" },
  { value: "F", color: "#2c3032" },
  { value: "G", color: "#2c3032" },
  { value: "H", color: "#2c3032" },
  { value: "J", color: "#2c3032" },
  { value: "K", color: "#2c3032" },
  { value: "L", color: "#2c3032" },
];

const thirdRow = [
  { value: "Z", color: "#2c3032" },
  { value: "X", color: "#2c3032" },
  { value: "C", color: "#2c3032" },
  { value: "V", color: "#2c3032" },
  { value: "B", color: "#2c3032" },
  { value: "N", color: "#2c3032" },
  { value: "M", color: "#2c3032" },
];

const assignLetterPosition = (letter) => {
  let arr = [];
  firstRow.forEach((element, i) => {
    if (element.value === letter.value) {
        // if(firstRow[i.color !== "gr"])
        firstRow[i].color = letter.color;
        console.log(firstRow);
        arr.push(firstRow[i]);
    }
  });
  secondRow.forEach((element, i) => {
    if (element.value === letter.value) {
        secondRow[i].color = letter.color;
        console.log(secondRow[i]);
        arr.push(secondRow[i]);
    }
  });
  thirdRow.forEach((element, i) => {
    if (element.value === letter.value) {
        thirdRow[i].color = letter.color;
        console.log(thirdRow[i]);
        arr.push(thirdRow[i]);
    }
  });
  return arr;
};
// assignLetterPosition()

module.exports = { firstRow, secondRow, thirdRow, assignLetterPosition };
