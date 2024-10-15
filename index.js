const session = require('express-session');
const express = require('express');
const app = express();
const port = 3000;
const { getQuestion, isCorrectAnswer, getMathStreak } = require('./utils/mathUtilities');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(express.static('public')); // To serve static files (e.g., CSS)

app.use(session({
    secret: 'quizsecret',
    resave: false,
    saveUninitialized: true
}));


//Some routes required for full functionality are missing here. Only get routes should be required
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/leaderboards', (req, res) => {
    res.render('leaderboards');
});

app.get('/quiz', (req, res) => {
    const mathQuiz = getQuestion();
    req.session.mathQuiz = mathQuiz;
    res.render('quiz',{mathQuiz:mathQuiz});
});

app.get('/incorrect', (req, res) =>{
    res.render('incorrect');
});

app.get('/correct', (req, res) =>{
    const currentStreak = getMathStreak();
    res.render('correct', {currentStreak});
});

//Handles quiz submissions.
app.post('/quiz', (req, res) => {
    const { answer } = req.body;
    const mathQuiz = req.session.mathQuiz;

    let correctAnswer = isCorrectAnswer(answer, mathQuiz)
    if (correctAnswer.correctAnswer ===false){
        res.redirect('/incorrect');
    }else{
        res.redirect('/correct');
    }

    //answer will contain the value the user entered on the quiz page
    //Logic must be added here to check if the answer is correct, then track the streak and redirect properly
    //By default we'll just redirect to the homepage again.
});

module.exports = {
    mathQuiz
}

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});