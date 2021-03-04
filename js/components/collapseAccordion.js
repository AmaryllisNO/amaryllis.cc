export default function collapseAccordion() {
  let coll = document.querySelectorAll(".collapsable__button");
  let collContainer = document.querySelectorAll(".collapsable");
  console.log(collContainer);

  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active--accordion");
      this.nextElementSibling.classList.toggle("active--content");
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

  for (let index = 0; index < collContainer.length; index++) {
    collContainer[index].addEventListener("click", function () {
      this.classList.toggle("active--collcontainer");
    });
  }
}
