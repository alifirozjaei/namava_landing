window.addEventListener("load", function () {
  console.log("main.js loaded");

  // when navbar scroll down hide it. when scroll up show it.
  let prevScrollpos = window.pageYOffset;
  this.window.addEventListener("scroll", () => {
    let currentScrollPos = window.pageYOffset;
    let navbar = document.getElementById("navbar");

    if (prevScrollpos > currentScrollPos) {
      // if scroll up show navbar
      navbar.style.top = "0";
    } else {
      // if scroll down hide navbar
      navbar.style.top = "-100px";
    }

    if (currentScrollPos == 0) {
      navbar.style.background = "transparent";
    } else {
      navbar.style.background = "#000";
    }

    prevScrollpos = currentScrollPos;
  });


  document.getElementById("config-expand-button").addEventListener('click',() => {
    document.getElementById("config-box").classList.toggle("config-expand"); 
  })
});
