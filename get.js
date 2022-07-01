
async function getUsers() {
  let response = await fetch("http://localhost:3000/register");
  let data = await response.json();
  let userName = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let alert = document.getElementById("alert_success");

  const findUser = data.find(user => user.username.includes(userName) && user.password.includes(pass));
  
   function get(){

    if (findUser === undefined){
      alert.style.color = "#9c0e04"
      alert.innerHTML="Check your information, something is Wrong !"
    
    }else if((userName === '') || (pass === '')){
      alert.style.color = "#9c0e04"
      alert.innerHTML="You left some information out!" 
    
    }else if(findUser){
      alert.style.color = "#10725b"
      alert.innerHTML="WELCOME!"
    
    }else{
      alert.style.color = "#9c0e04"
      alert.innerHTML="ERROR!"
    }
  };
   
  get()

}