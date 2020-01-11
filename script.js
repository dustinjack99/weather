
const days = document.querySelectorAll(".days");
const submit = document.querySelector("#submit");
const cityEnt = document.querySelector("#city");

submit.addEventListener('click', function(e) {
    e.preventDefault();
    let que = cityEnt.textContent
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${que},us&appid=e5e28d699069f90b230ad4d66e6a33b1&units=imperial`
    fetch(url)
        .then(function(response){
            return response.json();
        })
            .then(function(json) {
                console.log(json);
            });
})


cityEnt.addEventListener('input', typeInp);
        
function typeInp (e) {
    cityEnt.textContent = e.target.value;
            
}


console.log(days)
