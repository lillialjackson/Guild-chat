# GuildChatClient

This is a simple realtime chat messenger built with angular, typeScript, primeng, and firebase.
## To Demo Project

Fork project
Install npm
Run npm i in the root project folder
Run ng serve 

## Project Description

I chose to use angular 7 with primng to be able to efficiently put togther a chat UI. I chose to use firebase for my realtime database, as it is lightweight and fast and could provide the quick message view updates and listen for stream changes. I also chose firebase since it is a google product and has a lot of documentation and support, since it was my first time using it.

## Past Projects

Prior to building this simple chat messenger, I had built a group chat feature for my portfolio app, Alpha for Beta, using React and the Chatkit API. You can try this chat messenger [here] (https://lillialjackson.github.io/alpha3/). When you login, give my heroku server a second to wake up :). I wanted to use Firebase this time so I could have greater control and flexibility in the long run. Chatkit has a great console and is very easy to implement, but you are limited to their setup. 

## Future Iterations and Changes

In the future, I would like to add to this app. I thought it could be fun to implement the [GiphyApi] (https://developers.giphy.com). I would also like to try using something like [Socket.io] (https://socket.io) to create a realtime connection to a database of my chosing, perhaps monogDb for this app. I would also like to try and implement it as a [Flutter] (https://flutter.dev) app.

If I had more time to work on it/possible future effort, I would add more testing to the project. Angular comes with Jasmine and Karma installed and a few basic tests for each component, but I would like to add testing especially around the message service and the integration with firebase. I would also like to add some UI touches, such as scrolling to the bottom automatically when a new message appears and some general aesthetic improvements, as well as user authentication and registration.

## Things to note 

The firebase database is currently in test mode, since there is no user authentication implemented at this time. Normally I would encrypt my environment files using [git-crypt] (https://www.agwa.name/projects/git-crypt) so that my API keys for firebase are not visible in the repo, but I wanted them to be easily accessible for review purposes. 



## Running tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

