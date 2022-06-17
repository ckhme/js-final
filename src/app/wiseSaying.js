const wiseSayings = {
  lists : [
        {
            sentence : "삶이 있는 한 희망은 있다.",
            author : "키케로"
        },
        {
            sentence : "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.",
            author : "제임스 딘"
        },
        {
            sentence : "한번의 실패와 영원한 실패를 혼동하지 마라",
            author : "F.스콧 핏제랄드"
        },
        {
            sentence : "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
            author : "키케엘사 맥스웰"
        },
        {
            sentence : "산다는 것 그것은 치열한 전투이다.",
            author : "로망로랑"
        },
        {
            sentence : "1퍼센트의 가능성, 그것이 나의 길이다.",
            author : "나폴레옹"
        },
        {
            sentence : "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
            author : "괴테"
        },
        {
            sentence : "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
            author : "톰 모나건"
        },

    ]
}

const wiseSayingsRandomNum = Math.floor(Math.random() * wiseSayings.lists.length);
const sentence = document.querySelector("#sentence");
const auth = document.querySelector("#auth");

sentence.innerText = wiseSayings.lists[wiseSayingsRandomNum].sentence;
auth.innerText =`- ${ wiseSayings.lists[wiseSayingsRandomNum].author}`;