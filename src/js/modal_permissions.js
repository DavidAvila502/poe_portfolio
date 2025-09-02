document.addEventListener("DOMContentLoaded", () => {
   initEffects();

   if (localStorage.getItem(LS_KEY) === null) {
      document.getElementById("permissions-effects-modal").style.display =
         "flex";
      deactivateBodyScroll();
   } else {
      document.getElementById("permissions-effects-modal").style.display =
         "none";

      activateBodyScroll();
   }
});

document.getElementById("btn-allow").addEventListener("click", () => {
   setEffectsAllowed(true);

   activateBodyScroll();
});
document.getElementById("btn-deny").addEventListener("click", () => {
   setEffectsAllowed(false);
   activateBodyScroll();
});

const activateBodyScroll = () => {
   document.body.style.overflowY = "auto";
};

const deactivateBodyScroll = () => {
   document.body.style.overflowY = "hidden";
};
