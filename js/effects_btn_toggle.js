document.addEventListener("DOMContentLoaded", () => {
   const effects_toggle = document.getElementById("effects-toggle");

   effects_toggle.addEventListener("click", () => {
      setEffectsAllowed(!isEffectsAllowed());
   });
});
