'use strict';

document.addEventListener('DOMContentLoaded', function() {
  let sideNav = document.querySelector('.sidenav');
  let materialBoxed = document.querySelectorAll('.materialboxed');
  let parallax = document.querySelectorAll('.parallax');
  let tooltipped = document.querySelectorAll('.tooltipped')
  let scrollSpy = document.querySelectorAll('.scrollspy')

  // Form
  let clearForm = document.querySelector('#clear');
  let submitForm = document.querySelector('#submit');
  let form = document.querySelector('form');
  let name = document.querySelector('#name');
  let email = document.querySelector('#email');
  let message = document.querySelector('#message');
  let checked = document.querySelectorAll('input[name="services"]')
  let formAction = form.action = "https://formspree.io/elitehabilitationservices@gmail.com"

  // Initialize materialize components
  let sideNavInstance = M.Sidenav.init(sideNav);
  let materialBoxedInstance = M.Materialbox.init(materialBoxed)
  let parallaxInstance = M.Parallax.init(parallax)
  let toolTipInstance = M.Tooltip.init(tooltipped);
  let scollSpyInstance = M.ScrollSpy.init(scrollSpy)
  let elems = document.querySelectorAll('.collapsible');
  let instances = M.Collapsible.init(elems);

  let cards = document.querySelectorAll('.ehs-card');
  for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', () => {
      cards[i].classList.toggle('is-flipped');
    });
  };

  let reset = (e) => {
    e.preventDefault();
    form.reset();
  }

  let submit = (e) => {
    let mailformat = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    if(name.value !== '' && email.value !== '' && email.value.match(mailformat) && message.value !== ''){
      let selectedItem = '';
      for(let i = 0; i < checked.length; i++){
        if(checked[i].type == 'checkbox' && checked[i].checked == true){
          selectedItem += checked[i].value;
          form.reset();
        }
      }
    }
  }

  clearForm.addEventListener('click', reset);
  submitForm.addEventListener('click', submit);
});
