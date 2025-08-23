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
      p.classList.add("project-modal-story-text");
      p.classList.add("reveal");
      projectStoryContainer.append(p);
   });
};

const cleanProjectInfo = () => {
   const projectTitle = document.querySelector(".project-modal-content-title");
   const projectStoryContainer = document.querySelector(
      ".project-modal-content-story"
   );

   projectTitle.textContent = "Unknown";
   projectStoryContainer.innerHTML = "";
};

const projectConstants = {
   "villamar rewards": {
      title: "Villamar Rewards",
      story: ["En el hotel Villamar princesa"],
   },
};
