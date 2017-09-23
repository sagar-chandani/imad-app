console.log('Loaded!');



//change text to new value


var element = document.getElementById('main-text');
element.innerHTML = "New Value"

//move image to right

var img = document.getElementById('madi');
img.onClick = function(){
  madi.style.marginLeft= "100px";  
};