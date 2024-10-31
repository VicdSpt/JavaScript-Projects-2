const imageContainerBox = document.querySelector(".image-container");

const btnMore = document.querySelector(".btn")

btnMore.addEventListener("click", () => {
    imageNum = 5;
    addNewImages();
});

function addNewImages(){
    for (let index = 0; index < imageNum; index++){
        const newImages = document.createElement("img");
        newImages.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainerBox.appendChild(newImages);
    }
}