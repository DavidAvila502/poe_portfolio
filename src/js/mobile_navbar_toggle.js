document
   .getElementById("mobile-navbar-toggle-btn")
   .addEventListener("click", () => {
      document
         .querySelector(".mobile-navbar-list-container")
         .classList.toggle("open");

      if (document.body.style.overflowY != "hidden") {
         document.body.style.overflowY = "hidden";
         document.getElementById("mobile-navbar-toggle-icon").src =
            "./src/assets/image/x.svg";
      } else {
         document.body.style.overflowY = "auto";
         document.getElementById("mobile-navbar-toggle-icon").src =
            "./src/assets/image/menu.svg";
      }
   });
