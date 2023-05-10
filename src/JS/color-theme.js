const refs = {
  theme: document.querySelector('#toggler-1'),
  body: document.querySelector('body'),
  logo: document.querySelector('.logo'),
};

let isDarkTheme = false;

function isThemeSaved (){
    try {
        let currentTheme = localStorage.getItem('isDarkTheme');
        console.log('currentTheme', currentTheme);
        if (currentTheme === null) {
          return;
        } if (currentTheme === 'true'){
          isDarkTheme = true;
          document.body.classList.add('dark-theme');
          refs.theme.setAttribute('checked', 'true');
          console.log('user selected a dark theme, changing button to checked');
      
        }
      } catch (error) {
        console.log('error for dark theme switcher', error);
      }
}

isThemeSaved ();


console.log(refs.theme);

refs.theme.addEventListener('change', updateTheme);

function updateTheme(e) {

    // isThemeSaved ();

  console.log('click');
  e.preventDefault();
  localStorage.removeItem('isDarkTheme');

  if (refs.theme.checked === true) {
    isDarkTheme = true;
    document.body.classList.add('dark-theme');
    console.log(refs.logo.firstElementChild);
    refs.logo.firstElementChild.src = `logo-white.17fec2eb.png`;
  } else {
    isDarkTheme = false;
    document.body.classList.remove('dark-theme');
    refs.logo.firstElementChild.src = `/logo.024aa838.png`;
    //src/images/icons-img/logo-white.png
  }
  localStorage.setItem('isDarkTheme', `${isDarkTheme}`);
}
