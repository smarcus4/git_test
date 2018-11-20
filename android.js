var colorStuff = document.getElementById("changeColor");
var android = document.getElementById("everything");
colorStuff.addEventListener("click", getRandom)


function getRandom(){
    // 16777215 (decimal) == ffffff in hexidecimal
    var newColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    
    // Convert hex to RGB:
    var rgbColor = newColor.replace('#','');
    var r = parseInt(rgbColor.substring(0,2), 16);
    var g = parseInt(rgbColor.substring(2,4), 16);
    var b = parseInt(rgbColor.substring(4,6), 16);
    var result = 'rgba(' + r + ',' + g + ',' + b + ')';
    
    document.getElementById("everything").style.backgroundColor = newColor;

  };