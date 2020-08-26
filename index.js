window.onload = function () {
    let joketext = document.getElementById("joke-text");

    joketext.textContent = "tadaka was balanced on release";

    console.log(joketext);
}

function handleItemButton() {
    console.log("item button");

    const joke = document.getElementById("joke-item");

    //joke.classList.remove("joke");
    //joke.classList.add("newjoke");

    joke.classList.toggle("newjoke");
}

function handleTextButton() {

    console.log("text button");

    var joketextelement = document.getElementById("joke-text");

    console.log(joketextelement);

    var classString = joketextelement.classList.contains("joke-class-one");

    console.log(classString);

    if (classString == true){
        joketextelement.classList.remove("joke-class-one");
        joketextelement.classList.add("joke-class-two");
    }
    else {
        joketextelement.classList.add("joke-class-one");
        joketextelement.classList.remove("joke-class-two");
    }
}