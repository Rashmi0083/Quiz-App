const quizDB = [
    {
        question : "Q1. WHat is the fullform of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question : "Q2. WHat is the fullform of CSS?",
        a: "Cartoon Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Style Sheep",
        d: "Cascading Super Sheets",
        ans: "ans2"
    },
    {
        question : "Q3. WHat is the fullform of HTTP?",
        a: "HyperText Transfer Product",
        b: "HyperText Test Protocol",
        c: "Hey Transfer Protocol",
        d: "HyperText Transfer Protocol",
        ans: "ans4"
    },
    {
        question : "Q4. WHat is the fullform of JS?",
        a: "JavaScript",
        b: "Java Sheet",
        c: "Java Syntax",
        d: "Just Script",
        ans: "ans1"
    },

]

const h = document.querySelector('.question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const submit = document.querySelector('#submit')

const answers = document.querySelectorAll('.answer')
const showScore = document.querySelector('#showScore')
let questionCount = 0 
function loadQuestion()
{
    const questionList = quizDB[questionCount]
    h.innerHTML = questionList.question
    option1.innerHTML = questionList.a
    option2.innerHTML = questionList.b
    option3.innerHTML = questionList.c
    option4.innerHTML = questionList.d
    
}

loadQuestion();

const getCheckAnswer = () =>
{
    let answer 
    
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked)
        {
            answer = curAnsElem.id
        }
    });
    return answer;
};

let score = 0
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer === quizDB[questionCount].ans)
    {
        score++
    }
    
    questionCount++ ;
    
    if(questionCount < quizDB.length)
    {
        loadQuestion();
    }
    else
    {
        showScore.innerHTML = 
        `<h3>You scored ${score}/ ${quizDB.length}  ✌️</h3>
        <button class= "btn" onclick = "location.reload()"> </button>
         `;
        
        showScore.classList.remove('scoreArea')
    }

});