var appOverFlow = false;

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