

for ( let number = 0; number < document.querySelectorAll(".button").length; number++){

    document.querySelectorAll(".button")[number].addEventListener("click", function(){

        let text = this.innerHTML;

        myButton(text);
        myStyleAdd(number);


    });
}

function myButton(text){
    document.querySelector("h2").innerHTML ="Button "+ text + " clicked now.";
}

function myStyleAdd(number){
    document.querySelectorAll(".button")[number].classList.add("animation");

    setTimeout( function(){
        document.querySelectorAll(".button")[number].classList.remove("animation");
    }, 500);

    // settimeout method( function name, time(how long it will be stay))
}
