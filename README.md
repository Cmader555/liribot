# liribot 

### Project Overview
Liri is meant to be like SIRI. Like SIRI, Liri takes in commands and produces data. Liri is command line node application that takes in commands in the terminal and then executes them via node. The commands for Liri were created via JavaScript and the following commands are recognized: 

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

### How Liri Works 

Like stated before Liri's are created using javascript but executed using Node. Package.JSON was initialized so third party npm packages could be installed. Node Modules was initialized for the storage of all the files that allow all third party packages to properly run. Dotenv was installed to create environmental variables that are stored in a global object. Node_modules, .env, DS_store are all kept in gitignore so they are not uploaded to github to keep keys private, and so unnecessarily large files are not uploaded.  The Axios and Spotify API packages allow for API calls to be preformed. 



# concert-this

### How it Works

* The concert this command allows you to search for concert venues, locations, and dates for your favorite band. 

* inside of the terminal command line run node, and then type in the concert command, and the artist you want search results for. 
    * node liri.js concert-this Muse


### Example: 


