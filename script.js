let page = 1
let maxPage = 10

document.addEventListener("click", function(e){

if(e.clientX < window.innerWidth/2){
page--
}else{
page++
}

if(page < 1) page = 1
if(page > maxPage) page = maxPage

document.getElementById("comicPage").src = "images/c1-" + page + ".jpg"

})