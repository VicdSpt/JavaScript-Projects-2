const navigation = document.querySelector(".tabs-container");

const offset = navigation.offsetTop;

window.addEventListener("scroll", function () {
    if(window.scrollY >= offset) {
        navigation.classList.add("sticky")
    } else {
        navigation.classList.remove("sticky")
    }
})