let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/avatar.png') {
        myImage.setAttribute ('src', 'images/logo.png');
    } else {
        myImage.setAttribute ('src', 'images/avatar.png');
    }    
}