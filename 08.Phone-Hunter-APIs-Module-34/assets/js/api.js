function fetchData(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => displayData(json))
}

function displayData(json){
  const getUser = document.getElementById('user-id');
  for(const user of json){
    console.log(user)
    
  }
}



