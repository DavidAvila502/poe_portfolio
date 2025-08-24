document.querySelectorAll(".card-project-viewproject-btn").forEach((btn) =>
   btn.addEventListener("click", () => {
      const projectCardBack = btn.closest(".project-card-back");
      const projectName = projectCardBack
         .querySelector(".card-project-title")
         ?.textContent.trim();
      cleanProjectInfo();
      setProjectsInfo(projectName);

      document.querySelector("main").style["zIndex"] = 0;
      document.body.style.overflowY = "hidden";
      const overlay = document.querySelector(".project-modal-overlay");
      overlay.style.opacity = 1;
      overlay.style["pointerEvents"] = "auto";
   })
);

document
   .querySelector(".project-modal-close-btn")
   .addEventListener("click", () => {
      document.querySelector("main").style["zIndex"] = "auto";
      document.body.style.overflowY = "auto";
      const overlay = document.querySelector(".project-modal-overlay");
      overlay.style.opacity = 0;
      overlay.style["pointerEvents"] = "none";
   });

const setProjectsInfo = (projectName) => {
   const projectTitle = document.querySelector(".project-modal-content-title");
   const projectStoryContainer = document.querySelector(
      ".project-modal-content-story"
   );
   const projectTechContainer = document.querySelector(
      ".project-modal-content-tech-container"
   );

   const projectScreenShots = document.querySelector(
      ".project-modal-content-screenShots"
   );
   projectName = projectName.toLowerCase();

   const currentProjectInfo = projectConstants[projectName];

   if (!currentProjectInfo) {
      projectTitle.textContent = "Unknown";

      return;
   }

   projectTitle.textContent = currentProjectInfo.title;
   currentProjectInfo.story.forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      p.classList.add("project-modal-story-text", "reveal");
      projectStoryContainer.append(p);

      splitTextByChar(p);
      io.observe(p);
   });

   currentProjectInfo.technologies.forEach((tech) => {
      const img = document.createElement("img");
      img.src = tech.image;
      img.alt = tech.name;
      img.title = tech.name;
      img.classList.add("project-modal-content-tech-icon");

      projectTechContainer.append(img);
   });

   currentProjectInfo.screenshots.forEach((shot, index) => {
      const img = document.createElement("img");
      img.src = shot;
      img.alt = `screenshot${index + 1}`;
      img.title = `screenshot${index + 1}`;

      projectScreenShots.append(img);
   });
};

const cleanProjectInfo = () => {
   const projectTitle = document.querySelector(".project-modal-content-title");
   const projectStoryContainer = document.querySelector(
      ".project-modal-content-story"
   );

   const projectTechContainer = document.querySelector(
      ".project-modal-content-tech-container"
   );
   const projectScreenShots = document.querySelector(
      ".project-modal-content-screenShots"
   );

   projectTitle.textContent = "Unknown";
   projectStoryContainer.innerHTML = "";
   projectTechContainer.innerHTML = "";
   projectScreenShots.innerHTML = "";
};

const projectConstants = {
   "villamar rewards": {
      title: "Villamar Rewards",
      story: [
         "El Hotel *Villamar Princesa* vivía bajo una pequeña pero persistente calamidad: *las antiguas tarjetas de membresía*, objetos cotidianos que el personal llamaba en voz baja “las fichas perdidas”, parecían desvanecerse de los bolsillos de los huéspedes en los momentos más inoportunos. Lo que al principio fue un susurro de incomodidad pronto se convirtió en una deuda tangible: reimpresiones costosas, cajas registradoras abiertas sin resultados y la sensación, casi supersticiosa, de que algo —una falla, un descuido o una suerte de maldición administrativa— acechaba los pasillos.",
         "La solución, concebida con rigor y discreción, fue desterrar lo físico y conjurar una *alternativa digital*: una tarjeta de membresía segura, robusta y fácil de usar que reemplazó la vulnerabilidad por la confianza. Así, el Hotel Villamar Princesa recuperó su economía y su calma; la vieja inquietud se disolvió como niebla en la mañana, y lo que quedaba era un sistema eficiente, transparente y digno de su leyenda.",
      ],

      technologies: [
         { name: "React js", image: "./assets/image/react_icon.svg" },
         { name: "Postgresql", image: "./assets/image/postgre_sql_icon.svg" },
         { name: "strapi", image: "./assets/image/strapi_icon.svg" },
      ],

      screenshots: [
         "./assets/image/villamar_rewards_1.jpeg",
         "./assets/image/villamar_rewards_2.jpeg",
         "./assets/image/villamar_rewards_3.jpeg",
         "./assets/image/villamar_rewards_4.jpeg",
         "./assets/image/villamar_rewards_5.jpeg",
      ],
   },
};
