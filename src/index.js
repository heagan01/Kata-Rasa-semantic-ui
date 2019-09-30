var home = document.getElementById("home2");

var flavours = document.getElementById("flavours2");

var jokes = document.getElementById("jokes2");

var comments = document.getElementById("comments2");

var gallery = document.getElementById("gallery2");

var feedback = document.getElementById("feedback2");

function home1() {
  home.classList.add("active");
  flavours.classList.remove("active");
  jokes.classList.remove("active");
  location.href = "#home2";
  comments.classList.remove("active");
  gallery.classList.remove("active");
  feedback.classList.remove("active");
}

function flavours1() {
  home.classList.remove("active");
  flavours.classList.add("active");
  jokes.classList.remove("active");
  comments.classList.remove("active");
  gallery.classList.remove("active");
  feedback.classList.remove("active");
}

function jokes1() {
  home.classList.remove("active");
  flavours.classList.remove("active");
  jokes.classList.add("active");
  comments.classList.remove("active");
  gallery.classList.remove("active");
  feedback.classList.remove("active");
}

function comments1() {
  home.classList.remove("active");
  flavours.classList.remove("active");
  jokes.classList.remove("active");
  comments.classList.add("active");
  gallery.classList.remove("active");
  feedback.classList.remove("active");
}

function gallery1() {
  home.classList.remove("active");
  flavours.classList.remove("active");
  jokes.classList.remove("active");
  comments.classList.remove("active");
  gallery.classList.add("active");
  feedback.classList.remove("active");
}

function feedback1() {
  home.classList.remove("active");
  flavours.classList.remove("active");
  jokes.classList.remove("active");
  comments.classList.remove("active");
  gallery.classList.remove("active");
  feedback.classList.add("active");
}
