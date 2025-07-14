const projectBox = document.querySelectorAll(".project");
const projectImage = document.querySelectorAll(".pi");
const projectOneImageIcon = document.querySelectorAll(".pii-1");
const projectTwoImageIcon = document.querySelectorAll(".pii-2");
const projectThreeImageIcon = document.querySelectorAll(".pii-3");
const textTypewriter = document.getElementById("name-am");

if (window.matchMedia("(max-width: 768px)").matches) {
    intersectionObserver();
    if (window.matchMedia("(max-width: 390px)").matches) {
        textTypewriter.classList.remove("typewriter");
    }
} else {
    projectsHoverWithMouse();
    iconsHover();
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

function iconsHover() {
    const allIcons = document.querySelectorAll('.smi');
    
    allIcons.forEach(svg => {
        svg.addEventListener("mouseenter", (e) => {
            if (e.target.id === "behance-as") {
                e.target.classList.add("behance-fill");
            } else if ((e.target.id === "linkedin-as") ||(e.target.id === "linkedin-sm")) {
                e.target.classList.add("linkedin-fill");
            } else if (e.target.id === "instagram-sm") {
                e.target.classList.add("instagram-fill");
            } else if (e.target.id === "facebook-sm") {
                e.target.classList.add("facebook-fill");
            } else if (e.target.id === "whatsapp-sm") {
                e.target.classList.add("whatsapp-fill");
            }
        });
    });

    allIcons.forEach(svg => {
        svg.addEventListener("mouseleave", () => {
            svg.classList.remove("linkedin-fill");
            svg.classList.remove("behance-fill");
            svg.classList.remove("instagram-fill");
            svg.classList.remove("facebook-fill");
            svg.classList.remove("whatsapp-fill");
        })
    });
}