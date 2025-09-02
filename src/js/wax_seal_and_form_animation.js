const img = document.querySelector(".wax-seal");
const form = document.getElementById("contactForm");

function startMelt() {
   if (!img || img.classList.contains("shrink")) return;
   img.classList.add("shrink");

   function onEnd(e) {
      if (e.propertyName !== "opacity") return;
      img.removeEventListener("transitionend", onEnd);

      img.style.display = "none";

      if (form) {
         //  form.classList.remove("hidden");
         form.classList.add("visible");
         form.setAttribute("aria-hidden", "false");
         const first = form.querySelector("input, textarea, button");
         if (first) first.focus();
      }
   }

   img.addEventListener("transitionend", onEnd);
}

img.addEventListener("click", startMelt);
