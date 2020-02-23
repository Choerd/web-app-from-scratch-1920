# Web App: Quizmaster

## Table of Contents
* [Assignment](#Assignment)
* [Concept](#Concept)
* [Install notes](#Install-notes)
* [Features](#Features)
* [API](#API)
* [Data transformation and manipulation](#Data-transformation-and-manipulation)
* [Actor diagram](#Actor-diagram)
* [Interaction diagram](#Interaction-diagram)
* [Credits](#Credits)

<hr>

## Assignment
In this course you will learn to build a web application without frameworks or unnecessary libraries, but with vanilla HTML, CSS & JavaScript as much as possible. The end result is a modular, single page web app (SPA). Data will be retrieved from an external API of your choice, manipulated and finally shown in the UI of the App. You will learn different ways to structure code and develope your own coding style. With the gained knowledge you will be able to build interactive prototypes, based on real data. Also you will gain a better understanding of the how API's, frameworks and libraries work.
> Bron: https://github.com/cmda-minor-web/web-app-from-scratch-1920

<hr>

## Concept
I made a game with data from the Trivia Open Database API. It's a game where you get a random question with four answers, one of them is correct the others are wrong. After 10 questions you get to see your result and you will be able to get more information about the correct answers. This will be possible because the good answers are used in the Wikipedia API which returns the information about that subject to the user.

<img alt="Schermafbeelding 2020-02-04 om 15 56 22" src="https://user-images.githubusercontent.com/45365598/73755834-f45a0d00-4766-11ea-87ef-8f2234a89881.png">

<hr>

## Install notes
Clone the repository on your computer 

`https://github.com/Choerd/web-app-from-scratch-1920.git`

Open the file in a code editor and use a live preview or host the code with Github Pages

<hr>

## Features
**Smart solution for data from Wikipedia**
When the user has finished the game, all the correct answers are passed in a function which extracts data from Wikipedia. This can be done around 10 times a hour, which is a problem when the user wants to get all the information about every answer or when the user plays the game twice a hour.

A smart solution for this problem is when the game is finished, the data will be fetched once and will be put in the LocalStorage. When the user switches from detailpage to overviewpage the data will not be fetched every time but when it has already been fetched the data from the LocalStorage will be used.

* This method of re-using data fixes the problem where the user has 10 fetches per hour

<hr>

## API
This application uses two API's:
* Trivia Open Database (https://opentdb.com/)
* Wikipedia API (https://nl.wikipedia.org/wiki/API)  

**Trivia Open Database**  
This API is very easy to use because you can choose:
* Amount of questions
* Category
* Difficulty
* Multiple choice or true/false  

Depending on your preferences you can determain how your data will look like. I've choosen for 10 question in any category on any difficulty with multiple choice. When I fetch my data, it looks like this: 

```javascript
(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0:
category: "Geography"
type: "multiple"
difficulty: "medium"
question: "The Japanese district Akihabara is also known by what nickname?"
correct_answer: "Electric Town"
incorrect_answers: Array(3)
0: "Moon Walk River"
1: "Otaku Central "
2: "Big Eyes"
```

<hr>

**Wikipedia API**  
This API was very hard to use because there were endless posiblities to get some data. You can choose from a list of hunderds of parameters. I've choosen to work with the summary of each subject. When I fetch my data, it looks like this:

```javascript
(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {-1: {…}}
1:
pageid: 34754
ns: 0
title: "1979"
extract: "1979 (MCMLXXIX) was a common year starting on Monday of the Gregorian calendar, the 1979th year of the Common Era (CE) and Anno Domini (AD) designations, the 979th  year of the 2nd millennium, the 79th  year of the 20th century, and the  10th  and last year of the 1970s decade."
2: {34601: {…}}
3: {-1: {…}}
4: {33658: {…}}
5: {2989912: {…}}
6: {14226471: {…}}
7: {155627: {…}}
8: {-1: {…}}
9: {-1: {…}}
```

<hr>

## Data transformation and manipulation

## Actor diagram
<img alt="Schermafbeelding 2020-02-10 om 11 56 06" src="https://user-images.githubusercontent.com/45365598/74144150-7ed5bd00-4bfc-11ea-85f3-49d91e843faa.png">

## Interaction diagram
**Playing the game** 
<img alt="Schermafbeelding 2020-02-14 om 00 32 21" src="https://user-images.githubusercontent.com/45365598/74488162-a8733a80-4ec1-11ea-8852-2967bc6693f0.png">

**Checking the results**
<img alt="Schermafbeelding 2020-02-14 om 00 32 27" src="https://user-images.githubusercontent.com/45365598/74488193-b88b1a00-4ec1-11ea-960d-c110396bc37d.png">


## Credits

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
