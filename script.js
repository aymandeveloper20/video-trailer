let displayer = document.getElementById("display");
let showBtn = document.getElementById("shower");
let blur = document.getElementById("blur");
let isRunning = false;
function display(){
    if(!isRunning){
        displayer.classList.add("show");
        displayer.classList.remove("hide");
        blur.classList.add("showBlur");
        blur.classList.remove("hideBlur");
        document.body.style.overflowY = "hidden";
        isRunning = true;
        console.log("HI");
    }
}
blur.addEventListener("click", ()=>{
    displayer.classList.add("hide");
    displayer.classList.remove("show");
    blur.classList.add("hideBlur");
    blur.classList.remove("showBlur");
    document.body.style.overflowY = "auto";
    isRunning = false;
})
showBtn.addEventListener("click",display)