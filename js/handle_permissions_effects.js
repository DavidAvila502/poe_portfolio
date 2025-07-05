const LS_KEY = "areEffectsAllowed";

function setEffectsAllowed(flag) {
   localStorage.setItem(LS_KEY, flag ? "1" : "0");
   document.getElementById("permissions-effects-modal").style.display = "none";

   initEffects();
}

function initEffects() {
   const flag = isEffectsAllowed();
   if (flag) {
      activateEffects();
   } else {
      deactivateEffects();
   }
}

function isEffectsAllowed() {
   return localStorage.getItem(LS_KEY) === "1";
}

function deactivateEffects() {
   const rain_sound = document.getElementById("rain-sound");
   const thunder_sound = document.getElementById("thunder-sound");
   const cursor_light = document.getElementById("cursor-light");
   const overlay_2 = document.getElementsByClassName("overlay-2");
   const effects_toggle = document.getElementById("effects-toggle");

   rain_sound.muted = true;
   thunder_sound.muted = true;
   cursor_light.style.display = "none";
   overlay_2[0].style.display = "none";
   effects_toggle.classList.remove("active");
}

function activateEffects() {
   const rain_sound = document.getElementById("rain-sound");
   const thunder_sound = document.getElementById("thunder-sound");
   const cursor_light = document.getElementById("cursor-light");
   const overlay_2 = document.getElementsByClassName("overlay-2");
   const effects_toggle = document.getElementById("effects-toggle");

   rain_sound.muted = false;
   thunder_sound.muted = false;
   cursor_light.style.display = "flex";
   overlay_2[0].style.display = "flex";
   effects_toggle.classList.add("active");
}
