function first() {
  var lightbtn = document.getElementById("light-button");
  var buybody = document.getElementById("buybody");

  buybody.style.display = "none";
  lightbtn.style.display = "none";
}

function swapStyleSheet(sheet) {
  document.getElementById("pagestyle").setAttribute("href", sheet);
}

function darktheme() {
  var darkbtn = document.getElementById("dark-button");
  var lightbtn = document.getElementById("light-button")
  var nav = document.getElementById("navbar");
  var buybtnnav = document.getElementById("buy-btn-nav");
  var buybtnbody = document.getElementById("buy-btn-body");
  var buybtnoriginal = document.getElementById("buy-original");
  var buybtnsambalado = document.getElementById("buy-sambalado");

  darkbtn.style.display = "none";
  lightbtn.style.display = "block";
  nav.classList.add("inverted");
  buybtnnav.classList.add("inverted");
  buybtnbody.classList.add("inverted");
  buybtnoriginal.classList.add("inverted");
  buybtnsambalado.classList.add("inverted");
  swapStyleSheet("semantic.cyborg.css");
}


function lighttheme() {
  var darkbtn = document.getElementById("dark-button");
  var lightbtn = document.getElementById("light-button")
  var nav = document.getElementById("navbar");
  var buybtnnav = document.getElementById("buy-btn-nav");
  var buybtnbody = document.getElementById("buy-btn-body");
  var buybtnoriginal = document.getElementById("buy-original");
  var buybtnsambalado = document.getElementById("buy-sambalado");

  darkbtn.style.display = "block";
  lightbtn.style.display = "none";
  nav.classList.remove("inverted");
  buybtnnav.classList.remove("inverted");
  buybtnbody.classList.remove("inverted");
  buybtnoriginal.classList.remove("inverted");
  buybtnsambalado.classList.remove("inverted");
  swapStyleSheet("semantic.min.css");
}

function homenava() {
  var homenav = document.getElementById("home-nav");
  var flavoursnav = document.getElementById("flavours-nav");
  var jokesnav = document.getElementById("jokes-nav");
  var commentsnav = document.getElementById("comments-nav");
  var gallerynav = document.getElementById("gallery-nav");
  var feedbacknav = document.getElementById("feedback-nav");
  var buybody = document.getElementById("buybody");
  var homebody = document.getElementById("home");
  var flavoursbody = document.getElementById("flavours");
  var jokesbody = document.getElementById("jokes");
  var commentsbody = document.getElementById("comments");
  var gallerybody = document.getElementById("gallery");
  var feedbackbody = document.getElementById("feedback");

  homebody.style.display = "block";
  flavoursbody.style.display = "block";
  jokesbody.style.display = "block";
  commentsbody.style.display = "block";
  gallerybody.style.display = "block";
  feedbackbody.style.display = "block";
  buybody.style.display = "none";
  homenav.classList.add("active");
  flavoursnav.classList.remove("active");
  jokesnav.classList.remove("active");
  commentsnav.classList.remove("active");
  gallerynav.classList.remove("active");
  feedbacknav.classList.remove("active");
}

function flavoursnava() {
  var homenav = document.getElementById("home-nav");
  var flavoursnav = document.getElementById("flavours-nav");
  var jokesnav = document.getElementById("jokes-nav");
  var commentsnav = document.getElementById("comments-nav");
  var gallerynav = document.getElementById("gallery-nav");
  var feedbacknav = document.getElementById("feedback-nav");
  var buybody = document.getElementById("buybody");
  var homebody = document.getElementById("home");
  var flavoursbody = document.getElementById("flavours");
  var jokesbody = document.getElementById("jokes");
  var commentsbody = document.getElementById("comments");
  var gallerybody = document.getElementById("gallery");
  var feedbackbody = document.getElementById("feedback");

  homebody.style.display = "block";
  flavoursbody.style.display = "block";
  jokesbody.style.display = "block";
  commentsbody.style.display = "block";
  gallerybody.style.display = "block";
  feedbackbody.style.display = "block";
  buybody.style.display = "none";
  homenav.classList.remove("active");
  flavoursnav.classList.add("active");
  jokesnav.classList.remove("active");
  commentsnav.classList.remove("active");
  gallerynav.classList.remove("active");
  feedbacknav.classList.remove("active");
}

function jokesnava() {
  var homenav = document.getElementById("home-nav");
  var flavoursnav = document.getElementById("flavours-nav");
  var jokesnav = document.getElementById("jokes-nav");
  var commentsnav = document.getElementById("comments-nav");
  var gallerynav = document.getElementById("gallery-nav");
  var feedbacknav = document.getElementById("feedback-nav");
  var buybody = document.getElementById("buybody");
  var homebody = document.getElementById("home");
  var flavoursbody = document.getElementById("flavours");
  var jokesbody = document.getElementById("jokes");
  var commentsbody = document.getElementById("comments");
  var gallerybody = document.getElementById("gallery");
  var feedbackbody = document.getElementById("feedback");

  homebody.style.display = "block";
  flavoursbody.style.display = "block";
  jokesbody.style.display = "block";
  commentsbody.style.display = "block";
  gallerybody.style.display = "block";
  feedbackbody.style.display = "block";
  buybody.style.display = "none";
  homenav.classList.remove("active");
  flavoursnav.classList.remove("active");
  jokesnav.classList.add("active");
  commentsnav.classList.remove("active");
  gallerynav.classList.remove("active");
  feedbacknav.classList.remove("active");
}

