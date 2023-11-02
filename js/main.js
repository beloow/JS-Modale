// localisation du main 
const firstSection = document.getElementById('first');

const bodyTag = firstSection.parentElement;
console.log(bodyTag);

bodyTag.insertAdjacentHTML('beforeend',"<main></main>");
// Récupéré la modale
var modal = document.getElementById("myModal");

// on rédupère le <span> du bouton X 
var span = document.getElementsByClassName("close")[0];

// on fait apparaitre la modale au chargement
window.onload = function() {
  // modal.style.display = "block";
  // modal.style.opacity = "1";

  const insertModale = `
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
          <span class="close">&times;</span>
          <img src="http://worldpoint.com.br/media/wysiwyg/banner/banner-recesso-2019.jpeg" alt="">

          <h1>Titre du modale</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga est aspernatur natus, doloribus numquam.</p>
      </div>
    </div>
  `;
  bodyTag.insertAdjacentHTML('beforeend', insertModale);
}

// Quand l'utilisateur clique sur le "x" la modale disparait
span.onclick = function() {
  modal.style.display = "none";
}

// faire en sorte pour que lorsque l'utilisateur clique ailleurs la modale se ferme
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}