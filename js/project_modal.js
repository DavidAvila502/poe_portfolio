document
   .querySelector(".card-project-viewproject-btn")
   .addEventListener("click", () => {
      document.querySelector("main").style["zIndex"] = 0;
      document.body.style.overflowY = "hidden";
      const overlay = document.querySelector(".project-modal-overlay");
      overlay.style.opacity = 1;
      overlay.style["pointerEvents"] = "auto";
   });

document
   .querySelector(".project-modal-close-btn")
   .addEventListener("click", () => {
      document.querySelector("main").style["zIndex"] = "auto";
      document.body.style.overflowY = "auto";
      const overlay = document.querySelector(".project-modal-overlay");
      overlay.style.opacity = 0;
      overlay.style["pointerEvents"] = "none";
   });
