const projectBox = document.querySelectorAll(".project");
const projectImage = document.querySelectorAll(".pi");
let theresMouse = false;

if (window.matchMedia("(max-width: 768px)").matches) {
  intersectionObserver();
} else {
  hoverWithMouse();
};

function hoverWithMouse() {
    projectBox.forEach(div => {
        div.addEventListener("mouseover", () => {
            div.style.border = "solid 1px rgb(230, 230, 230)"
            div.style.transform = "scale(1.02)";
        });
    });

    projectBox.forEach(div => {
        div.addEventListener("mouseout", () => {
            div.style.border = "none"
            div.style.transform = "scale(1)";
        });
    });

    projectImage.forEach(div => {
        div.addEventListener("mouseenter", () => {
            div.classList.add("pi-on");
            div.classList.add("active");
            div.innerHTML = `
                <a href="https://github.com/JosuePachecoDev/password-generator.git">
                    <img class="project-svg" src="multimedia_files/github-isotype.svg" alt="">
                </a>
                <a href="https://josuepachecodev.github.io/password-generator/" target="_blank">
                    <img class="project-svg" src="multimedia_files/new-tab-icon.svg" alt="">
                </a>
            `;
        });
    });

    projectImage.forEach(div => {
        div.addEventListener("mouseleave", () => {
            div.classList.remove("pi-on");
            div.classList.remove("active");
            div.innerHTML = "";
        });
    });
};

function intersectionObserver() {    
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const project = entry.target;
        const pi = project.querySelector('.pi');

            if (entry.isIntersecting) {
                project.classList.add('visible');
                pi.classList.add('pi-on');
                pi.innerHTML = `
                <a href="https://github.com/JosuePachecoDev/password-generator.git">
                    <img class="project-svg" src="multimedia_files/github-isotype.svg" alt="">
                </a>
                <a href="https://josuepachecodev.github.io/password-generator/" target="_blank">
                    <img class="project-svg" src="multimedia_files/new-tab-icon.svg" alt="">
                </a>
            `;
            } else {
                project.classList.remove('visible');
                pi.classList.remove('pi-on');
                pi.innerHTML = "";
            }
    });
    }, {
    threshold: 0.85
    });

    projectBox.forEach(proj => observer.observe(proj));
};