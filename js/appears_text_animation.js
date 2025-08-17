function splitTextByChar(element, stagger = 0.03) {
   const text = element.textContent.replace(/\s+/g, " ").trim();
   let isNextHightled = false;

   element.setAttribute("aria-label", text);
   element.innerHTML = "";
   for (let i = 0; i < text.length; i++) {
      if (text[i] == "*" && isNextHightled == false) {
         isNextHightled = true;
         continue;
      }

      if (text[i] == "*" && isNextHightled) {
         isNextHightled = false;
         continue;
      }

      const ch = text[i];
      const span = document.createElement("span");
      span.className = "char";
      span.setAttribute("aria-hidden", "true");
      span.textContent = ch;
      span.style.setProperty("--delay", `${(i * stagger).toFixed(3)}s`);

      if (isNextHightled) {
         span.classList.add("about-hightled-text");
      }

      element.appendChild(span);
   }
}

document.querySelectorAll(".reveal").forEach((p) => splitTextByChar(p, 0.03));

const io = new IntersectionObserver(
   (entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
         }
      });
   },
   { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((p) => io.observe(p));

// function splitTextByWord(el, stagger = 0.06) {
//    const text = el.textContent.trim();
//    el.setAttribute("aria-label", text);
//    el.innerHTML = "";
//    const words = text.split(" ");
//    words.forEach((w, idx) => {
//       const span = document.createElement("span");
//       span.className = "char";
//       span.setAttribute("aria-hidden", "true");
//       span.textContent = w + (idx < words.length - 1 ? " " : "");
//       span.style.setProperty("--delay", `${(idx * stagger).toFixed(3)}s`);
//       el.appendChild(span);
//    });
// }
