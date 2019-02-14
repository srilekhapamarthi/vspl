
window.onscroll = function() {
  //show vspl icon on navbar on scroll
myID = document.getElementById("logo_nav");

  var y = window.scrollY;
  if (y>=93) {
    // console.log(y);
      // console.log("scrolling.............")
    myID.classList.add("nav-logo-show");
    myID.classList.add("zoomIn");
    myID.classList.remove("nav-logo-hide");
    myID.classList.remove("zoomOut");
  } else {
    // console.log("not scrolling.............")
    myID.classList.add("zoomOut");
    // myID.classList.add("nav-logo-hide");
    myID.classList.remove("nav-logo-show");
    myID.classList.remove("zoomIn");
    
  }
  let mainNavLinks = document.querySelectorAll(".side-nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight +130> fromTop
    ) {
      link.classList.add("current");
      console.log("event listener window")
    } else {
      link.classList.remove("current");
    }
  });
});
};



