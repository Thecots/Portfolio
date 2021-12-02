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


document.querySelector("#email").addEventListener('click',() => {
  navigator.clipboard.writeText("thecots22@gmail.com")
  document.querySelector(".copyMessage").classList.add("copya");
  setTimeout(() => {
    document.querySelector(".copyMessage").classList.remove("copya");
  },2000);

})

// go to top button action
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}