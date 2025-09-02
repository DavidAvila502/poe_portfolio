function loadThunderSound() {
   const body = document.body;
   const thunder_sound = document.getElementById("thunder-sound");

   const DEFAULT_OPACITY = "0.5";
   const FLASH_OPACITY = "0";
   const FLASH_DURATION = 200;
   const BETWEEN_FLASH = 150;

   // Thunder lighing effect
   function singleFlash() {
      body.style.setProperty("--overlay-end-opacity", FLASH_OPACITY);
      setTimeout(() => {
         body.style.setProperty("--overlay-end-opacity", DEFAULT_OPACITY);
      }, FLASH_DURATION);
   }

   //play thunder audio function
   function playAudio() {
      body.style.setProperty("--overlay-end-opacity", FLASH_OPACITY);

      thunder_sound.currentTime = 0;
      thunder_sound
         .play()
         .catch((err) => console.warn("thunder sound can't be played.", err));

      singleFlash();

      setTimeout(() => {
         singleFlash();
      }, FLASH_DURATION + BETWEEN_FLASH);
   }

   // play audio once
   playAudio();

   // play audio loop
   setInterval(playAudio, 15000);
}
