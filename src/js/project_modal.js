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

   const projectLinksContainer = document.querySelector(
      ".project-modal-content-links-container"
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

   if (currentProjectInfo.github.length > 0) {
      currentProjectInfo.github.forEach((githubLink) => {
         addLink("Github:", githubLink, projectLinksContainer);
      });
   }

   if (currentProjectInfo.site) {
      addLink("Sitio:", currentProjectInfo.site, projectLinksContainer);
   }
};

const addLink = (tag, url, container) => {
   const linkItem = document.createElement("div");
   linkItem.classList.add("project-modal-content-link-item");

   const github = document.createElement("p");
   github.textContent = tag;

   const link = document.createElement("a");
   link.target = "_blank";
   link.href = url;
   link.textContent = url;
   link.classList.add("reveal");
   splitTextByChar(link);
   io.observe(link);

   linkItem.append(github);
   linkItem.append(link);
   container.append(linkItem);
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

   const projectLinksContainer = document.querySelector(
      ".project-modal-content-links-container"
   );

   projectTitle.textContent = "Unknown";
   projectStoryContainer.innerHTML = "";
   projectTechContainer.innerHTML = "";
   projectScreenShots.innerHTML = "";
   projectLinksContainer.innerHTML = "";
};

const projectConstants = {
   "villamar rewards": {
      title: "Villamar Rewards",
      story: [
         "El Hotel *Villamar Princesa* vivía bajo una pequeña pero persistente calamidad: *las antiguas tarjetas de membresía*, objetos cotidianos que el personal llamaba en voz baja “las fichas perdidas”, parecían desvanecerse de los bolsillos de los huéspedes en los momentos más inoportunos. Lo que al principio fue un susurro de incomodidad pronto se convirtió en una deuda tangible: reimpresiones costosas, cajas registradoras abiertas sin resultados y la sensación, casi supersticiosa, de que algo —una falla, un descuido o una suerte de maldición administrativa— acechaba los pasillos.",
         "La solución, concebida con rigor y discreción, fue desterrar lo físico y conjurar una *alternativa digital*: una tarjeta de membresía segura, robusta y fácil de usar que reemplazó la vulnerabilidad por la confianza. Así, el Hotel Villamar Princesa recuperó su economía y su calma; la vieja inquietud se disolvió como niebla en la mañana, y lo que quedaba era un sistema eficiente, transparente y digno de su leyenda.",
      ],

      technologies: [
         { name: "React js", image: "./src/assets/image/react_icon.svg" },
         {
            name: "Postgresql",
            image: "./src/assets/image/postgre_sql_icon.svg",
         },
         { name: "strapi", image: "./src/assets/image/strapi_icon.svg" },
      ],

      screenshots: [
         "./src/assets/image/villamar_rewards_1.jpeg",
         "./src/assets/image/villamar_rewards_2.jpeg",
         "./src/assets/image/villamar_rewards_3.jpeg",
         "./src/assets/image/villamar_rewards_4.jpeg",
         "./src/assets/image/villamar_rewards_5.jpeg",
      ],

      github: [],
      site: "https://sistemafidelizacion-production.up.railway.app/",
   },

   tropix: {
      title: "Tropix",
      story: [
         "En *Acapulco* se fue gestando un mal silencioso: la industria hotelera incrementaba las tarifas de las sesiones fotográficas para turistas mientras, en las sombras, los fotógrafos recibían compensaciones cada vez más insignificantes por su trabajo. Lo que empezó como una práctica comercial se convirtió en una pesadilla cotidiana —clientes insatisfechos, talento explotado y una experiencia turística empobrecida.",
         "De esa impotencia nació *Tropix*: una plataforma de sesiones fotográficas concebida para restituir la justicia en el ecosistema. tropix conecta turistas y fotógrafos mediante un sistema transparente de precios que respeta el valor del servicio y asegura una remuneración digna para los profesionales. Así, la cámara deja de ser cómplice de la injusticia y recupera su función: capturar memorias sin explotar a quienes las producen.",
      ],

      technologies: [
         { name: "React js", image: "./src/assets/image/react_icon.svg" },
         {
            name: "Postgresql",
            image: "./src/assets/image/postgre_sql_icon.svg",
         },
         {
            name: "Spring Boot",
            image: "./src/assets/image/spring_boot_icon.svg",
         },
      ],

      screenshots: [
         "./src/assets/image/tropix_1.png",
         "./src/assets/image/tropix_2.png",
         "./src/assets/image/tropix_3.png",
         "./src/assets/image/tropix_4.png",
         "./src/assets/image/tropix_5.png",
         "./src/assets/image/tropix_6.png",
      ],

      github: [
         "https://github.com/DavidAvila502/PhosellApi",
         "https://github.com/DavidAvila502/PhosellUi",
      ],
      site: null,
   },
};
