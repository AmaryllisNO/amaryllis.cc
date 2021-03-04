export default function collapseNav() {
  const workLink = document.querySelector("#mainlink-work");
  const aboutLink = document.querySelector("#mainlink-about");
  const workList = document.querySelector("#worklist");
  const aboutList = document.querySelector("#aboutlist");

  const mobileWorkLink = document.querySelector("#mobilemainlink-work");
  const mobileAboutLink = document.querySelector("#mobilemainlink-about");
  const mobileWorkList = document.querySelector("#mobileworklist");
  const mobileAboutList = document.querySelector("#mobileaboutlist");

  workLink.addEventListener("click", openWork);
  aboutLink.addEventListener("click", openAbout);
  mobileWorkLink.addEventListener("click", openMobileWork);
  mobileAboutLink.addEventListener("click", openMobileAbout);

  function openWork() {
    collapseHeight(workList, workLink);
  }

  function openAbout() {
    collapseHeight(aboutList, aboutLink);
  }

  function openMobileWork() {
    collapseHeight(mobileWorkList, mobileWorkLink);
  }

  function openMobileAbout() {
    collapseHeight(mobileAboutList, mobileAboutLink);
  }

  function collapseHeight(targetList, targetLink) {
    targetList.classList.toggle("nav__sublist--show");
    let list = targetLink.nextElementSibling;
    if (list.style.maxHeight) {
      list.style.maxHeight = null;
    } else {
      list.style.maxHeight = list.scrollHeight + "px";
    }
  }
}
