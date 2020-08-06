let or
let order_detail
let order

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
})
  var sidebar = new GeminiScrollbar({
  element: document.querySelector('.wrapper')
}).create();


// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "AIzaSyAqR1X8nkyjrfmwIbX_WI0BLe04Q7ujOns",
  authDomain: "katarasa-80252.firebaseapp.com",
  databaseURL: "https://katarasa-80252.firebaseio.com",
  projectId: "katarasa-80252",
  storageBucket: "katarasa-80252.appspot.com",
  messagingSenderId: "88868693622",
  appId: "1:88868693622:web:36525ebcf6889d01c7e157",
  measurementId: "G-2MNPBT0SC8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

db.collection("Stock").doc("original")
    .onSnapshot(function(doc) {
        ori = doc.data();
        console.log(ori['Jumlah']);
        document.getElementById('originalstock').innerHTML = 'Jumlah yang tersisa: ' + ori['Jumlah'];
    });
db.collection('order_number_generator').doc('numbers')
    .onSnapshot(function(doc) {
      ord = doc.data()
      order = ord['order']
      order_detail = ord ['orderdetail']
    });

function buyoriginalb() {
  let i = 1
  let qty = document.getElementById('originalinput').value;
  console.log(qty)
  let jumlahs = ori - qty;
  console.log(jumlahs)
  console.log(ori)
  let alamat = document.getElementById('addressinput').value;
  let nama = document.getElementById('nameinput').value;
  let nmr = document.getElementById('numberinput').value;
  let orderp = order += 1
  let orderdp = order_detail += 1

  db.collection("Stock").doc('original').set({
    Rasa: "Original",
    Jumlah: jumlahs
  })

  db.collection("order").add({
    Address: alamat,
    ID: order,
    Name: nama,
    Phone: nmr
  })

  db.collection('order_detail').add({
    detailid: order,
    orderid: order,
    quantity: qty,
    rasaprojectId: "Original / 1"
  })

  db.collection('order_number_generator').doc('numbers').set({
    order: orderp,
    orderdetail: orderdp
  })
}

// doesn't matter
// var token = 'your access token',
//     username = 'rudrastyh', // rudrastyh - my username :)
//     num_photos = 4;
 
// $.ajax({ // the first ajax request returns the ID of user rudrastyh
//   url: 'https://api.instagram.com/v1/users/search',
//   dataType: 'jsonp',
//   type: 'GET',
//   data: {access_token: token, q: username}, // actually it is just the search by username
//   success: function(data){
//     console.log(data);
//     $.ajax({
//       url: 'https://api.instagram.com/v1/users/' + data.data[0].id + '/media/recent', // specify the ID of the first found user
//       dataType: 'jsonp',
//       type: 'GET',
//       data: {access_token: token, count: num_photos},
//       success: function(data2){
//         console.log(data2);
//         for(x in data2.data){
//           $('ul').append('<li><img src="'+data2.data[x].images.thumbnail.url+'"></li>');  
//         }
//           },
//       error: function(data2){
//         console.log(data2);
//       }
//     });
//   },
//   error: function(data){
//     console.log(data);
//   }
// });

function changeLanguage() {
  if (document.getElementById('language').innerHTML === 'ID') {
    document.getElementById('language').innerHTML = 'EN';
    document.getElementById('home-nav').innerHTML = 'Home';
    document.getElementById('flavours-nav').innerHTML = 'Flavours';
    document.getElementById('jokes-nav').innerHTML = 'Wise Words';
    document.getElementById('comments-nav').innerHTML = 'Review';
    document.getElementById('gallery-nav').innerHTML = 'Gallery';
    document.getElementById('feedback-nav').innerHTML = 'Feedback';
    document.getElementById('paragraph').innerHTML = 'Cassava chips from Indonesia';
    document.getElementById('buy-btn-body').innerHTML = 'Buy Now';
    document.getElementById('flavours-header').innerHTML = 'Flavours';
    document.getElementById('original-meta').innerHTML = 'Available';
    document.getElementById('original-description').innerHTML = 'Crunchy, but a little bit salty.';
    document.getElementById('sambalado-meta').innerHTML = 'Available';
    document.getElementById('sambalado-description').innerHTML = "It's spicy, but has a little bit of an orange flavour.";
    document.getElementById('keju-unyu-meta').innerHTML = "Available";
    document.getElementById('keju-unyu-description').innerHTML = "Sweet, but a little bit salty.";
    document.getElementById('cabe-gledek-meta').innerHTML = "Available";
    document.getElementById('cabe-gledek-description').innerHTML = "Just spicy.";
    document.getElementById('jokes-header').innerHTML = "Wise Words";
    document.getElementById('wise-words-1').innerHTML = "Don't be scared to be fat.<br>More fat, equals more weight,<br>more hard to be kidnapped.<br>To stay save eat a lot.";
    document.getElementById('comments-1').innerHTML = "The chips are delicious!";
    document.getElementById('comments-2').innerHTML = "The chips are delicious, I'm gonna buy more.";
    document.getElementById('gallery-header').innerHTML = "Gallery";
    document.getElementById('feedback-header').innerHTML = "Feedback";
    document.getElementById('name-header').innerHTML = "Name";
    document.getElementById('name-label').innerHTML = "Name";
    document.getElementById('review-header').innerHTML = "Review";
    document.getElementById('review-label').innerHTML = "Review";
    document.getElementById('send-button').innerHTML = "Send";
    document.getElementById('buy-header').innerHTML = "Buy Now";
    document.getElementById('buy-original').innerHTML = "Buy Now";
    document.getElementById('buy-sambalado').innerHTML = "Buy Now";
    document.getElementById('buy-btn-nav').innerHTML = "Buy Now";
  } else {
    location.reload();
  }
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
  homenav.style.display = 'none';
  flavoursnav.style.display = 'none';
  jokesnav.style.display = 'none';
  commentsnav.style.display = 'none';
  gallerynav.style.display = 'none';
  feedbacknav.style.display = 'none';
  document.getElementById('buy-btn-nav-secondary').style.display = 'block';
  document.getElementById('buy-btn-nav').style.display = 'none';
}

function buynone() {
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
  homenav.classList.add("active");
  flavoursnav.classList.remove("active");
  jokesnav.classList.remove("active");
  commentsnav.classList.remove("active");
  gallerynav.classList.remove("active");
  feedbacknav.classList.remove("active");
  buybody.style.display = "none";
  homenav.style.display = 'block';
  flavoursnav.style.display = 'block';
  jokesnav.style.display = 'block';
  commentsnav.style.display = 'block';
  gallerynav.style.display = 'block';
  feedbacknav.style.display = 'block';
  location.href = '#home';
  document.getElementById('buy-btn-nav-secondary').style.display = 'none';
  document.getElementById('buy-btn-nav').style.display = 'block';
}
document.getElementById('buybody').style.display = "none";
document.getElementById('buy-btn-nav-secondary').style.display = 'none';
document.getElementById('buybodyoriginal').style.display = 'none';

function buyoriginal() {
  document.getElementById('buybody').style.display = 'none';
  document.getElementById('buybodyoriginal').style.display = 'block';
}