const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  const fortunes = [
    "A feather in the hand is better than a bird in the air.",
    "Get your birds in a line",
    "A good time to finish up old tasks.",
    "A lifetime of happiness lies ahead of you.",
    " person is never to (sic) old to learn.",
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
});

app.get("/api/sexy", (req, res) => {
  const sexys = [
    "A pleasant surprise is waiting for you in bed",
    "A soft voice may be awfully persuasive in bed",
    "All the effort you are making will ultimately pay off in bed",
    "Allow compassion to guide your decisions in bed",
    "An important person will offer you support in bed",
    "An inch of time is an inch of gold in bed",
  ];

  let randomIndex = Math.floor(Math.random() * sexys.length);
  let randomSexy = sexys[randomIndex];

  res.status(200).send(randomSexy);
});

app.get("/api/weekly", (req, res) => {
  const weeklys = [
    "04-16-38-10-05-20",
    "06-35-26-12-19-28",
    "28-14-35-32-49-09",
    "01-25-11-03-12-92",
    "01-24-35-08-51-44",
  ];

  let randomIndex = Math.floor(Math.random() * weeklys.length);
  let randomWeekly = weeklys[randomIndex];

  res.status(200).send(randomWeekly);
});

// app.post("/api/todo", (req, res) => {
//   inputValue.push(req.data)
//   res.status(200).send('You have added successfully')
// });




app.listen(4000, () => console.log("Server running on 4000"));
