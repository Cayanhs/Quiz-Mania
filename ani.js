const questions = [
    {
        question: "Qual é o nome do protagonista de 'Naruto'?",
        options: ["Naruto Uzumaki", "Sasuke Uchiha", "Kakashi Hatake", "Iruka Umino"],
        correctAnswer: "A"
    },
    {
        question: "Qual é o nome do anime que gira em torno de um garoto com uma espada chamada 'Zangetsu'?",
        options: ["Bleach", "One Piece", "Dragon Ball", "Attack on Titan"],
        correctAnswer: "A"
    },
    {
        question: "Qual é o nome do anime que possui um personagem chamado Luffy?",
        options: ["One Piece", "Naruto", "Death Note", "Fullmetal Alchemist"],
        correctAnswer: "A"
    },
    {
        question: "Em 'Dragon Ball', quem é o maior inimigo de Goku?",
        options: ["Frieza", "Cell", "Majin Buu", "Vegeta"],
        correctAnswer: "A"
    },
    {
        question: "Qual é o anime com o personagem principal chamado Light Yagami?",
        options: ["Death Note", "Attack on Titan", "Tokyo Ghoul", "Naruto"],
        correctAnswer: "A"
    },
    {
        question: "Em qual anime aparece o personagem chamado Edward Elric?",
        options: ["Fullmetal Alchemist", "Bleach", "One Piece", "Demon Slayer"],
        correctAnswer: "A"
    },
    {
        question: "Qual é o nome do protagonista de 'Attack on Titan'?",
        options: ["Eren Yeager", "Levi Ackerman", "Mikasa Ackerman", "Armin Arlert"],
        correctAnswer: "A"
    },
    {
        question: "Quem é o criador do anime 'One Piece'?",
        options: ["Masashi Kishimoto", "Eiichiro Oda", "Hajime Isayama", "Yoshihiro Togashi"],
        correctAnswer: "B"
    },
    {
        question: "Qual é o nome do anime onde existe um demônio chamado Nezuko?",
        options: ["Demon Slayer", "Tokyo Ghoul", "Naruto", "Bleach"],
        correctAnswer: "A"
    },
    {
        question: "Qual é o anime em que o personagem principal se chama Gon Freecss?",
        options: ["Hunter x Hunter", "One Piece", "Naruto", "Fullmetal Alchemist"],
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
