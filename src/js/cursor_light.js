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

function mouseMoveHandler(e) {
   lastClientX = e.clientX;
   lastClientY = e.clientY;
   updateLightPosition(lastClientX, lastClientY);
}

function scrollHandler() {
   updateLightPosition(lastClientX, lastClientY);
}

function clientCenter() {
   return {
      x: Math.round(window.innerWidth / 2),
      y: Math.round(window.innerHeight / 2),
   };
}

function setCenter() {
   const { x, y } = clientCenter();
   lastClientX = x;
   lastClientY = y;
   updateLightPosition(lastClientX, lastClientY);
}

function start() {
   body.removeEventListener("mousemove", mouseMoveHandler);
   window.removeEventListener("scroll", scrollHandler);

   body.addEventListener("mousemove", mouseMoveHandler);
   window.addEventListener("scroll", scrollHandler, { passive: true });
}

function stop() {
   body.removeEventListener("mousemove", mouseMoveHandler);
   window.removeEventListener("scroll", scrollHandler);
   setCenter();
}

function startMobile() {
   body.removeEventListener("mousemove", mouseMoveHandler);
   window.removeEventListener("scroll", scrollHandler);

   setCenter();
   window.addEventListener("scroll", scrollHandler, { passive: true });
}

start();

window.cursorLight = {
   start,
   stop,
   startMobile,
};
