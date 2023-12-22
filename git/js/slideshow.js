var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var current=0; //슬라이드 번호를 저장할 변수

showSlides(current); //현재 이미지 표시
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n) {   //n번째 슬라이드 이미지를 화면에 표시하는 함수. n이 0이면 1번째 이미지
    for(var i=0 ; i<slides.length ; i++) {
        slides[i].style.display = "none"; //모든 이미지를 화면에서 감춤
    }
    slides[n].style.display = "block" //n번째 이미지 표시
}


    function prevSlide() { //이전 이미지로  넘어가는 함수
    if(current > 0) { //current가 0보다 크면 -1
        current -= 1;
    }
    else {
        current = slides.length - 1; //0이면 마지막 위치로
    }
        showSlides(current);
    }



    function nextSlide() { //다음 이미지로 넘어가는 함수
        if(current < slides.length -1 ) {  //current가 2보다 작으면 +1
            current += 1;
        }
        else{
            current = 0;
        }
 
    showSlides(current); //이동한 위치의 이미지 표시
   }