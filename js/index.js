// When the page is DOM (Document Object Model aka the page) is done loading run the code
document.addEventListener("DOMContentLoaded", function(event) {

  document.getElementById('img').addEventListener('click', function(event) {
      alert('clicked!');
    }, false);

});