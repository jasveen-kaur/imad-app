//submit username/password to login

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //Make the request to the server and send the name.
     //create a request object
    var request =new XMLHttpRequest();
    
    //captures the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                console.log('user logged in');
                alert('Logged in successfully');
            }
            else if (request.status === 403){
                alert('username/password is uncorrect');
            }
            else if (request.status === 500){
                alert('something went wrong on the server');
            } 
        }
    };
    
    //make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://jezzchhabra.imad.hasura-app.io/login' ,true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
    
   
};