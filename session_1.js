window.addEventListener('load', function() {
    console.log("Document is ready")

    function onClikButton() {
        alert('Somebody is trying to change color');
    }

    var btn = document.getElementById('click-btn');
    btn.addEventListener('click', onClikButton);

})

/*
     --> function: like a slave for execute some orders


     function sayHello (firstname) {
         alert('Hello ' + firstname);
     } 

     variables 
        -> string "..." '...' `...`
        -> number 10 0 -12 1e23 1^2 1_000
        -> array [.. , ... , ...] => [1, "string" , [23, "chaine de caractères"] ]
        -> object { key: "value", key2: "new value" }  { firstname: "Alexander", surname: "Sacha" }
        --> can be function
        --> Example:
            var sayHello = function (firstname) {
                alert('Hello ' + firstname);
            } 
*/ 