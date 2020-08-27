window.onload = function () {

}

function GetRandomJoke() {

    var randomJoke = fetch('https://official-joke-api.appspot.com/random_joke', {
            method: 'GET'
        })
        .then(
            response => response.json()
        )
        .then(
            data => {
                return data;
            }
        );

    return randomJoke;
}

async function DisplayText() {
    var joke = document.getElementById("joke");
    var punchline = document.getElementById("punchline");

    var getRandomJoke = await GetRandomJoke();

    joke.textContent = getRandomJoke.setup;
    punchline.textContent = getRandomJoke.punchline;

    HidePunchline(punchline);
}

function HidePunchline(punchline) {
    punchline.classList.add("hiddenText"); 
}

function RevealPunchline(){
    var punchline = document.getElementById("punchline");
    punchline.classList.remove("hiddenText");
}