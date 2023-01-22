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
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  
  // Toggle between showing and hiding the sidebar when clicking the menu icon
  var mySidebar = document.getElementById("mySidebar");
  
  function w3_open() {
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
  }
  
  // Close the sidebar with the close button
  function w3_close() {
      mySidebar.style.display = "none";
  }