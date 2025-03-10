const questions = [
    {
        question: "Qual é a capital da França?",
        options: ["Paris", "Londres", "Roma", "Madrid"],
        correctAnswer: "A"
    },
    {
        question: "Qual é o maior continente do mundo?",
        options: ["África", "Ásia", "América", "Europa"],
        correctAnswer: "B"
    },
    {
        question: "Qual é o maior país em área do mundo?",
        options: ["Rússia", "Canadá", "China", "Estados Unidos"],
        correctAnswer: "A"
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Atlântico", "Índico", "Pacífico", "Ártico"],
        correctAnswer: "C"
    },
    {
        question: "Quantos países fazem parte da União Europeia?",
        options: ["27", "28", "30", "25"],
        correctAnswer: "A"
    },
    {
        question: "Qual é a capital do Japão?",
        options: ["Tóquio", "Pequim", "Seul", "Bangcoc"],
        correctAnswer: "A"
    },
    {
        question: "Qual é o rio mais longo do mundo?",
        options: ["Rio Amazonas", "Rio Nilo", "Rio Yangtzé", "Rio Mississippi"],
        correctAnswer: "B"
    },
    {
        question: "Qual país é conhecido como 'Terra do Sol Nascente'?",
        options: ["China", "Japão", "Coreia do Sul", "Tailândia"],
        correctAnswer: "B"
    },
    {
        question: "Qual é o maior deserto do mundo?",
        options: ["Saara", "Gobi", "Antártico", "Kalahari"],
        correctAnswer: "C"
    },
    {
        question: "Onde está localizado o Monte Everest?",
        options: ["Nepal", "China", "Índia", "Paquistão"],
        correctAnswer: "A"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;
    const options = document.querySelectorAll(".option");
    questionData.options.forEach((option, index) => {
        options[index].innerText = option;
    });
    document.getElementById("feedback").innerText = "";
    document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const feedback = document.getElementById("feedback");

    if (selectedOption === correctAnswer) {
        feedback.innerText = "Correto!";
        score++;
    } else {
        feedback.innerText = "Errado!";
    }

    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").innerText = score;
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("quiz").style.display = "block";
    document.getElementById("score-container").style.display = "none";
    loadQuestion();
}

window.onload = loadQuestion;
