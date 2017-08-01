/* GT Coding Bootcamp: LIRI (not SIRI, but good enough for Android)
 * - takes three commands
 * - returns different results based on the commands
 */


/* Below are the node modules we need to make LIRI work correctly
 * these are from the NPM site
 */

// var rqt = require('request'); //request
// var twt = require('twitter'); //twitter
// var spy = require('spotify'); //spotify
var inq = require('inquirer');//inquire (to make the app dope)

/* let's grab the keys from the hidden file and
 * establish an action variable that changes based on the input
 */
// var twtKeys = require("./keys");
var tweets = require("./tweets");
var movies = require("./movies");
var songs = require("./spotify");

// var userAct; it makes more sense to define the userAct 

/**
 * ask the question that will determine which action to take
 */

inq.prompt([

  /* here are the LIRI commands:
   * 01) `my-tweets`
   * 02) `spotify-this-song`
   * 03) `movie-this`
   * 04) `do-what-it-says`
   */
  
    {
        type    : "list",
        message : "Hello, user. What would you like me to do??",
        choices : ["Fetch My Tweets:", "Spotify This Song:", "Remember This Movie:", "Do As It Says;"],
        name    : "commands"
    },
  
  ]).then(function(answers){

        var input = answers.commands;
        console.log(input);

        switch(input){

            case "Fetch My Tweets:":
                console.log("")
                var userAct = new tweets()
                userAct.twtGrab()
                break;

            case "Spotify This Song:":
                console.log("")
                var userAct = new songs()
                userAct.songGrab()
                break;

            case "Remember This Movie:":
                console.log("")
                var userAct = new movies()
                userAct.movieGrab()
                break;

            case "Do As It Says;":
                console.log("")
                console.log("not as it does")
                break;

            default:
                console.log("")
                console.log("That's not a selection")
                break;
       }
  });