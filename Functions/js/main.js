function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(2,6));

function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("playerOne@randomEmail.com"));


const getUserName = function (email) {
        return email.slice(0, email.indexOf("@"));
}

console.log(getUserName("user@git.com"));

const arrowFun = (email) => {
        return email.slice(0, email.indexOf("@"));
}

console.log(arrowFun("getit@get.com"));

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(toProperCase("september"));

