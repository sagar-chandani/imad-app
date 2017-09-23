
/*
console.log('Loaded!');


//change text to new value


var element = document.getElementById('main-text');
element.innerHTML = "New Value"

//move image to right

var img = document.getElementById('madi');
var  marginLeft = 0;

function moveRight(){
    
    marginLeft = marginLeft + 2;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function(){
  var interval = setInterval(moveRight, 50);
};
*/

//Counter code

var button = document.getElementById('counter');
button.onclick = function(){
    //Make a request to counter endpoint 
    
    //capture the response and store it in a variable
    
    //render the value in the span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}
