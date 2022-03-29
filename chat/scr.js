function switchScreen(id) {
    for (let i = 0; i < document.getElementsByClassName('screen').length; i++) {
        document.getElementsByClassName('screen')[i].setAttribute('hidden', true);
    }
    document.getElementById(id).removeAttribute('hidden');
}

function init() {
    switchScreen('loading');
    switchScreen('menu');
}

function register() {
    switchScreen('loading');
    switchScreen('main');
}

function login() {
    switchScreen('loading');
    switchScreen('main');
}