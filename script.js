const menuIcon = document.querySelector("#menu-icon");
const nav = document.querySelector("nav");

menuIcon.onclick = () => {
  nav.classList.toggle("active");
};
