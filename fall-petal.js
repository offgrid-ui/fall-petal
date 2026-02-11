document.addEventListener("DOMContentLoaded", function () {
    const area = document.querySelector(".valentine-area");

    const baseURL = "https://cdn.jsdelivr.net/gh/offgrid-ui/fall-petal@v1.0.0/";
    
    const petals = [
        baseURL + "sakura-petal-1-pink.svg",
        baseURL + "sakura-petal-2-pink.svg",
        baseURL + "sakura-petal-3-pink.svg"
    ];

    for (let i = 0; i < 100; i++) {

        let petal = document.createElement("img");
        petal.src = petals[Math.floor(Math.random() * petals.length)];
        petal.classList.add("valentine");

        petal.style.left = Math.random() * 100 + "%";

        let duration = (Math.random() * 5 + 6);
        petal.style.animationDuration = duration + "s";
        petal.style.animationDelay = -Math.random() * duration + "s";

        petal.style.width = (Math.random() * 10 + 6) + "px";
        petal.style.opacity = Math.random() * 0.8 + 0.2;

        area.appendChild(petal);
    }
});