document.addEventListener("DOMContentLoaded", function () {
    const area = document.querySelector(".valentine-area");
    for (let i = 0; i < 40; i++) {
        let snow = document.createElement("div"); snow.classList.add("valentine");
        snow.innerHTML = "❤️";
        snow.style.left = Math.random() * 100 + "vw"; let duration = (Math.random() * 5 + 5);
        snow.style.animationDuration = duration + "s";
        snow.style.animationDelay = -Math.random() * duration + "s"; 
        snow.style.fontSize = (Math.random() * 20 + 10) + "px"; 
        snow.style.opacity = Math.random(); 
        area.appendChild(snow);
    }
}); 