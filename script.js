

const stars = document.querySelector(".stars");

for(let i=0;i<120;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*2+"s";

    stars.appendChild(star);

}

// 💕

function createHeart(){

    const heart=document.createElement("div");

    heart.className="floating-heart";

    heart.innerHTML="💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-40px";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },7000);

}

setInterval(createHeart,700);