const express = require("express");
const cors = require("cors");

const app = express();
let idCount = 3
const todoList = [
  {'id': 0, 'name': 'Hit the gym'},
  {'id': 1, 'name': 'Buy eggs'},
  {'id': 2, 'name': 'Read a book'},
  {'id': 3, 'name': 'Organize office'}
]

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

app.get("/api/todo/list", (req, res) => {
  res.status(200).send({'todos': todoList})
})

app.post("/api/todo", (req, res) => {
  let {todo} = req.body
  // assign and ID and put it in the list
  // send to the frontend
  idCount = ++idCount
  saveObj = {'id': idCount, 'name': todo}
  todoList.push(saveObj)
  res.status(200).send({'responseMessage': `${todo}, has been successfully added.`, 'obj': saveObj})
})

app.put("/api/todo/:id", (req, res) => {
  let id  = parseInt(req.params.id)
  let todo = req.body
  if (id != todo.id) {
    res.status(400).send("Todo invalid.")
    return
  }
  let name = req.body.name
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id === req.body.id) {
      todoList[i].name = name
      res.status(200).send("Todo updated.")
      return
    }
  }
  res.status(400).send("Todo not found.")
})

app.delete("/api/todo/:id", (req, res) => {
  let id  = parseInt(req.params.id)
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id === id) {
      todoList.splice(i, 1)
      res.status(200).send("Todo deleted.")
      return
    }
  }
  res.status(400).send("Todo not found.")
})

app.listen(4000, () => console.log("Server running on 4000"));
