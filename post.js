

function cadastraUsuario(){
    event.preventDefault()
    let url = "http://localhost:3000/register";
    let userName = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let pass =document.getElementById('password').value;
    let pass2 =document.getElementById('password2').value;
    let message = document.getElementById('alert_success');
    let body = document.getElementById('form');
   
   body = {
        "username": userName,
        "email": email,
        "password": pass
    }
    
    if((pass === pass2) && (userName != '') && (email != '')) {
        fazPost(url, body)
        message.style.color= "#10725b"
        message.innerHTML="Your account is ready!"
    }else {
        message.style.color= "#9c0e04"
        message.innerHTML="Check your information, something is wrong!"
    }


    function fazPost(url, body){
        console.log(body)
        let request = new XMLHttpRequest()
        request.open("POST", url, true)
        request.setRequestHeader("Content-type", "application/json")
        request.send(JSON.stringify(body))
 
       
 
 }
    
}