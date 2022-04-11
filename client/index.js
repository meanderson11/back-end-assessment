document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/")
    .then(function (response) {
    const data = response.data;
    alert(data);
  });
};

document.getElementById("fortuneButton").onclick = function () {
  axios.get("http://localhost:4000/api/fortune/")
    .then(function (response) {
    const data = response.data;
    alert(data);
  });
};

document.getElementById("sexyfortuneButton").onclick = function () {
  axios.get("http://localhost:4000/api/sexy/")
    .then(function (response) {
    const data = response.data;
    alert(data);
  });
};

document.getElementById("weeklyLuckyButton").onclick = function () {
  axios.get("http://localhost:4000/api/weekly/")
    .then(function (response) {
    const data = response.data;
    alert(data);
  });
};
  


// This application id for the Magic 8 Ball
var answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes-definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  " Signs point to Yes",
  "Dont count on it",
  "My reply is no",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "concentrate and ask again",
];

window.onload = function () {
  var eight = document.getElementById("eight");
  var answer = document.getElementById("answer");
  var eightball = document.getElementById("eight-ball");
  var question = document.getElementById("question");

  eightball.addEventListener("click", function () {
    if (question.value.length < 1) {
      alert("Enter a question");
    } else {
      eight.innerText = "";
      var num = Math.floor(Math.random() * Math.floor(answers.length));
      answer.innerText = answers[num];
    }
  });
};

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      nameNode = document.querySelector(`#${ev.target.id} span.name`);
      nameNode.style.visibility = "hidden"
      input = document.querySelector(`#${ev.target.id} input`);
      input.style.display = "block"
    }
  },
  false
);

document.addEventListener( "click", deleteListener);
function deleteListener(event){
    var element = event.target;
    if(element.tagName == 'SPAN' && element.classList.contains("close")) {
      var li = element.parentElement;
      id = li.id.split("_")[1]
      axios.delete(`http://localhost:4000/api/todo/${id}`).then((respObj)=> {
        let {status, data} = respObj
        if (status == 400) {
          alert(data)
        }
        li.style.display = "none";
        console.log(data)
      })
    }
}

document.addEventListener('keyup', (event)=>{
  if (event.keyCode === 13) {
    event.preventDefault();
    updateListener(event)
  }
});
function updateListener(event){
  var element = event.target;
  if(element.tagName == 'INPUT' && element.classList.contains("edit-todo")) {
    id = parseInt(element.id.split("_")[1])
    axios.put(`http://localhost:4000/api/todo/${id}`, {"id": id, "name": element.value}).then((respObj)=> {
      let {status, data} = respObj
      if (status == 400) {
        alert(data)
      }
      element.style.display = "none";
      nameNode = document.querySelector(`#todo_${id} span.name`);
      nameNode.innerText = element.value
      nameNode.style.visibility = "visible"
      console.log(data)
    })
  }
}

var createTodo = (obj) => {
  var li = document.createElement("li");
  var input = document.createElement("input")
  input.id = 'input_' + obj.id
  input.className = 'edit-todo'
  input.style.display = "none"
  input.value = obj.name
  li.appendChild(input)
  var todoSpan = document.createElement("SPAN");
  var t = document.createTextNode(obj.name);
  todoSpan.className = 'name'
  todoSpan.appendChild(t)
  li.id = 'todo_' + obj.id
  li.appendChild(todoSpan);
  if (obj.name === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var inputValue = document.getElementById("myInput").value;
  axios.post('http://localhost:4000/api/todo', {'todo': inputValue}).then((respObj)=>{
    let {responseMessage, obj} = respObj.data
    console.log(responseMessage)
    createTodo(obj)
  })
}

// Build list from back end 
function buildList() {
  axios.get('http://localhost:4000/api/todo/list').then((respObj)=>{
    let {todos} = respObj.data
    if (todos) {
      todos.forEach(todo => {
        createTodo(todo)
      });
    }
  })
}
buildList()

