const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
        correctAnswer: "A"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Terra", "Júpiter", "Saturno", "Netuno"],
        correctAnswer: "B"
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        options: ["Miguel de Cervantes", "Machado de Assis", "Jorge Amado", "Carlos Drummond de Andrade"],
        correctAnswer: "A"
    },
    {
        question: "Quantos continentes existem no mundo?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "C"
    },
    {
        question: "Qual é o metal mais abundante na crosta terrestre?",
        options: ["Ferro", "Alumínio", "Cobre", "Zinco"],
        correctAnswer: "B"
    },
    {
        question: "Quem foi o primeiro presidente do Brasil?",
        options: ["Juscelino Kubitschek", "Getúlio Vargas", "Deodoro da Fonseca", "Dom Pedro II"],
        correctAnswer: "C"
    },
    {
        question: "Qual o nome do cientista que desenvolveu a teoria da relatividade?",
        options: ["Isaac Newton", "Galileu Galilei", "Albert Einstein", "Nikola Tesla"],
        correctAnswer: "C"
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Atlântico", "Índico", "Pacífico", "Ártico"],
        correctAnswer: "C"
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Michelangelo", "Leonardo da Vinci", "Van Gogh", "Pablo Picasso"],
        correctAnswer: "B"
    },
    {
        question: "Qual é o país mais populoso do mundo?",
        options: ["Índia", "China", "Estados Unidos", "Brasil"],
        correctAnswer: "B"
    },
    {
        question: "Em que ano ocorreu a independência do Brasil?",
        options: ["1808", "1822", "1889", "1910"],
        correctAnswer: "B"
    },
    {
        question: "Qual é o elemento químico representado pelo símbolo 'O'?",
        options: ["Ouro", "Oxigênio", "Prata", "Ósmio"],
        correctAnswer: "B"
    },
    {
        question: "Qual é o maior deserto do mundo?",
        options: ["Saara", "Gobi", "Antártico", "Kalahari"],
        correctAnswer: "C"
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

