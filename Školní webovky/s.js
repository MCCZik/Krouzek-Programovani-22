function Init() {
    switchScreen('home');
}

function switchScreen(id) {
    for (let i = 0; i < document.getElementsByClassName("screen").length; i++) {
        document.getElementsByClassName("screen")[i].setAttribute("hidden", true);
    }
    document.getElementById(id).removeAttribute("hidden");
}