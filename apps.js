const hamburger = document.querySelector(".hamborger");
const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector(".btn");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  btn.classList.toggle("active");
  sidebar.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  const ClickOnhamborger = hamburger.contains(e.target);
  const ClickOnSidebar = sidebar.contains(e.target);
  if (!ClickOnhamborger && !ClickOnSidebar) {
    sidebar.classList.remove("active");
  }
});

const symbol = document.querySelector(".symbol");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) symbol.classList.add("active");
  else symbol.classList.remove("active");
});
symbol.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
