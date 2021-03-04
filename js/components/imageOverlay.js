export default function imageOverlay() {
  const buttons = document.querySelectorAll(".imageoverlaybutton");
  const overlay = document.querySelector(".overlay");
  const overlayImage = document.querySelector(".overlay-inner img");
  console.log(overlayImage);

  function open(event) {
    overlay.classList.add("open");
    const src = event.target.src;
    overlayImage.src = src;
  }

  function close() {
    overlay.classList.remove("open");
  }

  buttons.forEach((button) => button.addEventListener("click", open));
  overlay.addEventListener("click", close);
}
