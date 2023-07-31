# 04 Web APIs: Code Quiz

## Task

This was my biggest and very first in depth javascript project. I can say this was a bit challenging , but 
very informative in the process of building this quiz. I used a variety of  functions, event listeners and if statements to add interactivity in this quiz. I wanted this quiz to be a fun experience to the user. This quiz is intended to get users or players to answer as many questions as they can before the clock is out of time. Each time the player answers incorrectly, 10 seconds are subtracted from their time, which they get 60 seconds. Each score is saved in an array that I saved in a variable to keep track of players high scores. As you can see I wasn't able to figure out how to reset my input form, so that the name in the placeholder clears after input.  Only players that input their credentials, will be saved under high score names. one of my biggest challenges was to remember to define objects and variables before using them inside my functions. I think another issue I had was trying to grab elements that were nested inside parent elements. Currently I am still making changes to the quiz and making it more accessible and responsive. I will be adding in a high score link, so that players can click the link and be able to see different players scores. Temporarily, I have players names stored in a variable names "highScoreNames". The user can open the console and declare the variable to see the list of high scores. Security reasons, I would like to learn how to make the quiz more secure, so that not just anyone can enter the console and change variables, code, or scores! Overall, this project has taught me alot of javascript's terminology such as sytax rules, framework, programming, debugging, and how much it brings life to html and css. 

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

## Mock-Up

![Alt text](Assets/04-web-apis-homework-demo.gif)