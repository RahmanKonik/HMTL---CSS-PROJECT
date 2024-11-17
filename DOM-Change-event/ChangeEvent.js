

// User input the username in test area we show it in web page
// Using DOM 'change' event.

// selcct the class name from html file

let userName = document.querySelector(".textarea");
let showName = document.querySelector(".name");

userName.addEventListener('change', function(event){
    showName.textContent = `You name: ${event.target.value}`;
});