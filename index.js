window.onload = function () {
    let joketext = document.getElementById("joke-text");

    joketext.textContent = "tadaka was balanced on release";

    joketext.id = "new-joke-text";

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
}