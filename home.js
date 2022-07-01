if(localStorage.getItem('token') == null){
    alert('You need to login to access the home page.')
    window.location.href= 'http://127.0.0.1:5500/index.html'
}

function logout() {
    localStorage.removeItem('token')
    window.location.href= 'http://127.0.0.1:5500/index.html'
}