document.getElementById('login').addEventListener('click', function() {
    const userMail = document.getElementById('user-mail');
    const userField = userMail.value;
    
    const userPass = document.getElementById('user-password');
    const passField = userPass.value;

    if (userField === 'ruhulamin@gmail.com' && passField === '123456'){
        window.location.href = 'dashboard.html';
    } else{
        alert('Invalid User! Please, Enter Correct Password.')
    }
})