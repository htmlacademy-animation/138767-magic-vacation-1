export default () => {
  const curtains = document.querySelector(".curtains");
  const menu = document.querySelectorAll(".js-menu-link");

  [].forEach.call(menu , (elem) => {
    elem.addEventListener("click", function() {
      if (this.dataset.href === "prizes") {
        curtains.classList.add("curtains--open");
      } else if (this.dataset.href !== "prizes") {
        curtains.classList.remove("curtains--open");
      }
    });
  });
};
