var questions = [
    {
        question : "Commonly used dataTypes DO NOT Include:",
        choices: ["strings","booleans","alerts","numbers"],
        answer: 3
    },
    {
        question : "The condition in an if/else statemnet is enclosed within____.",
        choices: ["parentheses","curly brackets","quotes","square",],
        answer: 1
    },
    {
        question : "arrays in javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all the above"],
        answer: 4
    },
    {
        question : " string values must be enclosed within ______ when being assigned variables.",
        choices : ["commas", "curly brackets", "quotes", "parentheses"],
        answer : 3
    },
    {
        question : "a very useful tool used during development and debugging for printing contents to the debugger is:",
        choices : ["javaScript","termional/bash","for loops","console log"],
        answer : 4
    }
]

var startButtonEl = document.getElementById("startBtn");
var questions = document.getElementById("questions-container");
var finalscore = document.getElementById("final-score");
var initials = document.getElementById("initialsinput");
var confirmButtonEl = document.getElementById("confirm");
var clearscore = document.getElementById("clear");

var score ="0"
var highScores = []

finalCounter.style.display = "none"
highScorecontainer.style.display ="none"



