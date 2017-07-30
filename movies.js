"use strict"
/* use this file to retrieve movie information from the OMDB site
 * requires the request and inquirer packages
 */

var rqt = require('request');   //request
var ask = require('inquirer');  //inquire (to make the app dope)

/* let's grab the keys from the hidden file and
 * establish an action variable that changes based on the input
 */

function WhatMovie(){

    this.movieGrab = function(){

        /** when this function runs, information is retrieved below */
        ask.prompt([
            {
                /** ask the user about the account they want to search */
                type    :"input",
                message :"\nWhat's the name of that movie you're asking for?",
                name    :"movieTitle"
            }
        ]).then(function(ans)
            {
                /** store the user's input as a variable to use in the OMDB search */
                var Title = ans["movieTitle"];

                /** below are the tools we use build our OMDB API calls */
                var myKey = "40e9cece";

                var OMDBreq = "http://www.omdbapi.com/?apikey=" + myKey + "&t=" + Title;
                // var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json&apikey=40e9cece";


                rqt(OMDBreq, function (error, response, body) {
                    if(!error){
                        
                        var obj;

                        /** in the case of no error */
                        console.log('statusCode:', response.statusCode);

                        /** prints the HTML for the page */                        
                        // console.log(body);

                        /** the return object needs to be parsed because it's returned a JSON object */
                        obj = JSON.parse(body);

                        console.log("Yes, I remember that movie:");
                        console.log(obj.Title);
                        console.log("");

                        console.log("I believe it came out this year:");
                        console.log(obj.Year);
                        console.log("");
                        
                        console.log("And it starred:");
                        console.log(obj.Actors);
                        console.log("");

                        console.log("Here's a simplified plot:");
                        console.log(obj.Plot);
                        console.log("");

                        console.log("Movie ratings per few critics...");
                        console.log("IMDB:")
                        console.log(obj.imdbRating);
                        console.log("");
                        console.log("Rotten Tomatoes:")
                        console.log(obj.Ratings[1].Value);
                        console.log("");                                                 
                        
                        console.log("Country & Language:")
                        console.log(obj.Country + "," + obj.Language);
                        console.log("");   

                    }
                    else{

                        /** print the error if one occurred */
                        console.log('error:', error);
                    }

                }); // request call here

            }); // .then promise

    };  // movieGrab method

};  // WhatMovie

module.exports = WhatMovie;