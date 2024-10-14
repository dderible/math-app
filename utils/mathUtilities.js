/**
 * Gets a random multiplication, division, subtraction or addition question
 * 
 * @returns {} The randomly generated math question
 */
function getQuestion() {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
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
    return false;
}

module.exports = {
    getQuestion,
    isCorrectAnswer
}