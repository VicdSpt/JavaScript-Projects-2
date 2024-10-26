const columns = document.querySelectorAll("table thead th");
const wrapper = document.querySelector(".wrapper");
let activeIndex;

const resizeWindow = (e) => {
  const nextWidth =
    e.clientX - columns[activeIndex].offsetLeft - wrapper.offsetLeft - 24;
  columns[activeIndex].width = nextWidth;
};

const stopResize = (e) => {
  document.body.style.cursor = "default";
  window.removeEventListener("mousemove", resizeWindow);
  window.removeEventListener("mouseup", stopResize);
};

const initialResize = (index) => {
  activeIndex = index;
  document.body.style.cursor = "col-resize";
  window.addEventListener("mousemove", resizeWindow);
  window.addEventListener("mouseup", stopResize);
}