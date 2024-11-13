
for( let number = 0; number < document.querySelectorAll(".myButton").length; number++){

    document.querySelectorAll(".myButton")[number].addEventListener("click", function(){

        const text = this.innerHTML;

        document.querySelector("h1").innerHTML = text+ " is clicked";

    });

};
