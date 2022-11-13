let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
let Name = prompt ("Lütfen Adınızı Griniz:");
let myName = document.querySelector("#myName");
myName.innerHTML = Name;

function showTime () {
    let time = new Date();
    let day = days[time.getDay()];
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let secs = time.getSeconds();

    document.querySelector("#myClock").innerHTML= `${day}: ${hours}: ${minutes}: ${secs}`;
}

setInterval(showTime, 1000);