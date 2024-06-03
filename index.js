const circles = document.querySelectorAll(".sircle");
const progressBar = document.querySelector(".indicator");
const buttons = document.querySelectorAll("button");

let currentSteps = 1;

const updateSteps = (e) =>{
    currentSteps = e.target.id === "next" ? ++currentSteps : --currentSteps;
    console.log(currentSteps);

    circles.forEach((circle,index)=>{
        circle.classList[`${index < currentSteps ? "add" : "remove"}`]("active")
    })
    progressBar.style.width = `${((currentSteps - 1) / (circles.length - 1)) * 100}%`;


    if(currentSteps === circles.length){
        buttons[1].disabled = true;
    }else if (currentSteps ===1){
        buttons[0].disabled = true;
    }else{
        buttons.forEach((buttons)=> (buttons.disabled = false))
    }
}

buttons.forEach((button)=>{
    button.addEventListener("click", updateSteps);
});
