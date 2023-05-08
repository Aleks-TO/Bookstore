const refs = {
    theme: document.querySelector('#toggler-1'),
    body: document.querySelector('body'),
    logo: document.querySelector('.logo'),
}

console.log(refs.theme);

let isDarkTheme = false;

refs.theme.addEventListener('change', updateTheme);

function updateTheme(e){
    console.log('click');
    e.preventDefault();
    localStorage.removeItem("isDarkTheme");

    if (refs.theme.checked === true){
        isDarkTheme = true;
        document.body.classList.add('dark-theme');
        console.log(refs.logo.firstElementChild);
        refs.logo.firstElementChild.src=`./src/images/icons-img/logo-white.png`;
    } else {
        isDarkTheme = false;
        document.body.classList.remove('dark-theme');
        refs.logo.firstElementChild.src=`./src/images/icons-img/logo.png`;

    }
    localStorage.setItem("isDarkTheme", `${isDarkTheme}`);

}

