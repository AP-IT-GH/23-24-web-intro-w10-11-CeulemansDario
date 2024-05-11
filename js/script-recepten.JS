fetch('https://api.sampleapis.com/coffee/hot/')
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response.status);
        }
    })

    .then(function (response) {
        console.log(response);
        let html = '<div class="accordion accordion-flush" id="accordionExample">';
        console.log(response.length);
        for (let i = 0; i < response.length; i++) {
            const recipe = response[i];
            html += `<div class="accordion-item">

            <h2 class="accordion-header">
                <button class="accordion-button collapsed text-uppercase fs-6 fw-bolder pt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                ${recipe.title}
                </button>
              </h2>

              <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <img src="${recipe.image}" class="img-small float-start" alt="${recipe.title}"><span class="h6 mt-2">ingrediënten</span>: ${recipe.ingredients} <hr><span class="h6  mt-2">bereiding</span>: ${recipe.description}</div>
            </div>
      </div>`;
        }
        html += '</div>';
        document.getElementById("recepten").innerHTML = html;
    })

    .catch(function (error) {
        console.error("Error with message: " + error)
    });