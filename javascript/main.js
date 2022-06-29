function hideBurger() {
  let navList = document.querySelector("#nav-list");
  let burger = document.querySelector("#burger");
  burger.addEventListener("click", () => {
    if (navList.className === "nav-inactive") {
      navList.className += "nav-active";
      navList.className += "nav-ani";
    } else {
      navList.className = "nav-inactive";
    }
  });
}
hideBurger();
