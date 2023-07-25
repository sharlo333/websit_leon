let links = document.querySelector('.icon');
let nav = document.querySelector('ul');
let fet = true;

links.onclick = function () {
  if (fet === true) {
    nav.style.cssText = 'display: block;';
      fet = false
    }else {
    nav.style.cssText = 'display: none;';
      fet = true
  }
};