async function getUsers() {
  let response = await fetch("http://localhost:3000/register");
  let data = await response.json();
  let userName = document.getElementById("username");
  let userLabel = document.getElementById("userlabel");
  let pass = document.getElementById("password");
  let passLabel = document.getElementById("passlabel");
  let alert = document.getElementById("alert_success");

  
  function login() {
    let userValid = {
      username: "",
      password: "",
    };

    let listaUser = data;

    listaUser.forEach((item) => {
      if (userName.value == item.username && pass.value == item.password) {
        userValid = {
          username: item.username,
          password: item.password,
        };
      }
    });

    if(userName.value == userValid.username && pass.value == userValid.password){
        window.location.href= 'http://127.0.0.1:5500/home.html'

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)

        localStorage.setItem('token', token)

    }else{
       userLabel.setAttribute('style', 'color:#9c0e04')
       userName.setAttribute('style', 'border-color:#9c0e04')
       pass.setAttribute('style', 'border-color:#9c0e04')
       passLabel.setAttribute('style', 'color:#9c0e04')

       alert.style.color = '#9c0e04'
       alert.innerHTML = 'Something is wrong. Verify your user and password.'

       userName.focus()
    }


  }

  login();
}
