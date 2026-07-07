// ⭐ إنشاء النجوم

for(let i = 0; i < 120; i++){

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";

    star.style.animationDuration = (1 + Math.random() * 3) + "s";

    document.body.appendChild(star);

}

// 💖 قلوب تطير

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (5 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },8000);

}

setInterval(createHeart,500);

// 🌸 ساكورا

function createFlower(){

    const flower = document.createElement("div");

    flower.className = "sakura";

    flower.innerHTML = "🌸";

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.animationDuration = (6 + Math.random() * 5) + "s";

    document.body.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    },10000);

}

setInterval(createFlower,400);
// زر البداية

const openBtn = document.getElementById("openBtn");
const startScreen = document.getElementById("startScreen");
const content = document.getElementById("content");

openBtn.onclick = function(){

    startScreen.style.display = "none";

    content.style.display = "block";

};