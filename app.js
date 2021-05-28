/*var arr = ["w", "a", "s", "d", "j", "k", "l"];

for(var i = 0; i < arr.length; i++){
    document.querySelector('.' + arr[i] + '.drum').addEventListener('click', setClicked);
}

for(var i = 0; i < document.querySelectorAll('button').length; i++){
    document.querySelectorAll('button')[i].addEventListener('click', setClicked);
}*/

var btns = document.querySelectorAll('.drum');
// 반복문을 사용해 모든 버튼에 이벤트 연결
for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click',setHandleClick);
    btns[i].addEventListener('mouseout',setOut);
}

// 현재 화면(index.html) document에 키보드 이벤트 추가
document.addEventListener('keypress', setKeyClick);

function setHandleClick(){
    var audio = "";
    this.style.color = "white";

    setDrumPlay(this.textContent);
}

function setOut(){
    this.style.color = "#DA0463";
}

// 키보드이벤트에 이벤트객체(매개변수)의 key값으로 어떤키인지 확인
function setKeyClick(event){
    setDrumPlay(event.key);
}

function setDrumPlay(input){
    switch(input){
        case 'w' : 
            audio = new Audio('./sounds/tom-1.mp3');
            break;
        case 'a' : 
            audio = new Audio('./sounds/tom-2.mp3');
            break;
        case 's' : 
            audio = new Audio('./sounds/tom-3.mp3');
            break; 
        case 'd' : 
            audio = new Audio('./sounds/tom-4.mp3');
            break; 
        case 'j' : 
            audio = new Audio('./sounds/snare.mp3');
            break; 
        case 'k' : 
            audio = new Audio('./sounds/crash.mp3');
            break; 
        case 'l' : 
            audio = new Audio('./sounds/kick-bass.mp3');
            break;
        default:
            return ;    
    }
    setAnimationDrum(input);
    audio.play();
}

function setAnimationDrum(key){
    // 키값이 입력값의 버튼을 선택
    var el = document.querySelector('.'+key+'.drum');
    el.classList.add('pressed');
   el.style.color = "white";
    // 일정 시간 이후에 다시 클래스 pressed를 제거한다.
    setTimeout(function(){
        el.style.color = "#DA0463";
        el.classList.remove('pressed');
    },100);
}