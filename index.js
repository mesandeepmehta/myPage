let mainText = document.getElementById("greeting")
let pageEntire = document.querySelector("body")
pageEntire.addEventListener("scroll", function(){
    mainText.style.fontSize="500px"
})
mainText.addEventListener("dblclick", function(){
    pageEntire.style.backgroundColor="aliceblue"

})