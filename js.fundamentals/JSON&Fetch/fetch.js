//fetch("person.json")
//    .then(response => response.json())
//    .then(value => console.log(value))

//fetch("people.json")
//    .then(response => response.json())
//    .then(value => console.log(value))


//fetch("names.json")
//    .then(response => response.json())
//   .then(value => console.log(value))

//Promise.all([
//    fetch("person.json"),
//    fetch("people.json"),
//    fetch("names.json")
//])
//    .then(responses => Promise.all(responses.map(r => r.json())))
//    .then(data => {
//        console.log(data[0]);
//        console.log(data[1]);
//        console.log(data[2])
//    })

// THIS IS HOW YOU DO IT IN ONE GO. UTILIZING Promise.all 

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployed)))
    .catch(error => console.error("error"))