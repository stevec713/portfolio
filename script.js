let clickableSection = document.getElementById('clickableSection');
let skills = document.getElementById('skills');
let contact = document.getElementById('contact');
let main = document.getElementById('main');
let header = document.querySelector('header');
let projects = document.querySelector('#projects > div');
let about = document.querySelector('nav [href="#about"]');
let work = document.querySelector('nav [href="#work"]');
let links = document.querySelectorAll('article a');

function toggleVisibility() {
    clickableSection.classList.toggle('left');
    header.classList.toggle('hidden');
    projects.classList.toggle('hidden');
    skills.classList.toggle('hidden');
    contact.classList.toggle('hidden');
    main.classList.toggle('right');
}

clickableSection.addEventListener('click', toggleVisibility);

about.addEventListener('click', function(){
    if(clickableSection.classList.contains('left')){
        toggleVisibility();
    }
});

work.addEventListener('click', function(){
    if(!clickableSection.classList.contains('left')){
        toggleVisibility();
    }
});

document.addEventListener('focusin', function() {
    if(projects.contains(document.activeElement) && !clickableSection.classList.contains('left')){
        toggleVisibility();
    } else if (!projects.contains(document.activeElement) && clickableSection.classList.contains('left')) {
        toggleVisibility();
    }
});