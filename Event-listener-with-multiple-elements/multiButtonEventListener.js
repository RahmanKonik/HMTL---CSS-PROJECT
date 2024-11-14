

for ( let number = 0; number < document.querySelectorAll(".buttons").length; number++) {

   document.querySelectorAll(".buttons")[number].addEventListener("click", function() {

    const text = this.innerHTML;
    document.querySelector("h2").innerHTML = text + " click now !.";

   });

};

