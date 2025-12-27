// Animation compétences
const skills = document.querySelectorAll(".skill span");
window.addEventListener("scroll", () => {
  skills.forEach(s => {
    const rect = s.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      s.style.width = s.dataset.w;
    }
  });
});