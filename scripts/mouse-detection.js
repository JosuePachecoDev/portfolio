const projectBox = document.querySelectorAll(".project");
const projectImage = document.querySelectorAll(".pi");
let theresMouse = false;

window.addEventListener("mousemove", mouseDetected);

function mouseDetected() {
    theresMouse = true;
    window.removeEventListener("mousemove", mouseDetected);
    hoverWithMouse();
}

setTimeout(() => {
    if (!theresMouse) {
        console.log("📱 No se detectó cursor. Posible pantalla táctil.");
        clearStyles();
        intersectionObserver();
    }
}, 2000);

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
            div.style.display = "flex";
            div.style.justifyContent = "center";
            div.style.alignItems = "center";
            div.innerHTML += `
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
            div.style.display = "";
            div.style.justifyContent = "";
            div.style.alignItems = "";
            div.innerHTML = "";
        });
    });
};

function intersectionObserver() {    
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
        } else {
            entry.target.classList.remove('visible');
        }
    });
    }, {
    threshold: 1
    });

    projectBox.forEach(proj => observer.observe(proj));
};