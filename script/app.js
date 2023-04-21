const THEME = {
  DARK: "DARK",
  LIGHT: "LIGHT",
};
const myImage = document.querySelector("#myImage");
const root = document.querySelector(":root");
const themeButton = document.querySelector("#theme-btn");
const getTheme = () => window.localStorage.getItem("theme");

const reactBasedOnTheme = (currentTheme) => {
  if (currentTheme === THEME.LIGHT) {
    myImage.setAttribute("src", "./images/me_light.JPG");
    root.style.setProperty("--txt-color-1", "rgba(0, 0, 0, 1.0)");
    root.style.setProperty("--txt-color-2", "rgba(0, 0, 0, 0.9)");
    root.style.setProperty("--txt-color-3", "rgba(0, 0, 0, 0.8)");
    root.style.setProperty("--txt-color-4", "rgba(0, 0, 0, 0.7)");
    root.style.setProperty("--txt-color-5", "rgba(0, 0, 0, 0.6)");
    root.style.setProperty("--txt-color-6", "rgba(0, 0, 0, 0.5)");
    root.style.setProperty("--txt-color-7", "rgba(0, 0, 0, 0.4)");
    root.style.setProperty("--txt-color-8", "rgba(0, 0, 0, 0.3)");
    root.style.setProperty("--txt-color-9", "rgba(0, 0, 0, 0.2)");

    root.style.setProperty("--bg-color-1", "rgb(255, 255, 255, 1.0)");
    root.style.setProperty("--bg-color-2", "rgb(255, 255, 255, 0.9)");
    root.style.setProperty("--bg-color-3", "rgb(255, 255, 255, 0.8)");
    root.style.setProperty("--bg-color-4", "rgb(255, 255, 255, 0.7)");
    root.style.setProperty("--bg-color-5", "rgb(255, 255, 255, 0.6)");
    root.style.setProperty("--bg-color-6", "rgb(255, 255, 255, 0.5)");
    root.style.setProperty("--bg-color-7", "rgb(255, 255, 255, 0.4)");
    themeButton.innerHTML = `Dark Mode <i class="theme-btn far fa-moon"></i`;
  } else {
    myImage.setAttribute("src", "./images/me_dark.JPG");
    root.style.setProperty("--txt-color-1", "rgba(255, 255, 255, 1.0)");
    root.style.setProperty("--txt-color-2", "rgba(255, 255, 255, 0.9)");
    root.style.setProperty("--txt-color-3", "rgba(255, 255, 255, 0.8)");
    root.style.setProperty("--txt-color-4", "rgba(255, 255, 255, 0.7)");
    root.style.setProperty("--txt-color-5", "rgba(255, 255, 255, 0.6)");
    root.style.setProperty("--txt-color-6", "rgba(255, 255, 255, 0.5)");
    root.style.setProperty("--txt-color-7", "rgba(255, 255, 255, 0.4)");
    root.style.setProperty("--txt-color-8", "rgba(255, 255, 255, 0.3)");
    root.style.setProperty("--txt-color-9", "rgba(255, 255, 255, 0.2)");

    root.style.setProperty("--bg-color-1", "rgb(0, 0, 0, 1.0)");
    root.style.setProperty("--bg-color-2", "rgb(0, 0, 0, 0.9)");
    root.style.setProperty("--bg-color-3", "rgb(0, 0, 0, 0.8)");
    root.style.setProperty("--bg-color-4", "rgb(0, 0, 0, 0.7)");
    root.style.setProperty("--bg-color-5", "rgb(0, 0, 0, 0.6)");
    root.style.setProperty("--bg-color-6", "rgb(0, 0, 0, 0.5)");
    root.style.setProperty("--bg-color-7", "rgb(0, 0, 0, 0.4)");
    themeButton.innerHTML = `Light Mode <i class="theme-btn far fa-sun"></i`;
  }
};

reactBasedOnTheme(getTheme() || THEME.DARK);

const lightMode = () => {
  window.localStorage.setItem("theme", THEME.LIGHT);
  reactBasedOnTheme(THEME.LIGHT);
};
const darkMode = () => {
  window.localStorage.setItem("theme", THEME.DARK);
  reactBasedOnTheme(THEME.DARK);
};
themeButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (getTheme() === THEME.LIGHT) {
    darkMode();
  } else {
    lightMode();
  }
});
