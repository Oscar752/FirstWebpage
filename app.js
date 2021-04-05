// let random = Math.random();
// if (random = 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5");
//     console.log(random);
// } else {
//     console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5")
// }
// console.log(random);

// const dayOfWeek = prompt("ENTER A DAY!").toLowerCase();

// if (dayOfWeek == 'Monday') {
//     console.log("UUGHH I HATE MONDAYS")
// } else if (dayOfWeek === 'Sunday') {
//     console.log("YAY I LOVE SUNDAYS!")
// } else if (dayOfWeek === 'Friday') {
//     console.log("FRIDAY ARE DECENT , NOT BAD")
// } else {
//     console.log("I HATE THIS DAY")
// }

// 0 - 5 - FREE
// 5 - 10 - CHILD - $10
// 10 - 65 - ADULT - $20
// 65 + - SENIOR - $10

// const age = 3545454;

// if (age < 5) {
//     console.log("You are a baby. You get in for free")
// } else if (age < 10) {
//     console.log("You are a Child. You have to pay $10")
// } else if (age < 65) {
//     console.log("You are an Adult. You have to pay $20")
// } else {
//     console.log("You are Senior. You pay $10")
// }

const password = prompt("Please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    // Password canot include space
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password")
    } else {
        console.log("Password cannot include spaces")
    }
} else {
    console.log("TOO SHORT PASSWORD")
}


