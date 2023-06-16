function animationNav() {
    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");
        header.classList.toggle("below", window.scrollY>0);
    })

}

export default animationNav