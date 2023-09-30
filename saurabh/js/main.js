// this code for portfolio tabs change
const categoryTabs = document.querySelectorAll(".category-tab");

categoryTabs.forEach((categoryChange) => {
  categoryChange.addEventListener("click", () => {
    categoryTabs.forEach((t) => t.classList.remove("active"));
    categoryChange.classList.add("active");
  });
});

// bodymovin.loadAnimation({
//   container: document.getElementById("testimonial-rating"),
//   path: "/js_files/star.json",
// });

const animationContainer = document.getElementById("testimonial-rating");
const animationData = {
  container: animationContainer,
  renderer: "svg", // or 'canvas' for a different rendering option
  loop: true, // Set to true for looped animations
  autoplay: true, // Set to true to automatically play the animation
  path: "./js_files/star.json", // Path to your JSON animation file
};

const animation = lottie.loadAnimation(animationData);
animationContainer.style.width = "100%";
animationContainer.style.height = "30px";

const secondAnimationContainer = document.getElementById(
  "testimonial-rating-second"
);
const secondAnimationData = {
  container: secondAnimationContainer,
  renderer: "svg", // Specify the renderer type as a string
  loop: true,
  autoplay: true,
  path: "./js_files/star.json",
};

const secondAnimation = lottie.loadAnimation(secondAnimationData); // Use "secondAnimationData" instead of "animationData"
secondAnimationContainer.style.width = "100%";
secondAnimationContainer.style.height = "30px";
