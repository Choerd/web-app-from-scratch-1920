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

<img alt="Schermafbeelding 2020-02-25 om 11 33 14" src="https://user-images.githubusercontent.com/45365598/75239231-a3b45d80-57c2-11ea-83fd-10540af18536.png">

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
**Trivia Open Database**    
`Transformation of the data`  
The Trivia API gave me a really nice formatted structure of the data. There was no transformation or manipulation needed before I could use the data. 

`How my data works inside the appilication`  
When the user starts the game a random question will be picked, the cards will be created and the data will be added. Every time the user picks a answer that question get's removed from the array and a new question will be picked and refill the cards with that data.

The answer that the user gave will be saved in the LocalStorage. This data will be used later on the application to create the overviewpage.

**Wikipedia API**  
`Transformation of the data`  
The Wikipedia API gives back really nice data if you use the right way to fetch the data. Because there are unlimited ways to do this I found it very hard to get the right data. Because the data I finally got was clean I didn't need to clean it.

`Empty values`  
When the pageid of the object is `-1` there is no data available of that keyword. There will be no detailpage for that question.

`How my data works inside the appilication`  
When the user ends the game and clicks on 'Check my results' the correct answers of all the questions will be used to fetch data from Wikipedia. When all the results are fetched the overviewpage will render. When the clicks on a question the title and the extract about that subject will show up on the detailpage.

`Amount of API calls per hour`  
Because the Wikpedia API gives the user only around 10 calls per hour the data will be stored in LocalStorage when the user loads the overviewpage for the first time. When the user navigates between detailpages and the overviewpage the data doens't have to be fetched over and over again but will be taken from the LocalStorage.

<hr>

## Actor diagram
<img alt="Schermafbeelding 2020-02-25 om 11 22 18" src="https://user-images.githubusercontent.com/45365598/75238451-4d92ea80-57c1-11ea-992d-224c9ac8adae.png">

## Interaction diagram
**Playing the game**   
When the user starts the game 10 random Trivia's will be fetched from the Trivia API. When that's done the cards are rendered with the data. If the user clicks on a answer this answer will be saved and put into LocalStorage. A new question will be picked and the cards will rerender. This happens over and over again until there are no more questions left, then the "Check results"-viewport will appear.
<img alt="Schermafbeelding 2020-02-25 om 11 22 32" src="https://user-images.githubusercontent.com/45365598/75238486-5c799d00-57c1-11ea-8cb2-ca9b3cf9e5c5.png">

**After the game**  
When the user clicks on "Check results" the data of all the correct answers will be fetched with the Wikipedia API. When this is done the data will be stored in LocalStorage. Then the data will be used to render the scoreboard. When the user wants more information about a specific answer he can navigate to the detailpage. When the user wants to go back the data will be pulled from LocalStorage instead of fetching the data again.
<img alt="Schermafbeelding 2020-02-25 om 11 22 37" src="https://user-images.githubusercontent.com/45365598/75238511-69968c00-57c1-11ea-809b-a4e2f14d1d80.png">


## Credits                                                           