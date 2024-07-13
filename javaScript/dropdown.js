// Get all the drop-down buttons and their respective drop-down content
var buttons = document.querySelectorAll('.drop-down-button');
var dropdownContents = document.querySelectorAll('.drop-down-content-hidden');

// Add click event listeners to each drop-down button
buttons.forEach(function(button, index) {
  button.addEventListener('click', function() {
    // Toggle the visibility of the corresponding drop-down content
    if (dropdownContents[index].classList.contains('drop-down-content-hidden')) {
      dropdownContents[index].classList.remove('drop-down-content-hidden');
      dropdownContents[index].classList.add('drop-down-content-show');
    } else {
      dropdownContents[index].classList.remove('drop-down-content-show');
      dropdownContents[index].classList.add('drop-down-content-hidden');
    }
  });
});
