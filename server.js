import express from 'express'
import { words } from './words.js'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors({origin: 'http://localhost:8080/'}))

app.get('/assign', (req, res) => {
  const word = words[Math.floor(Math.random()*words.length)]
  console.log("word assigned...");
  console.log(word);

  res.json({word: word})
})

app.get('/check',(req, res) => {
  const word = req.query.word.toLowerCase()
  console.log("received: ",word);
  console.log("hit");
  if (words.includes(word)) {
    console.log("word found");
    res.json({word: word, exists: true})
  }else{
    console.log("word does not exist");
    res.json({error: "word not found in word list", exists: false})
  }
}
)

app.listen(PORT, (err) => {
  if(err) console.error(err);
  console.log(`server started on port: ${PORT}`);
}
)