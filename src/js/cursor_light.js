const body = document.body;
const cursorLight = document.getElementById("cursor-light");

let lastClientX = 0;
let lastClientY = 0;

function updateLightPosition(clientX, clientY) {
   const x = clientX + window.scrollX;
   const y = clientY + window.scrollY;

   body.style.setProperty("--mouse-x", `${x}px`);
   body.style.setProperty("--mouse-y", `${y}px`);
   cursorLight.style.left = `${x}px`;
   cursorLight.style.top = `${y}px`;
}

body.addEventListener("mousemove", (e) => {
   lastClientX = e.clientX;
   lastClientY = e.clientY;
   updateLightPosition(lastClientX, lastClientY);
});

window.addEventListener(
   "scroll",
   () => {
      updateLightPosition(lastClientX, lastClientY);
   },
   { passive: true }
);
