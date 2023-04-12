const baseUrl = 'http://localhost:2400/api/v1';

const loginFormSubmit = (event) => {
    event.preventDefault();

    const email = document.getElementById('email');
    

    const guest = {
        email: email.value,
    }

    fetch(`${baseUrl}/users/login`, {
        method: "POST",
        body: JSON.stringify(guest),
        headers: {
            'Content-Type': "application/json"
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        if (data.token) {
            localStorage.setItem('access-token', data.token);
            localStorage.setItem('current-user', JSON.stringify(data.user));
            alertBox.innerHTML = `<div class="alert alert-success" role="alert">${data.message}</div>`;
      
            setTimeout(() => {
                window.location.href = '/guest/search-hotel.html';
            }, 2000);
        } else {
            alertBox.innerHTML = `<div class="alert alert-danger " role="alert">${data.message}</div>`;
        }
    }).catch((error) => {
        console.log(error);
    })

}
loginFormSubmit();