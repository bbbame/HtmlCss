window.onload = function() {
    current = 0;
    showSlides();
}

function showSlides() {
let imgSlide = document.querySelector('.imgSlide');
let img = imgSlide.getElementsByTagName('a');
for(let i=0 ; i < img.length ; i++) {
    img[i].style.display = 'none'; //이미지 전부 감춤
}
current++;
if(current > img.length) { //3보다 크면 1로 돌아감
    current = 1;
}
img[current - 1].style.display='block';
setTimeout(showSlides, 3000);
}