    // // (2) 버튼 클릭 시 문장 바꾸기
    // function changeText() { // 바뀌는 함수
    //     const p = document.getElementById("text"); //const 변수
    // if (p.innerText === "동아사는 세계사랑 관련이 있다") {
    //     p.innerText = "Nice to meet you!";
    // } else {
    //     p.innerText = "Hello!";
    // }
    // }


    const quizData = [
    {
        question: "1. 율령 체제를 완성하고 다이호 율령을 반포한 일본의 시기는?",
        answer: "아스카 시대",
        explanation: "아스카 시대 말기인 701년에 다이호 율령이 반포되어 중앙 집권 체제가 강화되었습니다."
    },
    {
        question: "2. 명나라 시기, 전수교육과 지행합일을 강조한 유학 사상은?",
        answer: "양명학",
        explanation: "양명학은 성리학의 형식화를 비판하며 실천적 도덕성을 강조했습니다."
    },
    {
        question: "3. 17세기 전반, 여진족이 세운 나라로 훗날 국호를 청으로 바꾼 나라는?",
        answer: "후금",
        explanation: "누르하치가 세운 후금은 홍타이지 때 국호를 청으로 변경했습니다."
    },
    {
        question: "4. 청 말기 서양 문물을 받아들이려 했던 개혁 운동은?",
        answer: "양무운동",
        explanation: "‘중체서용’을 내세워 서양의 기술과 군사 제도를 도입하려 했다."
    },
    {
        question: "5. 중국 한나라 때 비단 무역을 통해 서역과 연결된 교통로는?",
        answer: "실크로드",
        explanation: "장건의 서역 파견 이후 비단을 중심으로 동서 교역이 활발해졌다."
    },{
        question: "6. 당나라 문화가 일본에 전해지는 데 큰 역할을 한 사절단은?",
        answer: "견당사",
        explanation: "일본은 견당사를 파견해 불교, 율령, 도시 제도 등을 받아들였다."
    },{
        question: "7. 조선에서 성리학을 국가 이념으로 확립하는 데 기여한 인물은?",
        answer: "정도전",
        explanation: "정도전은 불교를 비판하고 성리학 중심의 정치 체제를 마련했다."
    },{
        question: "8. 에도 막부의 쇄국 정책이 일본 사회에 끼친 장기적 영향으로 옳은 것은?",
        answer: "국내 상업과 도시 문화의 발달",
        explanation: "대외 팽창 대신 내부 경제와 문화가 성장했다."
    },{
        question: "9. 중국에서 불교가 본격적으로 전래된 시기는?",
        answer: "후한",
        explanation: "실크로드를 통해 불교가 전해졌다."
    },{
        question: "10. 일본 아스카 시대에 불교를 공인한 인물은?",
        answer: "쇼토쿠 태자",
        explanation: "불교를 보호하고 중앙 집권을 추진했다."
    },
];

let currentIdx = 0;

function checkAnswer() {
    const inputField = document.getElementById('answer-input');
    const userAnswer = inputField.value.trim();
    const wrongList = document.getElementById('wrong-answers');

    // 정답 체크 (공백 제거 및 일치 확인)
    if (userAnswer !== quizData[currentIdx].answer) {
        // 오답인 경우 리스트에 추가
        const li = document.createElement('li');
        li.className = 'wrong-item';
        li.innerHTML = `<strong>문제 ${currentIdx + 1} 오답:</strong> ${quizData[currentIdx].explanation}`;
        wrongList.appendChild(li);
    }

    // 다음 문제로 넘어가기
    currentIdx++;

    if (currentIdx < quizData.length) {
        displayQuestion();
        inputField.value = ""; // 입력창 초기화
    } else {
        document.getElementById('question-container').innerHTML = "<h3>퀴즈가 종료되었습니다! 아래 오답 노트를 확인하세요.</h3>";
    }
}

function displayQuestion() {
    document.getElementById('question').innerText = quizData[currentIdx].question;
}

// 첫 문제 실행
displayQuestion();