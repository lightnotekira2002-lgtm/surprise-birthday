function showSurprise() {
    document.getElementById("message").style.display = "block";
    window.scrollTo({
        top: document.getElementById("message").offsetTop,
        behavior: "smooth"
    });
}
