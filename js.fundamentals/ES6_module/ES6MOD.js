// ES6 Modules = An external file that contains reusable code that can be imported into other JavaScript files.
//              Write reusable code for many different apps.
//              Can contain variables, classes, functions .... and more
//              Introduced as part of ECMAScript 2015 update.

import { PI, getCircumference, getArea, getVolume } from './mathUtil.js';

console.log(PI);
const Circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${Circumference.toFixed(2)} cm`)
console.log(`${area.toFixed(2)} cm^2`)
console.log(`${volume.toFixed(2)} cm^3`)

// ES6 MODULES:
// 1. Maintainability: Code is split across multiple files based on purpose (e.g., math helpers, UI elements, API calls).
// 2. Strict Mode by Default: All code inside ES6 modules automatically runs in JavaScript's 'strict mode' (prevents unsafe actions).
// 3. Named vs Default Exports:
//    - Named Exports (what you used): Requires curly braces `{ PI, getArea }`. Names must match exactly.
//    - Default Export: One per file (`export default class User...`). Can be imported without curly braces and renamed freely.

// PRACTICALLITY

// You will frequently run into situations where two different modules export functions with the same name.
// if you try import both directly, JavaScript will throw a namin conflic error. To solve this practically,
// developers use the (as) keyword to rename imports on the fly

// ===================================================================
// import { getArea as getCircleArea } from './mathUtil.js';
// import { getArea as getCountryArea } from './geoUtil.js';

// const circleArea = getCircleArea(10);
// const countryArea = getCountryArea("Philippines");
// ===================================================================

// this maintains incredibly clean, human-readable code even when handling dozens of different external Utilities. 