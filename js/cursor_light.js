const body = document.body;
const cursorLight = document.getElementById("cursor-light");

body.addEventListener("mousemove", (e) => {
   body.style.setProperty("--mouse-x", `${e.clientX}px`);
   body.style.setProperty("--mouse-y", `${e.clientY}px`);

   cursorLight.style.left = `${e.clientX}px`;
   cursorLight.style.top = `${e.clientY}px`;
});
