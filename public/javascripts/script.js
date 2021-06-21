//mobile menu

const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});

//SELECTORS
const storeName = document.querySelector(".input");
const storeReview = document.querySelector(".textarea");
const storeRestaurantName = document.querySelector(".restaurantChoices");
const button = document.querySelector(".button");
const reviews = document.querySelector(".reviews");
const reviewList = document.querySelector(".reviewList");
const reviewInput = document.getElementById("reviewInputText");
var giggleBtn = document.getElementById("jokeBtn")
var jokeInput = document.querySelector(".jokeInput");
var listElement = document.createElement("li");
var listOfReviews;

//EVENT LISTENERS 
getSearchHistoryFromLocalStorage();
renderSearchHistoryResults();

button.addEventListener("click", function (event) {
  event.preventDefault();
  listOfReviews.push(reviewInput.value);
  localStorage.setItem("review", JSON.stringify(listOfReviews));
  renderSearchHistoryResults();
});

//LOCAL STORAGE FUNCTIONS
function getSearchHistoryFromLocalStorage() {
  var reviewSearchHistory = JSON.parse(localStorage.getItem("review"));
  if (!reviewSearchHistory) {
    // checking to see if anything exsists in local storage
    listOfReviews = [];
  } else {
    listOfReviews = reviewSearchHistory;
  }
}

function renderSearchHistoryResults() {
  reviewList.innerHTML = "";
  for (let index = 0; index < listOfReviews.length; index++) {
    const review = listOfReviews[index];
    var listElement = document.createElement("li");
    listElement.textContent = review;
    reviewList.appendChild(listElement);
  }
}

//2nd API
function getApi() {var requestUrl = "https://v2.jokeapi.dev/joke/Miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
console.log(requestUrl)
fetch(requestUrl)
.then(function (response) {
 console.log(response)
 return response.json();

})
.then(function(data) {
 console.log(data)
 console.log(data.joke)
var joke = data.joke;
jokeInput.innerHTML = joke;
})
}

 getApi()

// MAP API
// function initMap() {
//   var myLatLng = { lat: -31.9523, lng: 115.8613 };
//   var map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 11,
//     center: myLatLng,
//   });

//   //Marker Locations 
//   //Mason Mill
//   var iconMason = new google.maps.InfoWindow({
//     content: "<p>Masonmill Cafe, 40 Masonmill Rd, Carmel WA 6076</p>",
//   });
//   var markerIconMason = new google.maps.Marker({
//     position: {lat:-32.0250 , lng:116.0721},
//     map,
//   });
//   markerIconMason.addListener("click", () => {
//     iconMason.open(map, markerIconMason);
//   });
//   //Zamia Cafe
//   var iconZamia = new google.maps.InfoWindow({
//     content: "<p>Zamia Cafe, 50 May Dr, West Perth WA 6005</p>",
//   });
//   var markerIconZamia = new google.maps.Marker({
//     position: {lat:-31.9660 , lng:115.8220},
//     map,
//   });
//   markerIconZamia.addListener("click", () => {
//     iconZamia.open(map, markerIconZamia);
//   });
//     //300 Acres
//     var icon300Acres = new google.maps.InfoWindow({
//       content: "<p>300 Acres Restaurant and Bar, 200 The Blvd, Wembley Downs WA 6014</p>",
//     });
//    var markerIcon300Acres = new google.maps.Marker({
//       position: {lat:-31.9256 , lng:115.7775},
//       map,
//       title: "Cambridge Food Court",
//     });
//     markerIcon300Acres.addListener("click", () => {
//       icon300Acres.open(map, markerIcon300Acres);
//     });
//       //Cambridge Food Court
//       var iconCambridge = new google.maps.InfoWindow({
//         content: "<p>Cambridge Food Court, 350 Cambridge St, Wembley WA 6014</p>",
//       });
//   var markerIconCambridge = new google.maps.Marker({
//     position: {lat:-31.9402 , lng:115.8098},
//     map,
//     title: "Cambridge Food Court",
//   });
//   markerIconCambridge.addListener("click", () => {
//     iconCambridge.open(map, markerIconCambridge);
//   });
//      //Carine Glades
//      var iconCarine = new google.maps.InfoWindow({
//       content: "<p>Carine Glades Tavern, 493 Beach Rd, Duncraig WA 6023</p>",
//     });
//      var markerIconCarine = new google.maps.Marker({
//       position: {lat:31.8453 , lng:115.7875},
//       map,
//       title: "Carine Glades Tavern",
//     });
//     markerIconCarine.addListener("click", () => {
//       iconCarine.open(map, markerIconCarine);
//     });
//     //Crooked Carrot
//     var iconCrookedCarrot = new google.maps.InfoWindow({
//       content: "<p>Crooked Carrot, Forrest Hwy &, Rigg Rd, Myalup WA 6220</p>",
//     });
//    var markerIconCrookedCarrot = new google.maps.Marker({
//       position: {lat:-33.0946 , lng:115.7288},
//       map,
//       title: "Crooked Carrot",
//     });
//     markerIconCrookedCarrot.addListener("click", () => {
//       iconCrookedCarrot.open(map, markerIconCrookedCarrot);
//     });
//       //Golden Spur
//       var iconGoldenSpur = new google.maps.InfoWindow({
//         content: "<p>Golden Spur, 7 Mandurah Terrace, Mandurah WA 6210</p>",
//       });
//  var markerIconGoldenSpur = new google.maps.Marker({
//     position: {lat:-32.5341 , lng:115.7186},
//     map,
//     title: "Golden Spur",
//   });
//   markerIconGoldenSpur.addListener("click", () => {
//     iconGoldenSpur.open(map, markerIconGoldenSpur);
//   });
//     //Siena's Leederville
//     var iconSiena = new google.maps.InfoWindow({
//       content: "<p>Siena's, 115 Oxford St, Leederville WA 6007</p>",
//     });
//     var markerIconSiena = new google.maps.Marker({
//       position: {lat:-31.9377 , lng:115.8411},
//       map,
//       title: "Siena's",
//     });
//     markerIconSiena.addListener("click", () => {
//       iconSiena.open(map, markerIconSiena);
//     });
//       //Sticky Beaks
//       var iconWindow = new google.maps.InfoWindow({
//         content: '<p>Sticky Beaks, 37 Kings Park Rd, Kings Park WA 6005</p>',
//       });
//   var markerIcon = new google.maps.Marker({
//     position: {lat:-31.9533 , lng:115.8377},
//     map,
//     title: "Sticky Beaks",
//   });
//   markerIcon.addListener("click", () => {
//     iconWindow.open(map, markerIcon);
//   });
//     //Quarter Acre
//     var infowindow = new google.maps.InfoWindow({
//       content: '<p>The Quarter Acre, 767 Canning Hwy, Applecross WA 6153</p>',
//     });
//     var marker = new google.maps.Marker({
//       position: {lat:-32.0210 , lng:115.8332},
//       map,
//       title: "Quarter Acre",
//     });
//     marker.addListener("click", () => {
//       infowindow.open(map, marker);
//     });
// }

