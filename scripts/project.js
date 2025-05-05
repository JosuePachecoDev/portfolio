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
    // image.style.backgroundColor = "rgb(0, 0, 0)";
    image.style.backgroundColor = "rgb(7, 18, 60)";
    image.style.display = "flex";
    image.style.justifyContent = "center";
    image.style.alignItems = "center";
    image.style.cursor = "default";
    image.innerHTML = `
        <a href="#">
            <img class="project-svg" src="multimedia_files/github-isotype.svg" alt="">
        </a>
        <a href="#">
            <img class="project-svg" src="multimedia_files/new-tab-icon.svg" alt="">
        </a>
    `;
    image.classList.add('active');
}

function resetImage(image) {
    image.style.backgroundColor = "rgb(7, 18, 136)";
    image.style.display = "";
    image.style.justifyContent = "";
    image.style.alignItems = "";
    image.style.cursor = "pointer";
    image.innerHTML = "";
    image.classList.remove('active');
}
