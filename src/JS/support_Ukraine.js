const supportUkraine = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: './images/icons-img/save-the-children.svg',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: './images/icons-img/project-hope.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: './images/icons-img/united24.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: './images/icons-img/international-medical-corps.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: './images/icons-img/medecins-sans-fronteres.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: './images/icons-img/razom.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: './images/icons-img/action-against-hunger.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: './images/icons-img/world-vision.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: './images/icons-img/sergiy-prytula.png',
  },
];

const olEl = document.querySelector('.ol');
const bntEl = document.querySelector('.support_Ukraine_bnt');

function renderList(supportUkraine) {
  const mappedArray = supportUkraine
    .map(({ title, url, img }) => {
      return `<li><a href="${url}" target="_blank"><img
            src="${img}"
            alt="${title}"
            class="support__img"
          /></a></li>`;
    })
    .join(' ');
  olEl.innerHTML = mappedArray;
}

renderList(supportUkraine);

let offset = 0;
bntEl.addEventListener('click', onClickBnt);
function onClickBnt() {
  offset += 56;
  if (offset > 280 && screen.availWidth <= 375) {
    offset = 0;
  } else if (offset > 180 && screen.availWidth > 375) {
    offset = 0;
  }
  olEl.style.bottom = offset + 'px';
}
