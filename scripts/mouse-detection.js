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
        div.addEventListener("mouseenter", (e) => {
            if (e.target.id === "project-1") {
                e.target.innerHTML = `
                    <a href="https://github.com/JosuePachecoDev/password-generator.git">
                        <img class="project-svg" src="multimedia_files/github-isotype.svg" alt="">
                    </a>
                    <a href="https://josuepachecodev.github.io/password-generator/" target="_blank">
                        <img class="project-svg" src="multimedia_files/new-tab-icon.svg" alt="">
                    </a>
                `;
            } else if (e.target.id === "project-2") {
                e.target.innerHTML = `
                    <a href="https://github.com/JosuePachecoDev/page-not-found.git">
                        <img class="project-svg" src="multimedia_files/github-isotype.svg" alt="">
                    </a>
                `;
            } else {
                e.target.innerHTML = `
                    <a href="#">
                        <img class="project-svg" src="multimedia_files/github-isotype.svg" alt="">
                    </a>
                    <a href="#">
                        <img class="project-svg" src="multimedia_files/new-tab-icon.svg" alt="">
                    </a>
                ` ;
            }

            e.target.classList.add("pi-on");
            e.target.classList.add("active");
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
            if (pi.id === "project-1") {
                pi.innerHTML = `
                    <a href="https://github.com/JosuePachecoDev/password-generator.git">
                        <img class="project-svg" src="multimedia_files/github-isotype.svg" alt="">
                    </a>
                    <a href="https://josuepachecodev.github.io/password-generator/" target="_blank">
                        <img class="project-svg" src="multimedia_files/new-tab-icon.svg" alt="">
                    </a>
                `;
            } else if (pi.id === "project-2") {
                pi.innerHTML = `
                    <a href="https://github.com/JosuePachecoDev/page-not-found.git">
                        <img class="project-svg" src="multimedia_files/github-isotype.svg" alt="">
                    </a>
                `;
            } else {
                pi.innerHTML = `
                    <a href="#">
                        <img class="project-svg" src="multimedia_files/github-isotype.svg" alt="">
                    </a>
                    <a href="#">
                        <img class="project-svg" src="multimedia_files/new-tab-icon.svg" alt="">
                    </a>
                    `;
            }
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