const { mathQuiz } = require('./../index.js');

/**
 * Gets a random multiplication, division, subtraction or addition question
 * 
 * @returns {} The randomly generated math question
 */

let mathStreak = 0;
function getMathStreak() {
    return mathStreak;
  }

function getQuestion() {
    const firstNumber = Math.floor(Math.random() * 50);
    const secondNumber = Math.floor(Math.random() * 50);
    let operator = ["+","-","*","/"]
    let pickedOperator = operator[Math.floor(Math.random() *operator.length)];
    let question = `${firstNumber} ${pickedOperator} ${secondNumber}`
    let questionAnswer
    switch(pickedOperator) {
        case'+':
            questionAnswer = firstNumber + secondNumber;
            break
        case'-':
            questionAnswer = firstNumber - secondNumber;
            break
        case'/':
            questionAnswer = firstNumber / secondNumber;
            break
        case'*':
            questionAnswer = firstNumber * secondNumber;
            break
        }
        return {
           quizQuestion: question, quizAnswer: questionAnswer
        }
}

/**
 * Parses the provided question and gets whether or not the provided answer is correct
 * 
 * @param {*} question The question being answered
 * @param {*} answer The potential answer
 * @returns {boolean} True if the answer was correct, false otherwise.
 */
function isCorrectAnswer(question, answer) {
    if (answer != mathQuiz.quizAnswer){
        console.log(`Incorrect Answer! Correct Answer Was: ${mathQuiz.quizAnswer}!`);
        currentStreak = 0;
        console.log(currentStreak)
        return { currentStreak: currentStreak }
    }   else {
            console.log(`Correct Answer!`);
            currentStreak += 1;
            console.log(currentStreak)
    }
}

module.exports = {
    getQuestion,
    isCorrectAnswer,
    getMathStreak
}