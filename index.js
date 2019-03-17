// function toggleHamburger() {
//   let x = document.getElementById("nav");
//   if(x.className === "navbar") {
//     x.className += " responsive";
//   } else {
//     x.className = "navbar";
//   }
// }
window.onload = function() {
  const nav = document.querySelector("nav ul")
  const navToggle = document.querySelector("nav .skip")
  if (navToggle) {
    navToggle.addEventListener("click", function(e) {
      if (nav.className == "open") {
        nav.className = "close";
      } else {
        nav.className = "open";
      }
      e.preventDefault();
    }, false);
  }
}




//
