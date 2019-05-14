# [PokéSoul](https://pokesoul.herokuapp.com/)

A simple management system for the popular Soul Link Pokémon challenge.
This website will look at all the pairs you give it, and show you the
teams you can create that satisfy the rules of the challenge. The system
is optimized to maximize total base stat total for both player's parties.

For the rules of the challenge see
[here](https://www.deviantart.com/nuzlockefamily/journal/Soul-Link-Randomized-Nuzlocke-511651842).
The main challenge this site addresses is finding the best party that
satisfies the rules for both players at any given time.

Soul Links can be initalized and the data will be stored and loaded from your
local storage allowing for easy continuation. A sharable link can also be made so
you can easily share your experience with your friends.

# Usage

* Create a new Soul Link on the main page, or load one in from a shared link.
* Add all of your pairs in
* Click 'Generate Parties' to see your top 10 reccomended teams.

# Tips
* For best team predictions make sure both Pokémon are in their fully evolved form
* If you add the wrong Pokémon by mistake, just flag it as fainted
* Dont worry if you close your browser, your Soul Link is saved locally
* Loading a Soul Link from a shared link or starting a new one will overwrite your current one

# Get Started

This was initialized with [Create-React-App](https://github.com/facebook/create-react-app), so
these steps may be familiar:

* Clone the repository
* cd into the cloned folder
* Execute `npm install` to install dependencies
* Execute `npm start` to start the development server
