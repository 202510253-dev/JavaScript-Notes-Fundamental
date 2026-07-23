// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, omages, files)
//         Simplifies asynchronous data fetching in JavaScript and used for interacting with APIs tp retrive
//         and send data asynchromously over the web.
//         fetch(url, {options} another examples of this is (GET) a resource you can use.
//         (POST) to send some data (PUT) to replace some data (DELETE) to delete some data)

//fetch("https://pokeapi.co/api/v2/pokemon/pikachu") // IF 404 means we can't find the resources
//    .then(response => response.json())
//    .then(data => console.log(data.id)) // You can directly get the API to the web using this
//    .catch(error => console.error(error))


//fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//    .then(response => {
//        if (!response.ok) {
//            throw new Error("Could not Fetch Resource");
//        }
//        return response.json();
//    })
//    .then(data => console.log(data))
//    .catch(error => console.error(error))      // THIS SETS FOR CHECKING A PROPER API USING ERRR

// -------------- USING SYNC AND AWAIT MEATHOD --------------
async function fetchData() {

    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource")
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default // SPRITES IS 2D image or animation
        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block"
    }
    catch (error) {
        console.error(error)

    }
}