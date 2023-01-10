let codingPressed = false;
const openDropdown = () => {
    let arrow = document.getElementById("codingArrow");
    if(codingPressed){
        arrow.style.animation="rotate 0.5s linear 0s 1 backwards"//css animation shorthand
        codingPressed = false;
        console.log("taakse")
    }
    else {
        arrow.style.animation="rotate 0.3s linear 0s 1 forwards" //css animation shorthand
        codingPressed = true;
       console.log("eteen")
    }
}