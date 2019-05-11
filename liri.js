//grabbing needed packages 
require("dotenv").config();
const axios = require("axios");
const moment = require('moment');
const Spotify = require('node-spotify-api');
const fs = require("fs");

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

//creating variables 
let tasker = process.argv[2];
let argument = process.argv.slice(3).join(" ");



// conditional statement that will run function you want, otherwise erorr message is given 
if (tasker === "concert-this") {

    bands();

} else if (tasker === "movie-this") {

    if (argument !== "") {

        movies();
    } else {

        argument = "Mr.Nobody";
        movies();
    }


} else if (tasker === "spotify-this-song") {

    if (argument !== "") {

        songify(); 
    } else {

        argument = "The Sign";
        songify(); 
    }

} else if (tasker === "do-what-it-says") {

    doit(); 

} else {
    console.log("Oops! Liri does not recognize this command!");
}





//function to find band concernt venues 
function bands() {

    let bandQuery = "https://rest.bandsintown.com/artists/" + argument + "/events?app_id=codingbootcamp"

    //console.log(bandQuery);  

    axios.get(bandQuery).then(
        function (response) {


            console.log("Venue name: ", response.data[0].venue.name);
            console.log(`Venue Location: ${response.data[0].venue.city}, ${response.data[0].venue.country} `);
            console.log("Date of event: ", moment(response.data[0].datetime).format("MM/DD/YY"));
        }
    );

};

//function to find movies 

function movies() {

    let movieQuery = "http://www.omdbapi.com/?t=" + argument + "&y=&plot=short&apikey=trilogy";

    axios.get(movieQuery).then(
        function (response) {

            console.log(`Movie Title: ${response.data.Title}`);
            console.log("Release Year: " + response.data.Year);
            console.log(`IMDB Rating: ${response.data.imdbRating}`);
            console.log(`Rotten Tomato Score: ${response.data.Ratings[1].Value}`);
            console.log(`Production Location: ${response.data.Country}`);
            console.log(`Movie Language: ${response.data.Language}`);
            console.log(`Movie Plot: ${response.data.Plot}`);
            console.log(`Notable Cast: ${response.data.Actors}`);
        }
    );


}

//function to find song info

function songify() {

    spotify.search({ type: 'track', query: argument }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(`Artist Name: ${data.tracks.items[0].artists[0].name}`);
        console.log(`Song:  ${data.tracks.items[0].name}`); 
        console.log(`Song Preview: ${data.tracks.items[0].preview_url}`); 
        console.log(`Album: ${data.tracks.items[0].album.name}`); 
    });


}; 
//Do what liri says function 
function doit() {

    fs.readFile("random.txt", "utf8", function(error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
          return console.log(error);
        }
      
        // We will then print the contents of data
        console.log(data);
      
        
      
      });
      
}; 