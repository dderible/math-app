

/**
 * Gets a random multiplication, division, subtraction or addition question
 * 
 * @returns {} The randomly generated math question
 */

let mathStreak = 0;
function getMathStreak() {
    return mathStreak
  };

function addToBoard(mathStreak){
    let leaderboard = [];
    let leaderBoardAdd = {
        mathStreak: mathStreak,
    };

    if (leaderboard.length < 10) {
        // leaderboard has less than 10 items just add the new score directly
        leaderboard.push(scoreToAdd);
    } else {
        let lowestStreak = Math.min(...leaderboard.map(entry => entry.mathStreak));
        if (mathStreak > lowestStreak) {
            let lowestIndex = leaderboard.findIndex(entry => entry.mathStreak === lowestStreak);
            leaderboard[lowestIndex] = scoreToAdd;
        } else {
            console.log("You can do better than that! Try Again?");
        }
    }

    leaderboard.sort((a, b) => b.currentStreak - a.currentStreak);
    
    leaderboard.splice(10); 

    console.log(leaderboard);
};

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
function isCorrectAnswer(mathQuiz, answer) {
    if (answer != mathQuiz.quizAnswer){
        console.log(`Incorrect Answer! Correct Answer Was: ${mathQuiz.quizAnswer}!`);
        addToBoard(mathStreak)
        currentStreak = 0;
        console.log(mathStreak)
        return { theTruth: false, mathStreak: mathStreak }
    }   else {
            console.log(`Correct Answer!`);
            mathStreak += 1;
            addToBoard(mathStreak)
            console.log(mathStreak)
            return { theTruth: true, currentStreak: currentStreak };
    }
}

module.exports = {
    getQuestion,
    isCorrectAnswer,
    getMathStreak,
    addToBoard
}