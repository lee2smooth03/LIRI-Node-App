"use strict"
/* use this file to retrieve movie information from the OMDB site
 * requires the request and inquirer packages
 */

var spy = require('spotify');   //spotify
var ask = require('inquirer');  //inquire (to make the app dope)

// id: "34e84d93de6a4650815e5420e0361fd3",
// secret: "5162cd8b5cf940f48702dffe096c2acb"

function GetMusic(){

    this.songGrab = function(){

        ask.prompt([
            {
                type    :"list",
                message :"\nHow would you like to seach for this song?",
                choices :["Artist", "Album", "Track"],
                name    :"searchParam"
            }, 
            {
                type    :"input",
                message :function(answer){

                        // console.log(answer);
                        // console.log(answer["searchParam"]);

                        switch(answer["searchParam"]){

                            case "Artist":
                                // console.log("this works")
                                return "Which artist do you want to hear?";

                            case "Album":
                                // console.log("that works")
                                return "What album? I hope it's a classic... ";

                            case "Track":
                                // console.log("it works")
                                return "Give me a good song we can ride to: ";

                            default:
                                console.log("it's all broken")
                                break;

                        }   // switch

                },
                name    :"songSearch"
            }]).then(function(ans){

                /** create variables that store the search type and term */
                var typ = ans["searchParam"];
                var trm = ans["songSearch"];

                console.log("");
                console.log("Here's what I found:");
                console.log(trm);

                console.log("");
                console.log("You need special permission to listen")

                spy.id      = "34e84d93de6a4650815e5420e0361fd3";
                spy.secret  = "5162cd8b5cf940f48702dffe096c2acb";

                spy.search({ type: typ, query: trm }, function(err, data)
                {
                    if ( err ) {
                        console.log('Error occurred: ' + err);
                        return;
                    }
                    else{
                        // console.log(data);
                    }
                    // Do something with 'data' 
                });                

            });  // .then function        

    }

}   // GetMusic()

module.exports = GetMusic;