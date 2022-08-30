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
          <button class="btn btn-info text-white d-flex justify-content-center m-auto">View Details</button>
        </div>
      </div>
    `
    phoneContainer.appendChild(parentDiv);
  });
}

document.getElementById('btn-search').addEventListener('click', function () {
  const getSearchValue = document.getElementById('get-search-value');
  const searchText = getSearchValue.value;
  loadPhones(searchText);
});