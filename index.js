window.addEventListener("load", () => {
 const sounds = document.querySelectorAll(".sound");
 const keys = document.querySelectorAll(".keys div");
 const mainVisual = document.querySelector(".mainVisual");
 const colors = [
   "#60d191",
   "#d33030",
   "#c050d3",
   "#d3d250",
   "#603bd5",
   "#60c3d5",
   "#000000"
 ];

 keys.forEach((key, index) => {
   key.addEventListener("click", function() {
     sounds[index].currentTime = 0;
     sounds[index].play();
     createBubble(index);
   });
 });

 const createBubble = index => {
   const bubble = document.createElement("div");
   mainVisual.appendChild(bubble);
   bubble.style.backgroundColor = colors[index];
   bubble.style.animation = `jump 0.5s ease`;
   bubble.addEventListener("animationend", function() {
     mainVisual.removeChild(this);
   });
 };
});
