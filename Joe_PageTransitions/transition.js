

function pageSlide(current, next){
    document.querySelector("#" + next).style.display = "flex";
    document.querySelector("#" + current).style.display = "none";
    console.log("test");
}