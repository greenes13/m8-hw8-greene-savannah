var listItem = document.getElementsByClassName('label');

function myFunction() {
  this.nextElementSibling.classList.toggle('show');
};

for (i=0; i<listItem.length; i++) {
  listItem[i].addEventListener('mouseenter', myFunction);
  listItem[i].addEventListener('mouseleave', myFunction);
}
