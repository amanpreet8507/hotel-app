const hotelName = document.getElementById('hotel-name');
const allHotels = document.getElementById('all-hotels');
const baseUrl = 'http://localhost:2400/api/v1';
const token = localStorage.getItem('access-token');

function getHotelInfo() {
    const userInfo = JSON.parse(localStorage.getItem('current-user'));

    if (!userInfo) {
        alert("You need to login to access this page!");
        window.location.href = "/admin/admin-login.html";
    }
    hotelName.innerHTML = `Hey ${userInfo.name}`;
}


const getAllHotels = async () => {
    try {
        const response = await fetch(`${baseUrl}/posts`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        const responseWithJson = await response.json();
        renderPostUI(responseWithJson.data);
        console.log(responseWithJson);
    } catch (error) {
        console.log(error);
    }
}

const renderPostUI = (hotels) => {
    for (let i = 0; i < hotels.length; i++) {
        allHotels.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${hotels[i].name}</h5>
            <h6 class="card-title">${hotels[i].city}</h6>
            <p class="card-text">${hotels[i].state}</p>
            <p class="card-text">${hotels[i].rating}</p>

            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        `
    }
}

getHotelInfo();
getAllHotels();