let img = document.getElementById('img');
let currentIndex = 0;
let maxIndex = ["asset/img/slider__vong.png", "asset/img/slide__nhan-bac.png", "asset/img/slider__bongtai1.png", "asset/img/slider__daychuyen.png"]

function bannerLeft() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = maxIndex.length - 1;
  }
  img.src = maxIndex[currentIndex];
}

function bannerRight() {
  currentIndex++;
  if (currentIndex == maxIndex.length) {
    currentIndex = 0;
  }
  img.src = maxIndex[currentIndex];
}


