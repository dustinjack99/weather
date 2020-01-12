
const days = document.querySelectorAll(".days");
const temp = document.querySelectorAll(".temp");
const weath = document.querySelectorAll(".weather");
const humid = document.querySelectorAll(".humidity");
const icon = document.querySelectorAll(".icon");
const desc = document.querySelectorAll(".descrip");
const submit = document.querySelector("#submit");
const cityEnt = document.querySelector("#city");

submit.addEventListener('click', function(e) {
    e.preventDefault();
    let que = cityEnt.textContent
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${que},us&appid=e5e28d699069f90b230ad4d66e6a33b1&units=imperial`
    fetch(url)
        .then(function(response){
            return response.json();
        })
            .then(function(json) {
                console.log(json)
                
                days[0].textContent = json.list[0].dt_txt;
                days[1].textContent = json.list[9].dt_txt;
                days[2].textContent = json.list[18].dt_txt;
                days[3].textContent = json.list[27].dt_txt;
                days[4].textContent = json.list[37].dt_txt;

                temp[0].textContent = json.list[0].main.temp;
                temp[1].textContent = json.list[9].main.temp;
                temp[2].textContent = json.list[18].main.temp;
                temp[3].textContent = json.list[27].main.temp;
                temp[4].textContent = json.list[37].main.temp;

                weath[0].textContent = json.list[0].weather[0].main;
                weath[1].textContent = json.list[9].weather[0].main;
                weath[2].textContent = json.list[18].weather[0].main;
                weath[3].textContent = json.list[27].weather[0].main;
                weath[4].textContent = json.list[37].weather[0].main;

                humid[0].textContent = json.list[0].main.humidity;
                humid[1].textContent = json.list[9].main.humidity;
                humid[2].textContent = json.list[18].main.humidity;
                humid[3].textContent = json.list[27].main.humidhumid
                humid[4].textContent = json.list[37].main.humidity;

                let i1 = json.list[0].weather[0].icon;
                let i2 = json.list[9].weather[0].icon;
                let i3 = json.list[18].weather[0].icon;
                let i4 = json.list[27].weather[0].icon;
                let i5 = json.list[37].weather[0].icon;
                
                let i1Url = "http://openweathermap.org/img/w/" + i1 + ".png";
                let i2Url = "http://openweathermap.org/img/w/" + i2 + ".png";
                let i3Url = "http://openweathermap.org/img/w/" + i3 + ".png";
                let i4Url = "http://openweathermap.org/img/w/" + i4 + ".png";
                let i5Url = "http://openweathermap.org/img/w/" + i5 + ".png";
                
                icon[0].setAttribute('src', i1Url)
                icon[1].setAttribute('src', i2Url)
                icon[2].setAttribute('src', i3Url)
                icon[3].setAttribute('src', i4Url)
                icon[4].setAttribute('src', i5Url)
                
                
            });
})


cityEnt.addEventListener('input', typeInp);
        
function typeInp (e) {
    cityEnt.textContent = e.target.value;
            
}

