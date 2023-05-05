const supportUkraine = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: null,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: null,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: null,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: null,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: null,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: null,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: null,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: null,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: null,
  },
];

const olEl = document.querySelector('.ol');
const bntEl = document.querySelector('.support_Ukraine_bnt');

function renderList(supportUkraine) {
  const mappedArray = supportUkraine
    .map(({ title, url }) => {
      return `<li><a href="${url}" target="_blank"><p> ${title}</p></a></li>`;
    })
    .join(' ');
  olEl.innerHTML = mappedArray;
}

renderList(supportUkraine);

let offset = 0;
bntEl.addEventListener('click', onClickBnt);
function onClickBnt() {
  offset += 32;
  if (offset > 128) {
    offset = 0;
  }
  olEl.style.bottom = offset + 'px';
}
