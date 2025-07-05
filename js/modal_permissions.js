document.addEventListener("DOMContentLoaded", () => {
   initEffects();

   if (localStorage.getItem(LS_KEY) === null) {
      document.getElementById("permissions-effects-modal").style.display =
         "flex";
   } else {
      document.getElementById("permissions-effects-modal").style.display =
         "none";
   }
});

document
   .getElementById("btn-allow")
   .addEventListener("click", () => setEffectsAllowed(true));
document
   .getElementById("btn-deny")
   .addEventListener("click", () => setEffectsAllowed(false));
