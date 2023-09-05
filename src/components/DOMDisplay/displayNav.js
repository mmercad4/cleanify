const displayNav = () => {
  const body = document.body;

  const nav = document.createElement("nav");
  const navHeading = document.createElement("h1");
  navHeading.className = "nav__heading";
  navHeading.textContent = "Cleanify";
  nav.appendChild(navHeading);
  body.appendChild(nav);
};

export { displayNav };
