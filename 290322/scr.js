function Init() {
    switchScreen('loading')
    switchScreen('menu_login')
}
function switchScreen(id) {
    for (let i = 0; i < document.getElementsByClassName('screen').length; i++) {
        document.getElementsByClassName('screen')[i].setAttribute('hidden', true)        
    }
    document.getElementById(id).removeAttribute('hidden');
}

function Register() {
    switchScreen('loading')
    switchScreen('main')
}
function Login() {
    switchScreen('loading')
    switchScreen('main')
}