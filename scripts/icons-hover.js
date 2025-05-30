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