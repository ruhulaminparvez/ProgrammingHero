const loadPhones = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const response = await fetch(url)
  const data = await response.json()
  displayPhones(data.data)
}

const displayPhones = (phones) => {
  const phoneContainer = document.getElementById('card-container');
  phoneContainer.innerHTML = '';

  phones.forEach(phone => {
    parentDiv = document.createElement('div');
    parentDiv.classList.add('col');
    parentDiv.innerHTML = `
      <div class="card h-100">
        <img src="${phone.image}" class="card-img-top p-3 w-50 d-flex justify-content-center m-auto">
        <div class="card-body">
          <h5 class="card-title text-center">${phone.phone_name}</h5>
        </div>
        <div class="card-footer">
          <button onclick="loadDetails('${phone.slug}')" type="button" class="btn btn-info text-white d-flex justify-content-center m-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>
        </div>
      </div>
    `
    phoneContainer.appendChild(parentDiv);
  });
}

const loadDetails = async (phoneId) => { 
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
  const response = await fetch(url);
  const data = await response.json();
  displayDetails(data.data);
}


const displayDetails = (singleDetail) => { 
  const phoneDetails = document.getElementById('get-phone-details');
  phoneDetails.textContent = '';

  const parentDiv = document.createElement('div');
  parentDiv.innerHTML = `
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="phoneModalLabel">${singleDetail.name} - Details</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="d-flex justify-content-center align-items-center">
                    <img class="img-fluid" src="${singleDetail.image}">
                  </div>
                  <div>
                    <table class="table table-striped table-hover my-5">
                      <tbody>
                        <tr>
                          <th scope="row">Name</th>
                          <td colspan="6">${singleDetail.name}</td>
                        </tr>
                        <tr>
                          <th scope="row">Brand</th>
                          <td colspan="6">${singleDetail.brand}</td>
                        </tr>
                        <tr>
                          <th scope="row">ReleaseDate</th>
                          <td colspan="6">${singleDetail.releaseDate}</td>
                        </tr>
                        <tr>
                          <th scope="row">Storage</th>
                          <td colspan="6">${singleDetail.mainFeatures.storage}</td>
                        </tr>
                        <tr>
                          <th scope="row">Display</th>
                          <td colspan="6">${singleDetail.mainFeatures.displaySize}</td>
                        </tr>
                        <tr>
                          <th scope="row">ChipSet</th>
                          <td colspan="6">${singleDetail.mainFeatures.chipSet}</td>
                        </tr>
                        <tr>
                          <th scope="row">Memory</th>
                          <td colspan="6">${singleDetail.mainFeatures.memory}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
  `;
  phoneDetails.appendChild(parentDiv);

}


document.getElementById('btn-search').addEventListener('click', function () {
  const getSearchValue = document.getElementById('get-search-value');
  const searchText = getSearchValue.value;
  loadPhones(searchText);
});