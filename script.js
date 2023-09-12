// Get the modal element
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// Get the H1 element with the specific ID
var h1Element = document.getElementById("name-click");

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listener to open the modal when H1 is clicked
h1Element.addEventListener("click", openModal);

// Event listener to close the modal when the close button is clicked
closeBtn.addEventListener("click", closeModal);
