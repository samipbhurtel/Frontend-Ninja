// //    ..............Scroll Button JS Begins..............................
   


document.addEventListener("scroll", handleScroll);
//Get the button
var myBtn = document.querySelector("#myBtn");

function handleScroll() {
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.1;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    //show button
    myBtn.style.display = "block";
  } else {
    //hide button
    myBtn.style.display = "none";
  }
}

myBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
       


//    ..............Scroll Button JS Ends..............................


//    ..............Hamburger JS Begins..............................
   
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-100%';
}

//    ..............Hamburger JS Ends..............................


