"use strict"
/* use this file to retrieve tweets from the any user's profile
 * require twitter's package
 */

var twt = require('twitter');   //twitter
var ask = require('inquirer');  //inquire (to make the app dope)

/* let's grab the keys from the hidden file and
 * establish an action variable that changes based on the input
 */
var twtKeys = require("./keys");
 
var client = new twt({
  consumer_key: twtKeys.twitterKeys["consumer_key"],
  consumer_secret: twtKeys.twitterKeys["consumer_secret"],
  access_token_key: twtKeys.twitterKeys["access_token_key"],
  access_token_secret: twtKeys.twitterKeys["access_token_secret"]
});

/** create a constructor whose only method is to get tweets */

function GrabTweets(){

    this.twtGrab = function(){

        /** when this function runs, information is retrieved below */
        ask.prompt([
            {
                /** ask the user about the account they want to search */
                type    :"input",
                message :"\nWhat's the Twitter handle you want to search?",
                name    :"twtHandle"
            },
            {
                /** give them a choice on how many tweets to pull  */
                type    :"list",
                message :"\nHow many Tweets are you looking to pull?",
                choices :["1", "5", "10", "20", "50", "100"],
                name    :"twtPulls"

            }]).then(function(ans){

                /** let the user know what's about to be printed: */
                console.log("\n\nHere are the last " + ans["twtPulls"] + " tweets from " + ans["twtHandle"] + ":" );
                console.log("chirp, chirp MF");
                // console.log(ans);

                var params = {
                        screen_name: ans["twtHandle"]
                    };

                client.get('statuses/user_timeline', params, function(error, tweets, response)
                {
                    if (!error) {
                        
                        for (var i = 0; i < parseInt(ans["twtPulls"]); i++){

                            console.log("");
                            console.log("");
                            console.log(tweets[i].created_at);
                            console.log(tweets[i].text);
                        }
                    }
                });

            }); //.then promise function

    }; //GrabTweets singular method

}; //GrabTweets constructor

module.exports = GrabTweets;