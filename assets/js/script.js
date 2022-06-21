function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Modal Message--------------------------------------------------------------------------------------

// Get the modal and content
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Show the modal
function showModal() {
  modal.style.display = "block";
  document.getElementById("modal-t").innerText = "Hello There! \n\nWelcome to my Resume. \nPlease take a look around. \n\nPlease note: \n** I currently live and work in Canada. ** \n\nThis site is not currently responsive for moblies due to study and work commitments.";
}

// Hide the modal
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.addEventListener('DOMContentLoaded', showModal);