//Variable set to prevent pages from scrolling if not needed
var appOverFlow = false;

//Universal page transition
//Takes "current" page and turns display off and "next page" on
function pageSlide(current, next){
    if(appOverFlow = false){
        document.querySelector("#" + next).style.display = "flex";
        document.querySelector("#" + current).style.display = "none";
        console.log(next);
    }
    else{
        document.querySelector("#" + next).style.display = "flex";
        document.querySelector("#" + current).style.display = "none";
        document.querySelector("#app").style.overflow = "scroll";
    }
}