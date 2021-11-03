// scroll header & go to top button
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
      console.log('asd');
        document.querySelector("#topButton").classList.add("fixedbtn");
      } else {
        document.querySelector("#topButton").classList.remove("fixedbtn");
      }
};




// go to top button action
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}