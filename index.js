function toggleHamburger() {
  let x = document.getElementById("topnav");
  if(x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
