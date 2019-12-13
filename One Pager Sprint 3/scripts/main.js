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

    // Function to change webpage background color
    function changeBodyBg(color){
        document.body.style.background = color;
    }
    