const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let countTimes = 0;

loveMe.addEventListener("dblclick", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const offsetX = e.target.offsetLeft;
    const offsetY = e.target.offsetTop;

    const resultX = x - offsetX;
    const resultY = y - offsetY;

    const heart = document.createElement("i");
    heart.classList.add("fas");
    heart.classList.add("fa-heart");

    heart.style.top = `${resultY}px`;
    heart.style.left = `${resultX}px`;

    loveMe.appendChild(heart);
    
    times.innerHTML = ++countTimes;

    setTimeout(() => {
        heart.remove();
    }, 1000);
});
