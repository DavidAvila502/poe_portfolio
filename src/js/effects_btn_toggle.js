document.addEventListener("DOMContentLoaded", () => {
   document.querySelectorAll(".effects-toggle").forEach((btn) =>
      btn.addEventListener("click", () => {
         setEffectsAllowed(!isEffectsAllowed());
      })
   );
});
