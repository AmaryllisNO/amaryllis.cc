export default function mobileNav() {
  const hamburger = document.querySelector("#hamburger");
  const mobileNav = document.querySelector("#mobilenav");
  console.log(hamburger);
  const innerMobileNav = document.querySelector("#innermobilenav");
  const anchorbarArrow = document.querySelector("#anchorbararrow");

  hamburger.addEventListener("click", function () {
    mobileNav.classList.add("mobilenav--open");
    innerMobileNav.style.display = "block";
  });

  anchorbarArrow.addEventListener("click", function () {
    mobileNav.classList.remove("mobilenav--open");
    innerMobileNav.style.display = "none";
  });
}
