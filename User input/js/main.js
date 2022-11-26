alert("hello world");

let myBoolean = confirm("ok === True\nCancel === False");
console.log(myBoolean);

let name = prompt("please enter your name.");
if(name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
} else {
    console.log("you didnt enter your name")
}
console.log(name ?? " you didn't enter your name");