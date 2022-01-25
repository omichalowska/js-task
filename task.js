// ToDo
/*
Task 1
Import array with users (from user1.json file) and write a function that will check if the phone number for every single user contains only digits
Result:
- if the phone number contains only digits then log true in the console
- if the phone number does not contain only digits then log which user's phone number is not correct e.g. "Phone number of user with ID 2 is not correct"

Task 2
Import array with users (from user1.json file) and users (from user2.js file) and compare them
Result:
- if the first email address of users1 is the same as the first email address of users2 (users1.users[1].emailAddress === users2.users[1].emailAddress) then do not log anything
- if the first email address of users1 is not the same as the first email address of users2 then log in the console e.g. "Email addresses of user with ID 1 are not the same. First email is: racks.jacson@test.tt; but second email is: racks.jecson@test.tt".

Compare email addresses, first names, last names and phone numbers.
*/



/* task 1 */

let document = require("./users1.json");

function checkPhone() {

    document.users.forEach(user => {
        const isNumber = user.phoneNumber.match(/^[0-9]+$/) != null
    
        if (isNumber) {
            console.log(true)
        }
        else {
            console.log(`Phone number of user with ID ${user.userId} is not correct`)

        }
    })


}

/* task 2 */

let document2 = require ("./users2.js")

function compareUsers() {

    document.users.forEach((user1, index) => {
        const user2 = document2.users[index]

        if (user1.emailAddress !== user2.emailAddress) {
            console.log(`Email addresses of user with ID ${user1.userId} are not the same. First email is: ${user1.emailAddress}; but second email is: ${user2.emailAddress}.`)  
        }

        if (user1.firstName !== user2.firstName) {
            console.log(`First names of user with ID ${user1.userId} are not the same. First name is: ${user1.firstName}; but second first name is: ${user2.firstName}.`)  
        }
        
        if (user1.lastName !== user2.lastName) {
            console.log(`Last names of user with ID ${user1.userId} are not the same. First last name is: ${user1.lastName}; but second last name is: ${user2.lastName}.`)  
        }

        if (user1.phoneNumber !== user2.phoneNumber) {
            console.log(`Phone numbers of user with ID ${user1.userId} are not the same. First phone number is: ${user1.phoneNumber}; but second phone number is: ${user2.phoneNumber}.`)  
        }
    })

}


compareUsers()
checkPhone()
