const questions = [
    {
        question: "Qual é o nome do personagem principal de 'Star Wars'?",
        options: ["Luke Skywalker", "Han Solo", "Darth Vader", "Yoda"],
        correctAnswer: "A"
    },
    {
        question: "Quem interpretou o personagem 'Jack Sparrow' em 'Piratas do Caribe'?",
        options: ["Johnny Depp", "Orlando Bloom", "Tom Hanks", "Brad Pitt"],
        correctAnswer: "A"
    },
    {
        question: "Qual série de TV popular tem uma escola chamada 'Hogwarts'?",
        options: ["Game of Thrones", "Stranger Things", "Breaking Bad", "Harry Potter"],
        correctAnswer: "D"
    },
    {
        question: "Qual cantor é conhecido como o 'Rei do Pop'?",
        options: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"],
        correctAnswer: "B"
    },
    {
        question: "Qual foi o primeiro filme do Marvel Cinematic Universe (MCU)?",
        options: ["Iron Man", "Thor", "Captain America", "The Avengers"],
        correctAnswer: "A"
    },
    {
        question: "Qual é o nome da famosa franquia de filmes sobre um parque de dinossauros?",
        options: ["Jurassic Park", "King Kong", "The Lost World", "Planet of the Apes"],
        correctAnswer: "A"
    },
    {
        question: "Qual é o nome do super-herói alter ego de Bruce Wayne?",
        options: ["Superman", "Spiderman", "Batman", "Iron Man"],
        correctAnswer: "C"
    },
    {
        question: "Quem escreveu a série de livros 'Game of Thrones'?",
        options: ["J.K. Rowling", "George R.R. Martin", "Stephen King", "J.R.R. Tolkien"],
        correctAnswer: "B"
    },
    {
        question: "Qual filme ganhou o Oscar de Melhor Filme em 1994?",
        options: ["Forrest Gump", "Titanic", "The Shawshank Redemption", "Pulp Fiction"],
        correctAnswer: "A"
    },
    {
        question: "Quem é o líder dos Vingadores nos filmes da Marvel?",
        options: ["Thor", "Hulk", "Iron Man", "Captain America"],
        correctAnswer: "D"
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
