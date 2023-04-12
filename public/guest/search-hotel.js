const baseUrl = 'http://localhost:2400/api/v1';


const  searchHotel = (event) => {
    event.preventDefault();

    const rooms = document.getElementById('rooms');
    const adults = document.getElementById('adults');
    const children = document.getElementById('children')
    

    const data = {
        rooms: rooms.value,
        adults: adults.value,
        children: children.value
    }

    fetch(`${baseUrl}/guest/search`, {
        method: "POST",
        body: JSON.stringify(data),
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
                window.location.href = '/guest/rooms.html';
            }, 2000);
        } else {
            alertBox.innerHTML = `<div class="alert alert-danger " role="alert">${data.message}</div>`;
        }
    }).catch((error) => {
        console.log(error);
    })

}
