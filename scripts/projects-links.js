const projectBox = document.querySelectorAll(".project");
const projectImage = document.querySelectorAll(".pi");

if (window.matchMedia("(max-width: 768px)").matches) {
    intersectionObserver();
} else {
    hoverWithMouse();
    iconsHover();
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
                        <img class="project-svg" src="media/icons/github-isotype.svg" alt="">
                    </a>
                    <a href="https://josuepachecodev.github.io/password-generator/" target="_blank" rel="noopener noreferrer">
                        <img class="project-svg" src="#" alt="">
                    </a>
                `;
            } else if (e.target.id === "project-2") {
                e.target.innerHTML = `
                    <a href="https://github.com/JosuePachecoDev/page-not-found.git">
                        <img class="project-svg" src="media/icons/github-isotype.svg" alt="">
                    </a>
                    <a href="https://josuepachecodev.github.io/page-not-found/" target="_blank" rel="noopener noreferrer">
                        <img class="project-svg" src="#" alt="">
                    </a>
                `;
            } else if (e.target.id === "project-3") {
                e.target.innerHTML = `
                    <a href="https://github.com/JosuePachecoDev/coffe-shop-website.git">
                        <img class="project-svg" src="media/icons/github-isotype.svg" alt="">
                    </a>
                    <a href="https://josuepachecodev.github.io/coffe-shop-website/" target="_blank" rel="noopener noreferrer">
                        <img class="project-svg" src="#" alt="">
                    </a>
                `;
            } else {
                e.target.innerHTML = `
                    <a href="#">
                        <img class="project-svg" src="media/icons/github-isotype.svg" alt="">
                    </a>
                    <a href="#">
                        <img class="project-svg" src="#" alt="">
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
                        <img class="project-svg" src="media/icons/github-isotype.svg" alt="">
                    </a>
                    <a href="https://josuepachecodev.github.io/password-generator/" target="_blank" rel="noopener noreferrer">
                        <img class="project-svg" src="#" alt="">
                    </a>
                `;
                } else if (pi.id === "project-2") {
                    pi.innerHTML = `
                    <a href="https://github.com/JosuePachecoDev/page-not-found.git">
                        <img class="project-svg" src="media/icons/github-isotype.svg" alt="">
                    </a>
                    <a href="https://josuepachecodev.github.io/page-not-found/" target="_blank" rel="noopener noreferrer">
                        <img class="project-svg" src="#" alt="">
                    </a>
                `;
                } else if (pi.id === "project-3") {
                    pi.innerHTML = `
                    <a href="https://github.com/JosuePachecoDev/coffe-shop-website.git">
                        <img class="project-svg" src="media/icons/github-isotype.svg" alt="">
                    </a>
                    <a href="https://josuepachecodev.github.io/coffe-shop-website/" target="_blank" rel="noopener noreferrer">
                        <img class="project-svg" src="#" alt="">
                    </a>
                `;
                } else {
                    pi.innerHTML = `
                    <a href="#">
                        <img class="project-svg" src="media/icons/github-isotype.svg" alt="">
                    </a>
                    <a href="#">
                        <img class="project-svg" src="#" alt="">
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