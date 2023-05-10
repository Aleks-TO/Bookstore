import closeBtnWhite from '../images/icons-img/x-close-white.png';
import logoWhite from '../images/icons-img/logo-white.png';
import amazonLogoWhite from '../images/icons-img/amazon-white.png';

import closeBtnDark from '../images/bookModal/Icon_Close_24.png';
import logoDark from '../images/icons-img/logo.png';
import amazonLogoDark from '../images/icons-img/amazon.png';

const refs = {
  theme: document.querySelector('#toggler-1'),
  body: document.querySelector('body'),
  logo: document.querySelector('#logo'),
  closeBtn: document.querySelector('#close-btn'),
  amazonIcon: document.querySelector('.imgIcon'),
};

let isDarkTheme = false;

function isThemeSaved() {
  try {
    let currentTheme = localStorage.getItem('isDarkTheme');
    if (currentTheme === null) {
      return;
    }
    if (currentTheme === 'true') {
      isDarkTheme = true;
      document.body.classList.add('dark-theme');
      refs.theme.setAttribute('checked', 'true');

      // білі іконки
      refs.closeBtn.src = `${closeBtnWhite}`;
      refs.logo.src = `${logoWhite}`;
      refs.amazonIcon.src = `${amazonLogoWhite}`;
    }
  } catch (error) {
    console.log('error for dark theme switcher', error);
  }
}

isThemeSaved();

refs.theme.addEventListener('change', updateTheme);

function updateTheme(e) {
  e.preventDefault();
  localStorage.removeItem('isDarkTheme');

  if (refs.theme.checked === true) {
    isDarkTheme = true;
    document.body.classList.add('dark-theme');

    // білі іконки на темну тему
    refs.closeBtn.src = `${closeBtnWhite}`;
    refs.logo.src = `${logoWhite}`;
    refs.amazonIcon.src = `${amazonLogoWhite}`;

  } else {
    isDarkTheme = false;
    document.body.classList.remove('dark-theme');
    
    // темні іконки
    refs.closeBtn.src = `${closeBtnDark}`;
    refs.logo.src = `${logoDark}`;
    refs.amazonIcon.src = `${amazonLogoDark}`;


  }
  console.log(('isDarkTheme: ', `${isDarkTheme}`));
  localStorage.setItem('isDarkTheme', `${isDarkTheme}`);
}
