const hamburger = document.querySelector('.toggle-hamburger');

hamburger.addEventListener('click', function(){
    document.querySelector('nav.dashboard-nav').classList.toggle('sr-only');
})

const down = document.querySelector('.toggle-down');

down.addEventListener('click', function(){
    document.querySelector('nav.account-nav').classList.toggle('sr-only');
})