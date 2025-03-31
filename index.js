let togglers = document.querySelectorAll('.toggle');
let answerBoxes = document.querySelectorAll('.answer');

togglers.forEach((toggler, index) => {
  toggler.addEventListener('click', () => {
    if (answerBoxes[index].style.display === 'block') {
      hideDetail(toggler, answerBoxes[index]);
    } else {
      showDetail(toggler, answerBoxes[index]);
    }
  });
});

function showDetail(toggler, answerBox) {
  toggler.src = './assets/images/icon-minus.svg';
  answerBox.style.display = 'block';
}
function hideDetail(toggler, answerBox) {
  toggler.src = './assets/images/icon-plus.svg';
  answerBox.style.display = 'none';
}
