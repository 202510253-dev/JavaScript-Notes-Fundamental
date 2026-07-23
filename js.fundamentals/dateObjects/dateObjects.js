// Date Objects = Objects that contain values that represent dates and times\
//                These date objects can be changed formatted


// Date(year, month, hour, minute, second, ms)
//const date = new Date(2023, 4, 28, 2, 3, 4, 5); //("2023-04-28T02:03Z")

//console.log(date);  // this is how we display exact date and time


const date = new Date();

date.setFullYear(2024);
date.setMonth(4);
date.setDate(5);
date.setHours(1);
date.setMinutes(3);
date.setSeconds(5);


console.log(date);


//const year = date.getFullYear();
//const month = date.getMonth();
//const day = date.getDate();
//const hour = date.getHours();
//const minutes = date.getMinutes();
//const seconds = date.getSeconds();
//const dayOfweek = date.getDay();


//console.log(year)
//console.log(month)
//console.log(day)
//console.log(hour)
//console.log(minutes)
//console.log(seconds)
//console.log(dayOfweek)

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if (date1 < date2) {
    console.log(`It is ${date2} and Happy New Year!`)

}