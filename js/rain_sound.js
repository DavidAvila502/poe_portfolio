document.addEventListener("DOMContentLoaded", () => {
   const rain_sound = document.getElementById("rain-sound");

   function playAudio() {
      rain_sound.currentTime = 0;
      rain_sound
         .play()
         .catch((err) => console.warn("Rain audio can't be played", err));
      rain_sound.loop = true;
   }

   playAudio();
});
