const quizData = [
    {
        question : "What does purr mean?",
        a: "animal coat",
        b: "cats sound",
        c: "fealing",
        d: "farting sound",
        correct: "b"
    },
    {
        question : "What is the name of the creater of bookmark",
        a: "John",
        b: "Book",
        c: "Bendjamin",
        d: "Mark",
        correct: "d"
    },
    {
        question : "The meaning of a sound is",
        a: "healthy",
        b: "loud",
        c: "a plant",
        d: "a part of a car",
        correct: "a"
    },
    {
        question : "Mearning of a sandwich is",
        a: "sand wich is in a desert",
        b: "sneeze",
        c: "food",
        d: "special witch",
        correct: "c"
    },
    {
        question : "What does a mearning of a Lesson ",
        a: "french name",
        b: "period of learning",
        c: "german name",
        d: "spanich last name",
        correct: "b"
    },
    {
        question : "what does the second stand for",
        a: "part of an hour",
        b: "more then one",
        c: "twins",
        d: "number at a line",
        correct: "d"
    },
    
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

    function loadQuiz() {
        deselectAnswers()

        const currentQuizData = quizData[currentQuiz]

        questionEl.innerText = currentQuizData.question 
        a_text.innerText = currentQuizData.a
        b_text.innerText = currentQuizData.b
        c_text.innerText = currentQuizData.c
        d_text.innerText = currentQuizData.d
    }

    function deselectAnswers() {
        answerEls.forEach(answerEl => answerEl.checked = false)
    }

    function getSelected() {
        let answer

        answerEls.forEach(answerEl => {
            if(answerEl.checked) {
                answer = answerEl.id
            }
        })

        return answer
    
}
    submitBtn.addEventListener('click', () => {
        const answer = getSelected()

        if(answer) {
            if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML =
            `<h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>`
        }
    }
    })

