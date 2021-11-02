var topButton = document.getElementById("topButton");


// header Fixed
window.onscroll = function() {
    const docScrollTop = document.documentElement.scrollTop;
    
    if (window.innerWidth > 795) {
        if(docScrollTop > 100) {
            document.querySelector("header").classList.add("fixed");
        }
        else {
            document.querySelector("header").classList.remove("fixed");
        }
    }
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
      } else {
        topButton.style.display = "none";
      }
};




// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}