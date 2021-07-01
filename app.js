const quiz = [
  {
    question: '最初の人間は誰？',
    answers: [ 'エバ', 'アダム', 'ユダ', 'サタン'],
    correct: 'アダム'
  }, {
    question: '終わりの日はいつは始まった？',
    answers: [ '2021', '1935', '1914', '1919'],
    correct: '1914'
  }, {
    question: '神の子の名は？',
    answers: [ 'アダム', 'モーセ', 'ヨセフ', 'イエス'],
    correct: 'イエス'
  }, {
    question: '神の名は？',
    answers: [ 'イエス', 'ダビデ', 'サタン', 'エホバ'],
    correct: 'エホバ'
  }, {
    question: '神の王国の王の人数は？',
     answers: [ '166000', '144000', '1200', '144001'],
     correct: '144001'
},{
  question: '最初の人間は誰？',
  answers: [ 'エバ', 'アダム', 'ユダ', 'サタン'],
  correct: 'アダム'
}, {
  question: '終わりの日はいつは始まった？',
  answers: [ '2021', '1935', '1914', '1919'],
  correct: '1914'
}, {
  question: '神の子の名は？',
  answers: [ 'アダム', 'モーセ', 'ヨセフ', 'イエス'],
  correct: 'イエス'
}, {
  question: '神の名は？',
  answers: [ 'イエス', 'ダビデ', 'サタン', 'エホバ'],
  correct: 'エホバ'
}, {
  question: '神の王国の王の人数は？',
   answers: [ '166000', '144000', '1200', '144001'],
   correct: '144001'
},{
  question: '最初の人間は誰？',
  answers: [ 'エバ', 'アダム', 'ユダ', 'サタン'],
  correct: 'アダム'
}, {
  question: '終わりの日はいつは始まった？',
  answers: [ '2021', '1935', '1914', '1919'],
  correct: '1914'
}, {
  question: '神の子の名は？',
  answers: [ 'アダム', 'モーセ', 'ヨセフ', 'イエス'],
  correct: 'イエス'
}, {
  question: '神の名は？',
  answers: [ 'イエス', 'ダビデ', 'サタン', 'エホバ'],
  correct: 'エホバ'
}, {
  question: '神の王国の王の人数は？',
   answers: [ '166000', '144000', '1200', '144001'],
   correct: '144001'
},{
  question: '最初の人間は誰？',
  answers: [ 'エバ', 'アダム', 'ユダ', 'サタン'],
  correct: 'アダム'
}, {
  question: '終わりの日はいつは始まった？',
  answers: [ '2021', '1935', '1914', '1919'],
  correct: '1914'
}, {
  question: '神の子の名は？',
  answers: [ 'アダム', 'モーセ', 'ヨセフ', 'イエス'],
  correct: 'イエス'
}, {
  question: '神の名は？',
  answers: [ 'イエス', 'ダビデ', 'サタン', 'エホバ'],
  correct: 'エホバ'
}, {
  question: '神の王国の王の人数は？',
   answers: [ '166000', '144000', '1200', '144001'],
   correct: '144001'
},{
question: '最初の人間は誰？',
answers: [ 'エバ', 'アダム', 'ユダ', 'サタン'],
correct: 'アダム'
}, {
question: '終わりの日はいつは始まった？',
answers: [ '2021', '1935', '1914', '1919'],
correct: '1914'
}, {
question: '神の子の名は？',
answers: [ 'アダム', 'モーセ', 'ヨセフ', 'イエス'],
correct: 'イエス'
}, {
question: '神の名は？',
answers: [ 'イエス', 'ダビデ', 'サタン', 'エホバ'],
correct: 'エホバ'
}, {
question: '神の王国の王の人数は？',
 answers: [ '166000', '144000', '1200', '144001'],
 correct: '144001'
},{
question: '最初の人間は誰？',
answers: [ 'エバ', 'アダム', 'ユダ', 'サタン'],
correct: 'アダム'
}, {
question: '終わりの日はいつは始まった？',
answers: [ '2021', '1935', '1914', '1919'],
correct: '1914'
}, {
question: '神の子の名は？',
answers: [ 'アダム', 'モーセ', 'ヨセフ', 'イエス'],
correct: 'イエス'
}, {
question: '神の名は？',
answers: [ 'イエス', 'ダビデ', 'サタン', 'エホバ'],
correct: 'エホバ'
}, {
question: '神の王国の王の人数は？',
 answers: [ '166000', '144000', '1200', '144001'],
 correct: '144001'
}
  ];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}