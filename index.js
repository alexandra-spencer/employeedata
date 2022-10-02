

// api url
const api_url =
      "https://reqres.in/api/users";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);


// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(info) {
    let tile =
        `<div class="row">

         </div>`;

    // Loop to access all rows
    for (let r of info.data) {
        tile += `<div class="column">
        <div class="card">
    <img src=${r.avatar}>
    <p>${r.first_name} ${r.last_name}</p>
    <a href="mailto:${r.email}"><button>Contact</button></a>
    </div>
</div>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tile;
}



