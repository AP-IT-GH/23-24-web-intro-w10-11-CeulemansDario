const brands = ["Illy", "Gran Maestro Italiano", "Segafredo", "Lavazza", "Starbucks", "Fairtrade Original"];
function random_item(brands) {
    return brands[Math.floor(Math.random() * brands.length)];
}


fetch('https://randomuser.me/api/?results=6')
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response.status);
        }
    })


    .then(function (response) {
        console.log(response);
        let html = '<section class="row">';
        for (let i = 0; i < response.results.length; i++) {
            const user = response.results[i];
            html += `<div class="card col-12 col-sm-6 col-md-4">

			<img src="${user.picture.large}" class="card-img-top" alt="foto van ${user.name.first} ${user.name.last}">

			<div class="card-body">
			<p class="card-title text-uppercase fs-6 fw-bolder pt-3">${user.name.first} ${user.name.last}</p>
			<p class="card-text h6 small mt-2">Ik kom uit ${user.location.country} en ben fan van de koffiebonen van ${random_item(brands)}!</p>
			<a href="mailto:${user.email}">
			  <i class="bi bi-envelope koffiebruin fs-3"></i>
			</a>
            </div>
      </div>`;
        }
        html += '</section>';
        document.getElementById("clients").innerHTML = html;
    })

    .catch(function (error) {
        console.error("Error with message: " + error)
    });