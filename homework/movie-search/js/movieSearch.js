// Setup
// ----------------------------------------------
// Elements
var searchBox = document.querySelector("form .search");
var searchBtn = document.querySelector("form button");
var form = document.querySelector("form");
var results = document.querySelector(".results")
var details = document.querySelector(".details")

var detailsTemplate = document.querySelector("#detailsTemplate");
var resultsTemplate = document.querySelector("#resultsTemplate");


// Structure
// ----------------------------------------------


// Events
// ----------------------------------------------
form.addEventListener('submit', getMovies);
results.addEventListener('click', getDetails);


// Event handlers
// ----------------------------------------------
function getMovies(event) {
	event.preventDefault();
	var search = searchBox.value;
	console.log(searchBox);
	var url = "http://www.omdbapi.com/?s=" + search;
	$.getJSON(url, updateMovies);
	searchBox.value='';
}

function getDetails(event) {
	// console.log(event.target.parentElement.id);
	// var targetId = event.target.parentElement.id;
	var url = "https://www.omdbapi.com/?i=" + event.target.parentElement.id;
	$.getJSON(url, updateDetails);
}


// Update page
// ------------------------------------
function updateMovies(json) {
	console.log('updateMovies',json);
	results.innerHTML = '';
	var templateFn = Handlebars.compile(resultsTemplate.innerHTML);
	results.innerHTML = templateFn(json);

}

function updateDetails(json) {
	console.log('updateDetails', json)
	details.innerHTML = '';
	var templateFn = Handlebars.compile(detailsTemplate.innerHTML);
	details.innerHTML = templateFn(json);
}

