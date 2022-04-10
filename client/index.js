document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};

document.getElementById("fortuneButton").onclick = function () {
  axios.get("http://localhost:4000/api/fortune/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};

document.getElementById("sexyfortuneButton").onclick = function () {
  axios.get("http://localhost:4000/api/sexy/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};

document.getElementById("weeklyLuckyButton").onclick = function () {
  axios.get("http://localhost:4000/api/weekly/").then(function (response) {
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

// this is my todo List
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
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

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
