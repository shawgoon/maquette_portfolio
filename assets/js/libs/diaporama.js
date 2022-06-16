function diaporama(){
    const imgElements = document.querySelectorAll("#pict img");
console.dir(imgElements);
const imgFull = [];
const frameImg = document.createElement("div");
frameImg.style.width = "100vw";
frameImg.style.height = "100vh";
frameImg.style.backdropFilter = "blur(40px)";
frameImg.style.backgroundColor = "rgba(135, 55, 36, 0.3)";
frameImg.style.display = "none";
frameImg.style.justifyContent = "center";
frameImg.style.alignItems = "center";
frameImg.style.position = "fixed";
frameImg.style.zIndex = 1;
document.body.prepend(frameImg);

let i=0;
while(i < imgElements.length){     
    let n = i;
    imgElements[i].addEventListener(
        "click",
        function(){
            frameImg.style.display = "flex";
            imgFull[n]= document.createElement("img");
            imgFull[n].src = imgElements[n].src;
            frameImg.append(imgFull[n]);
        }
    )
    i++;
};

frameImg.addEventListener(
    "click",
    function(event){
        if (!frameImg.querySelector("img").contains(event.target)){
            frameImg.style.display = "none";
        frameImg.innerHTML = "";
        }   
    }   
);
};
export{diaporama};
