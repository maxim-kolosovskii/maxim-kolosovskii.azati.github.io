var hamburger = document.getElementById("hamburger");

hamburger.onclick = function() {
    if (hamburger.classList.contains("open")) {
        hamburger.classList.remove("open");
    } else {
        hamburger.classList.add("open");
    }
}