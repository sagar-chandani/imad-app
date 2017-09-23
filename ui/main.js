
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
    //Create a request object 
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState ===  XMLHttpRequest.DONE){
            //take some action
            
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //if not
    };
  
  //Make the request
  request.open('GET', 'http://spc1194.imad.hasura-app.io/counter',true);
  request.send(null);
  
  
};


//submit name

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  //make a request to the serveer and send the name
  
  
  //make the list of names and render is as a list
  var names = ['name1','name2','name3','name4'];
  var list = '';
  for(var i = 0; i<names.length; i++){
      list += '<li>' + names[i] + '</li>';
  }
  
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
  
};
