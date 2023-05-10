import saveTheChildren from '../images/icons-img/save-the-children.png';
import projectHope from '../images/icons-img/project-hope.png';
import u24 from '../images/icons-img/united24.png';
import internationalMedicalCorps from '../images/icons-img/international-medical-corps.png';
import medicinsSansFrontieres from '../images/icons-img/medecins-sans-fronteres.png';
import razomForUkraine from '../images/icons-img/razom.png';
import actionAgainstHunger from '../images/icons-img/action-against-hunger.png';
import worldVision from '../images/icons-img/world-vision.png';
import serhiyPrytulaCharityFoundation from '../images/icons-img/sergiy-prytula.png';
const supportUkraine = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',

    img: `${saveTheChildren}`,

  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: `${projectHope}`,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: `${u24}`,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: `${internationalMedicalCorps}`,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: `${medicinsSansFrontieres}`,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: `${razomForUkraine}`,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: `${actionAgainstHunger}`,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: `${worldVision}`,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: `${serhiyPrytulaCharityFoundation}`,
  },
];

const olEl = document.querySelector('.support_Ukraine_ol');
const bntEl = document.querySelector('.support_Ukraine_bnt');

let offset = 0;

function renderList(supportUkraine) {
  const mappedArray = supportUkraine
    .map(({ title, url, img }) => {
      return `<li class='support_Ukraine_list_ol'><a href="${url}" target="_blank"><span class='support_Ukraine_num '>01</span><img
            src="${img}"
            alt="${title}"
            class="support__img"
          /></a></li>`;
    })
    .join(' ');
  olEl.innerHTML = mappedArray;
}

renderList(supportUkraine);

bntEl.addEventListener('click', onClickBnt);
function onClickBnt() {
  offset += 52;
  if (offset > 280 && screen.availWidth <= 375) {
    offset = 0;
  } else if (offset > 180 && screen.availWidth > 375) {
    offset = 0;
  }
  olEl.style.bottom = offset + 'px';
}

const spanEl = document.querySelectorAll('.support_Ukraine_num ');

function createOlList() {
  spanEl.forEach((el, i) => {
    const num = i + 1;
    // console.log(num);
    el.textContent = '0' + num;
  });
}

createOlList();
