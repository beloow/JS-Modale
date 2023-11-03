// localisation du main 
const firstSection = document.getElementById('first');

const bodyTag = firstSection.parentElement;

// Récupéré la modale
const modal = document.getElementById("myModal");

// on rédupère le <span> du bouton X 
var btn = document.getElementsByClassName("close")[0];

// on fait apparaitre la modale au chargement
function modalOpen() {
  const insertModale = `
    <div id="myModal" class="modal">
      <div class="modal-content">
          <button class="close" id="close"> <i class="fa-solid fa-x"></i> </button>

          <h1>Titre du modale</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga est aspernatur natus, doloribus numquam.</p>
      </div>
    </div>
  `;
  bodyTag.insertAdjacentHTML('beforeend', insertModale);

  const para = document.getElementById("paragraphe");
  para.style.display = "none";
}

modalOpen();

// const closemodal
const closeModal = () => {
  const modal = document.getElementById("myModal");

  modal.remove();
}

// Au click sur la page, 1 la modale disparait, 2 le texte aparait
window.addEventListener('click', (e) => {
  const modal = document.getElementById("myModal");
  const para = document.getElementById("paragraphe");
  if (e.target == modal) {
    modal.remove();
    para.style.display = "block";
  }
})

const btHeader = document.getElementById('makeTitleRed');
btHeader.addEventListener("click", redTitle);

// Avec toggle enlever la class pour que sa revienne en noir

function redTitle(e) {
  const sectionTitles = document.getElementsByClassName('section-title')[0];
  sectionTitles.classList.toggle('red');
}

// ///////////////  CSS  ///////////////
const paraBgColor = "gray";

const sectionSousTitles = document.querySelectorAll('main section h2');
//console.log(sectionSousTitles);
for (let sectionSousTitle of sectionSousTitles) {
  sectionSousTitle.classList.add('section-sous-title');
}

const sectionTitles = document.querySelectorAll('main section h1');
for (let sectionTitle of sectionTitles) {
  sectionTitle.classList.add('section-title');
}

function styleparagraphe(paraBgColor) {
  const paragraphe = document.getElementById("paragraphe");
  paragraphe.style.display = "flex";
  paragraphe.style.justifyContent = "center";
  paragraphe.style.background = paraBgColor;
  paragraphe.style.padding = "15px";
}