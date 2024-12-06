function revealHomeArticle(event) {
    const homeArticle = document.getElementById("home");
    const workArticle = document.getElementById("work");
    const projectsArticle = document.getElementById("projects");
    const contactArticle = document.getElementById("contact");

    workArticle.style.opacity = '0';
    workArticle.style.visibility = 'hidden';
    contactArticle.style.opacity = '0';
    contactArticle.style.visibility = 'hidden';
    projectsArticle.style.opacity = '0';
    projectsArticle.style.visibility = 'hidden';
    
    setTimeout(function () {
        homeArticle.style.opacity = '1';
        homeArticle.style.visibility = 'visible';
    },500);
    
    
}

function revealWorkArticle(event) {
    const homeArticle = document.getElementById("home");
    const workArticle = document.getElementById("work");
    const projectsArticle = document.getElementById("projects");
    const contactArticle = document.getElementById("contact");

    contactArticle.style.opacity = '0';
    contactArticle.style.visibility = 'hidden';
    homeArticle.style.opacity = '0';
    homeArticle.style.visibility = 'hidden';
    projectsArticle.style.opacity = '0';
    projectsArticle.style.visibility = 'hidden';

    setTimeout(function () {
        workArticle.style.opacity = '1';
        workArticle.style.visibility = 'visible';
    },500);
    
    
}

function revealContactArticle(event) {
    const homeArticle = document.getElementById("home");
    const workArticle = document.getElementById("work");
    const projectsArticle = document.getElementById("projects");
    const contactArticle = document.getElementById("contact");
    
    workArticle.style.opacity = '0';
    workArticle.style.visibility = 'hidden';
    homeArticle.style.opacity = '0';
    homeArticle.style.visibility = 'hidden';
    projectsArticle.style.opacity = '0';
    projectsArticle.style.visibility = 'hidden';

    setTimeout(function () {
        contactArticle.style.opacity = '1';
        contactArticle.style.visibility = 'visible';
    },500);
    
}

function revealProjectsArticle() {
    const homeArticle = document.getElementById("home");
    const workArticle = document.getElementById("work");
    const projectsArticle = document.getElementById("projects");
    const contactArticle = document.getElementById("contact");
    
    workArticle.style.opacity = '0';
    workArticle.style.visibility = 'hidden';
    homeArticle.style.opacity = '0';
    homeArticle.style.visibility = 'hidden';
    contactArticle.style.opacity = '0';
    contactArticle.style.visibility = 'hidden';

    setTimeout(function () {
        projectsArticle.style.opacity = '1';
        projectsArticle.style.visibility = 'visible';
    },500);
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.image-info1').forEach(infoButton => {
        infoButton.addEventListener('click', (event) => {
            event.stopPropagation();
            event.preventDefault();

            const row = infoButton.closest('.row');
            row.classList.toggle('active');
        })
    })
})