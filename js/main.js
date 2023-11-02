// localisation du main 
const firstSection = document.getElementById('first');

const bodyTag = firstSection.parentElement;

bodyTag.insertAdjacentHTML('beforeend',"<main></main>");

// Récupéré la modale
const modal = document.getElementById("myModal");

// on rédupère le <span> du bouton X 
var btn = document.getElementsByClassName("close")[0];

// on fait apparaitre la modale au chargement
window.onload = function modalopen() {
  const insertModale = `
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
          <button class="close" id="close" onclick='closeModal'> <i class="fa-solid fa-x"></i> </button>

          <h1>Titre du modale</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga est aspernatur natus, doloribus numquam.</p>
      </div>
    </div>
  `;
  bodyTag.insertAdjacentHTML('beforeend', insertModale);
}

const openModal = () => {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

const closeModal = () => {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

window.addEventListener('click', (e) => {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
})