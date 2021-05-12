const signupPopup = document.querySelector('.signup-popup');
const close = document.querySelector('.close');
const btn = document.querySelector('.btn');

window.addEventListener('load', function () {
  showPopup();
});

function showPopup() {
  const timeLimit = 3;
  let i = 0;
  const timer = setInterval(function () {
    i++;
    if (i == timeLimit) {
      clearInterval(timer);
      signupPopup.classList.add('show');
    }
    console.log(i);
  }, 1000);
}

// close.addEventListener('click', function () {
//   signupPopup.classList.remove('show');
//   // signupPopup.style.display = 'none';
// });
btn.addEventListener('click', () => {
  signupPopup.classList.remove('show');
});
signupPopup.addEventListener('click', () => {
  signupPopup.classList.remove('show');
});
