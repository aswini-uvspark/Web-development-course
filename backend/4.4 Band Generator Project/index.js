import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.set("view engine", "ejs");


app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));


const adj = [
  "abandoned",
  "adventurous",
  "amazing",
  "beautiful",
  "brave",
  "bright",
  "calm",
  "clever",
  "creative",
  "curious",
  "daring",
  "electric",
  "elegant",
  "fantastic",
  "fearless",
  "gentle",
  "glorious",
  "happy",
  "incredible",
  "intelligent",
  "lovely",
  "lucky",
  "magical",
  "mysterious",
  "peaceful",
  "powerful",
  "quirky",
  "shining",
  "silent",
  "wonderful",
];

// Noun array
const noun = [
  "aardvark",
  "adventure",
  "airplane",
  "artist",
  " astronaut",
  "bird",
  "butterfly",
  "castle",
  "champion",
  "comet",
  "dreamer",
  "eagle",
  "elephant",
  "explorer",
  "flower",
  "forest",
  "guitar",
  "hero",
  "island",
  "journey",
  "lion",
  "moon",
  "mountain",
  "ocean",
  "panda",
  "phoenix",
  "river",
  "star",
  "tiger",
  "universe",
];


app.get("/", (req, res) => {
  res.render("index", {
    adjective: "",
    noun: "",
  });
});

app.post("/submit", (req, res) => {
  const randomAdj =
    adj[Math.floor(Math.random() * adj.length)];

  const randomNoun =
    noun[Math.floor(Math.random() * noun.length)];

  res.render("index", {
    adjective: randomAdj,
    noun: randomNoun,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});