const demoImages = document.querySelectorAll(".pi");

demoImages.forEach(image => {
    image.addEventListener("click", () => {
        if (image.classList.contains('active')) {
            resetImage(image);
        } else {
            demoImages.forEach(img => resetImage(img));
            activateImage(image);
        }
    });
});

function activateImage(image) {
    image.classList.add('active');
    image.style.display = "flex";
    image.style.justifyContent = "center";
    image.style.alignItems = "center";
    image.innerHTML += `
        <a href="https://github.com/JosuePachecoDev/password-generator.git">
            <img class="project-svg" src="multimedia_files/github-isotype.svg" alt="">
        </a>
        <a href="https://josuepachecodev.github.io/password-generator/" target="_blank">
            <img class="project-svg" src="multimedia_files/new-tab-icon.svg" alt="">
        </a>
    `;
}

function resetImage(image) {
    image.classList.remove('active');
    image.style.display = "";
    image.style.justifyContent = "";
    image.style.alignItems = "";
    image.innerHTML = '<div class="overlay"></div>';
}