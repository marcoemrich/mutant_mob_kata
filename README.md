# Mutant Mob attacks TicTacToe Kata

# Purpose
This kata is designed for learning to use striker to improve a legacy code base.

# Goal
Kill all the 36 mutants by writing tests/specs

# Requirements
Just Node.JS and an internet connection.

# Do the Kata
Remember to do an ```npm i``` first.

Start the jest watcher in one terminal (```npm test```) and run stryker in a different one (```npm run stryker```). Open reports/mutation/html/index.html in a browser. Click on __tic_tac_toe.js__ to the see the mutants. Start adding specs to tic_tac_toe.js to kill the mutants. Keep the jest watcher running and restart Stryker after every new spec - also reload the report in the browser.

# More things to do
The implementation code could be improved - a lot :)
Refactor it and add the missing feature.

# Background
This kata has been extracted from my **JS Testing 2019** workshop (see https://www.codecentric.de/wissen/schulung/javascript-testing-2019/). It was designed for mob programming - hence the title.