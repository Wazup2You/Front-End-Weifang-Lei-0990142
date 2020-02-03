let myImage = document.querySelector('img');

// Function to change header logo on click
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/avatar.png') {
        myImage.setAttribute ('src', 'images/logo.png');
    } else {
        myImage.setAttribute ('src', 'images/avatar.png');
    }    
}


    document.getElementById("but1").addEventListener("click", function(){
        document.body.style.background = "red"
      });
      document.getElementById("but2").addEventListener("click", function(){
        document.body.style.background = "yellow"
      });
      document.getElementById("but3").addEventListener("click", function(){
        document.body.style.background = "blue"
      });