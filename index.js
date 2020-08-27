window.onload = function () {

    // this gets a element with an ID of 'joke-text' and sets it to a variable
    let joketext = document.getElementById("joke-text");

    // this sets the textContent of a HTML element to something
    joketext.textContent = "tadaka was balanced on release";
}

function handleItemButton() {
    console.log("item button");

    // this gets an element with an ID of 'joke-item' and sets it to a variable called 'joke'
    const joke = document.getElementById("joke-item");

    //joke.classList.remove("joke");
    //joke.classList.add("newjoke");

    /// Toggle adds or removes a class depending on the current state
    //          if it has a class called newjoke - it removes it
    ///         if it doesnt - it adds it
    joke.classList.toggle("newjoke");
}

function handleTextButton() {

    console.log("text button");

    // this gets a HTML element with an ID of 'joke-text' and sets it to a variable called 'joketextelement'
    var joketextelement = document.getElementById("joke-text");

    console.log(joketextelement);

    // this created a (Boolean - true or false) depending on if the HTML element contained a class called 'joke-class-one'
    var classString = joketextelement.classList.contains("joke-class-one");

    console.log(classString);

    //this checks whether classString is true or false
    if (classString == true) {
        //if it is true - it removes 'joke-class-one' and adds 'joke-class-two'
        joketextelement.classList.remove("joke-class-one");
        joketextelement.classList.add("joke-class-two");
    } else {
        //if it is false - it removes 'joke-class-two' and adds 'joke-class-one'
        joketextelement.classList.add("joke-class-one");
        joketextelement.classList.remove("joke-class-two");
    }
}

function GetRandomJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke', {
            method: 'GET'
        })
        .then(
            //? response (raw text) - we convert into json
            response => response.json()
        )
        .then(
            //? data ( converted json) - output to console
            data => console.log(data)
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}