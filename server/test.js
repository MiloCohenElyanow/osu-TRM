//this is going to be the tester file for the osu api.

//this script will test multiple assets from the api to make sure they all work and will function on its own.

//base url:  https://osu.ppy.sh/api/[version]/  
// in this case we will use v2 since v1 is depreciated 
// -https://osu.ppy.sh/api/v2/

// Client ID: 21334
// Client Secret: Rr0KuWEfhrtL1svoMfLMFcr29fzNL5Iu9asJooap

// calls will be made with axios
//


// https://osu.ppy.sh/oauth/authorize
//this get req will provide user with their auth token for our app to run with their auth token! callback should maybe work automaticly ?


//EXAMPLES


// GET https://osu.ppy.sh/oauth/authorize
/*Example request:
curl --request GET \
    --get "https://osu.ppy.sh/oauth/authorize?client_id=1&redirect_uri=http%3A%2F%2Flocalhost%3A4000&res
*/


//POST https://osu.ppy.sh/oauth/token
/*Example request:
curl --request POST \
    "https://osu.ppy.sh/oauth/token" \
    --header "Accept: application/json" \
    --header "Content-Type: application/x-www-form-urlencoded" \
    --data "client_id=1&client_secret=clientsecret&code=receivedcode&grant_type=authorization_code&red
*/

// POST https://osu.ppy.sh/oauth/token
/*Example request:
curl --request POST \
    "https://osu.ppy.sh/oauth/token" \
    --header "Accept: application/json" \
    --header "Content-Type: application/x-www-form-urlencoded" \
    --data "client_id=1&client_secret=clientsecret&grant_type=refresh_token&refresh_token=longstring&sco*/


//     /beatmaps/{beatmap}
// this gets beatmap by beatmap id, since all beatmap ids are just number strings we should be able to generate lots of beatmap ids completely randomly





const axios = require("axios").default;


