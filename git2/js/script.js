window.onload = function() {
    current = 0;
    showSlides();

    let modal = document.querySelector("#modalWrap");
    let notone = document.querySelector('.notice > ul > li:first-child');
    let btn = document.querySelector(".btn");
    notone.onclick = function() {
        modal.style.display = 'block';
    }
    btn.onclick = function() {
        modal.style.display = 'none';
    }
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