//your JS code here. If required.
// Get references
const select = document.getElementById("colorSelect");
const button = document.querySelector('input[type="button"]');

// Add event listener to button
button.addEventListener("click", function () {
  // Find the selected option index
  const selectedIndex = select.selectedIndex;

  // If an option is selected, remove it
  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
});
 