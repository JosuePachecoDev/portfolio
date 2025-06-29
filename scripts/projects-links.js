const projectBox = document.querySelectorAll(".project");
const projectImage = document.querySelectorAll(".pi");
const projectOneImageIcon = document.querySelectorAll(".pii-1")
const projectTwoImageIcon = document.querySelectorAll(".pii-2")
const projectThreeImageIcon = document.querySelectorAll(".pii-3")

if (window.matchMedia("(max-width: 768px)").matches) {
    intersectionObserver();
} else {
    projectsHoverWithMouse();
    iconsHover();
}

function projectsHoverWithMouse() {
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
                projectOneImageIcon.forEach(icon => {
                    icon.style.opacity = "100%";
                    icon.style.display = "initial";
                });
            } else if (e.target.id === "project-2") {
                projectTwoImageIcon.forEach(icon => {
                    icon.style.opacity = "100%";
                    icon.style.display = "initial";
                });
            } else if (e.target.id === "project-3") {
                projectThreeImageIcon.forEach(icon => {
                    icon.style.opacity = "100%";
                    icon.style.display = "initial";
                });
            }

            e.target.classList.add("pi-on");
            e.target.classList.add("active");
        });
    });

    projectImage.forEach(div => {
        div.addEventListener("mouseleave", () => {
            div.classList.remove("pi-on");
            div.classList.remove("active");
            projectOneImageIcon.forEach(icon => {
                icon.style.opacity = "0%";
            });
            projectTwoImageIcon.forEach(icon => {
                icon.style.opacity = "0%";
            });
            projectThreeImageIcon.forEach(icon => {
                icon.style.opacity = "0%";
            });
        });
    });
}

function intersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const project = entry.target;
            const pi = project.querySelector(".pi");
            const pii = pi.querySelectorAll("a");

            if (entry.isIntersecting) {
                project.classList.add("visible");
                pi.classList.add("pi-on");
                pii.forEach(icon => {
                    icon.style.opacity = "100%";
                    icon.style.display = "initial";
                });
            } else {
                project.classList.remove("visible");
                pi.classList.remove("pi-on");
                pii.forEach(icon => {
                    icon.style.opacity = "0%";
                    icon.style.display = "none";
                });
            }
        });
    }, {
        threshold: 0.85
    });

    projectBox.forEach(proj => observer.observe(proj));
}

projectBox.forEach(project => {
    const img = project.querySelector(".pi");
    const imgIcos = img.querySelectorAll("a");
    project.addEventListener("focus", () => {
        img.classList.add("pi-on");
        imgIcos.forEach(icon => {
            icon.style.display = "initial";
            icon.style.opacity = "100%";
        });
    });

    project.addEventListener("blur", () => {
        img.classList.remove("pi-on");
        imgIcos.forEach(icon => {
            icon.style.display = "none";
            icon.style.opacity = "0%";
        });
    });
});