function commentsnava() {
  var homenav = document.getElementById("home-nav");
  var flavoursnav = document.getElementById("flavours-nav");
  var jokesnav = document.getElementById("jokes-nav");
  var commentsnav = document.getElementById("comments-nav");
  var gallerynav = document.getElementById("gallery-nav");
  var feedbacknav = document.getElementById("feedback-nav");
  var buybody = document.getElementById("buybody");
  var homebody = document.getElementById("home");
  var flavoursbody = document.getElementById("flavours");
  var jokesbody = document.getElementById("jokes");
  var commentsbody = document.getElementById("comments");
  var gallerybody = document.getElementById("gallery");
  var feedbackbody = document.getElementById("feedback");

  homebody.style.display = "block";
  flavoursbody.style.display = "block";
  jokesbody.style.display = "block";
  commentsbody.style.display = "block";
  gallerybody.style.display = "block";
  feedbackbody.style.display = "block";
  buybody.style.display = "none";
  homenav.classList.remove("active");
  flavoursnav.classList.remove("active");
  jokesnav.classList.remove("active");
  commentsnav.classList.add("active");
  gallerynav.classList.remove("active");
  feedbacknav.classList.remove("active");
}

function gallerynava() {
  var homenav = document.getElementById("home-nav");
  var flavoursnav = document.getElementById("flavours-nav");
  var jokesnav = document.getElementById("jokes-nav");
  var commentsnav = document.getElementById("comments-nav");
  var gallerynav = document.getElementById("gallery-nav");
  var feedbacknav = document.getElementById("feedback-nav");
  var buybody = document.getElementById("buybody");
  var homebody = document.getElementById("home");
  var flavoursbody = document.getElementById("flavours");
  var jokesbody = document.getElementById("jokes");
  var commentsbody = document.getElementById("comments");
  var gallerybody = document.getElementById("gallery");
  var feedbackbody = document.getElementById("feedback");

  homebody.style.display = "block";
  flavoursbody.style.display = "block";
  jokesbody.style.display = "block";
  commentsbody.style.display = "block";
  gallerybody.style.display = "block";
  feedbackbody.style.display = "block";
  buybody.style.display = "none";
  homenav.classList.remove("active");
  flavoursnav.classList.remove("active");
  jokesnav.classList.remove("active");
  commentsnav.classList.remove("active");
  gallerynav.classList.add("active");
  feedbacknav.classList.remove("active");
}

function feedbacknava() {
  var homenav = document.getElementById("home-nav");
  var flavoursnav = document.getElementById("flavours-nav");
  var jokesnav = document.getElementById("jokes-nav");
  var commentsnav = document.getElementById("comments-nav");
  var gallerynav = document.getElementById("gallery-nav");
  var feedbacknav = document.getElementById("feedback-nav");
  var buybody = document.getElementById("buybody");
  var homebody = document.getElementById("home");
  var flavoursbody = document.getElementById("flavours");
  var jokesbody = document.getElementById("jokes");
  var commentsbody = document.getElementById("comments");
  var gallerybody = document.getElementById("gallery");
  var feedbackbody = document.getElementById("feedback");

  homebody.style.display = "block";
  flavoursbody.style.display = "block";
  jokesbody.style.display = "block";
  commentsbody.style.display = "block";
  gallerybody.style.display = "block";
  feedbackbody.style.display = "block";
  buybody.style.display = "none";
  homenav.classList.remove("active");
  flavoursnav.classList.remove("active");
  jokesnav.classList.remove("active");
  commentsnav.classList.remove("active");
  gallerynav.classList.remove("active");
  feedbacknav.classList.add("active");
}

function buy() {
  var homenav = document.getElementById("home-nav");
  var flavoursnav = document.getElementById("flavours-nav");
  var jokesnav = document.getElementById("jokes-nav");
  var commentsnav = document.getElementById("comments-nav");
  var gallerynav = document.getElementById("gallery-nav");
  var feedbacknav = document.getElementById("feedback-nav");
  var buybody = document.getElementById("buybody");
  var homebody = document.getElementById("home");
  var flavoursbody = document.getElementById("flavours");
  var jokesbody = document.getElementById("jokes");
  var commentsbody = document.getElementById("comments");
  var gallerybody = document.getElementById("gallery");
  var feedbackbody = document.getElementById("feedback");

  homebody.style.display = "none";
  flavoursbody.style.display = "none";
  jokesbody.style.display = "none";
  commentsbody.style.display = "none";
  gallerybody.style.display = "none";
  feedbackbody.style.display = "none";
  homenav.classList.remove("active");
  flavoursnav.classList.remove("active");
  jokesnav.classList.remove("active");
  commentsnav.classList.remove("active");
  gallerynav.classList.remove("active");
  feedbacknav.classList.remove("active");
  buybody.style.display = "block";
}
