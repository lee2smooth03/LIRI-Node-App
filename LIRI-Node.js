/* GT Coding Bootcamp: LIRI (not SIRI, but good enough for Android)
 *
 * 
 * Below are the node modules we need to make LIRI work correctly
 */

var rqt = require('request'); //request
var twt = require('twitter'); //twitter
var spy = require('spotify'); //spotify
var inq = require('inquirer');//inquire to make the app dope

/* let's grab the keys from the other file
 * 
 */
var twtKeys = require("./keys");
/* console.log(twtKeys.twitterKeys); */

/* below is the request variable
 * it takes in a string (website) and a function
 */

rqt('http://www.google.com', function (error, response, body) {
  if(error){
    /* */
    console.log('error:', error);									                // Print the error if one occurred 
    console.log('statusCode:', response && response.statusCode);	// Print the response status code if a response was received 
  }
  else{
    console.log('body:'); //, body);                              // Print the HTML for the site 
  }							                    
});

inq.prompt([

  /* here are the LIRI commands:
   * 01) `my-tweets`
   * 02) `spotify-this-song`
   * 03) `movie-this`
   * 04) `do-what-it-says`
   */
  
    {
        type    : "list",
        message : "What would you like me to do??",
        choices : ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"],
        name    : "commands"
    },
  
  ]).then(function(selection){

      switch(selection){

          case "my-tweets":
            console.log("log my tweets")
            break;

          case "spotify-this-song":
            console.log("spotify this song")
            break;

          case "movie-this":
            console.log("find this movie")
            break;

          case "do-what-it-says":
            console.log("do as I say")
            break;

          default:
            console.log("That's not a selection");
        }
  });