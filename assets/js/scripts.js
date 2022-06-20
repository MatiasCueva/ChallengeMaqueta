function changeIcon() {
  var element = document.getElementById("hamburger-icon");
  element.classList.toggle("open");
}

function imgChange(section, tab) {
  var images = document.querySelectorAll('.left-section');
  var allTabs = document.querySelectorAll('.tab');

  for (var i = 0; i < images.length; i++) {
    images[i].classList.add('d-none');
  }
  for (var i = 0; i < allTabs.length; i++) {
    allTabs[i].classList.remove('active');
  }

  document.getElementById(section).classList.remove('d-none');
  tab.classList.add('active');
}
