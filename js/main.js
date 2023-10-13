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

  // expand config section
  document
    .getElementById("config-expand-button")
    .addEventListener("click", () => {
      document.getElementById("config-box").classList.toggle("config-expand");
    });

  // collapsible question
  let coll = document.getElementsByClassName("collapsible");
  let prevActiveCollapsibleItem = null;
  let prevActiveCollapsibleItemContent = null;
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      // close prev item
      if (
        prevActiveCollapsibleItem != null &&
        prevActiveCollapsibleItem != this
      ) {
        prevActiveCollapsibleItem.classList.remove("active");
        prevActiveCollapsibleItemContent.style.maxHeight = null;
      }

      // toggle current item
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        // close
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }

      // save current item as prev item
      prevActiveCollapsibleItem = this;
      prevActiveCollapsibleItemContent = content;
    });
  }


});
