// Récupéré la modale
var modal = document.getElementById("myModal");

// on rédupère le <span> du bouton X 
var span = document.getElementsByClassName("close")[0];

onload = function() {
  modal.style.display = "block";
  modal.style.opacity = "1";
}

// Quand l'utilisateur clique sur le "x" la modale disparait
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}