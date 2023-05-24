const quiz = [
{
    question:'好きな飲み物は？',
    answers: [
        '紅茶', 
        'コーヒー', 
        'ミルク', 
        'リンゴジュース'
    ],
    correct: 'コーヒー'
},{
    question:'好きな食べ物は？',
    answers: [
        'ラーメン', 
        'うどん', 
        'すき焼き', 
        'サムギョプサル'
    ],
    correct: 'サムギョプサル'
},{
    question:'これからの移住先は？',
    answers: [
        'メルボルン', 
        'パース', 
        'ブリスベン', 
        'タスマニア'
    ],
    correct: 'ブリスベン'
}

];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question ;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
        } else {
        window.alert('不正解！');
        }

        quizIndex++;

        if(quizIndex < quizLength){
            setupQuiz();
        } else {
            window.alert('おめでとう！正解数は'+score+ '/'+ quizLength + 'です！');
        }
};

$button[0].addEventListener('click', (e) => {
    clickHandler(e);
});

$button[1].addEventListener('click', (e) => {
    clickHandler(e);
});

$button[2].addEventListener('click', (e) => {
    clickHandler(e);
});

$button[3].addEventListener('click', (e) => {
    clickHandler(e);
});
