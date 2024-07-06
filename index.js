const buttonEl = document.getElementById("btn");
const imgcontainerEl = document.querySelector(".img-container");


buttonEl.addEventListener("click",()=>{
    for (let index = 0; index < 10; index++) {
        const newimg = document.createElement("img");
        newimg.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random()*2000)}`;
        imgcontainerEl.appendChild(newimg);
        
    }
})