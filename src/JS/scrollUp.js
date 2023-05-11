const refs = {
    scrollUpBtn: document.querySelector('#scrollUpBtn'),
}
let pageHeight = window.innerHeight*0.2;

window.onscroll = function() {scrollFunction()};
refs.scrollUpBtn.addEventListener('click', onScrollUpClick);

function scrollFunction() {
    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
        refs.scrollUpBtn.style.display = "block";
    } else {
        refs.scrollUpBtn.style.display = "none";
    }
  }


function onScrollUpClick (e){
    e.preventDefault();
    console.log('onScrollUpClick');

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}