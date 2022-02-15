var Money = 0; // Nynější Peníze
var MoneyPerClick = 1; // Peníze za Klik
var MoneyPerSecond = 0; // Peníze za Vteřinu
var Upgrade = 50; // Cena Upgradu

var Build1Cost = 15;
var Build2Cost = 100;

function Init() {
    // Zavolá pokaždé, když hru zapneme
    setInterval(Second, 1000);
}

function Click() {
    Money = Money + MoneyPerClick;
    document.querySelector("#money").innerText = Money + " $R";
}

function Up() {
    if (Money >= Upgrade) {
        // Dostatek
        MoneyPerClick = MoneyPerClick * 2;    // MoneyPerClick *= 2;
        Money = Money - Upgrade;              // Money -= Upgrade;
        Upgrade = Upgrade * 3;                // Upgrade *= 3;

        document.querySelector("#money").innerText = Money + " $R";
        document.querySelector("#upgrade").innerText = "Vylepšit (" + Upgrade + " $R)";
    } else {
        // Málo
        alert("Nemáš dost prostředků.");
    }
}

function Second() {
    Money = Money + MoneyPerSecond // Money += MoneyPerSecond
    document.querySelector("#money").innerText = Money + " $R";
}

function Build(cislobudovy) {
    if (cislobudovy == 1) {
        // Kid
        if (Money >= Build1Cost) {
            // Dostatek
            MoneyPerSecond = MoneyPerSecond + 0.1;
            Money = Money - Build1Cost;
            Build1Cost = Math.ceil(Build1Cost * 1.1);
    
            document.querySelector("#money").innerText = Money + " $R";
            document.querySelector("#upgrade1").innerText = "Kid (" + Build1Cost + " $R)";
        } else {
            // Málo
            alert("Nemáš dost prostředků.");
        }
    } else {
        // Teen
        if (Money >= Build2Cost) {
            // Dostatek
            MoneyPerSecond = MoneyPerSecond + 1;
            Money = Money - Build2Cost;
            Build2Cost = Math.ceil(Build2Cost * 1.1);
    
            document.querySelector("#money").innerText = Money + " $R";
            document.querySelector("#upgrade1").innerText = "Kid (" + Build2Cost + " $R)";
        } else {
            // Málo
            alert("Nemáš dost prostředků.");
        }
    }
}