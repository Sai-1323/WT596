function getWeather() {

    var city = document.getElementById('city').value;
    var link_current = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=1f6f57d273e99ddcf2b6a84656fa4c84&units=metric"
    var link_forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=1f6f57d273e99ddcf2b6a84656fa4c84&units=metric"
    var para = document.getElementById('para');
    let wData = fetch(link_current);
    wData.then((rwData) => {
        rwData.json().then((data) => {
            let { main: { temp, temp_min, temp_max } } = data;
            // let{sys:{country}}=data;
            para.innerHTML = "\tCountry : " + data.sys.country + "<br/>Average Temperature is :  " + temp + "\u00B0C<br/>Minimum Temperature is :  " + temp_min + "\u00B0C<br/>Maximum Temperature is :  " + temp_max + "\u00B0C<br/>";
        });
    });
    let cData = fetch(link_forecast);
    var tempArr = [];
    cData.then((res) => {
        res.json().then((data) => {
            let weatherArr = data.list;
            console.log(weatherArr);
            for (let i = 0; i < weatherArr.length; i = i + 8) {
                tempArr[i] = weatherArr[i].main.temp;
            }
        });
    });
    
    tempArr.forEach(ele => {
        if (ele == "") {
            tempArr.pop();
        }
    });
    console.log(tempArr);

    let ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'Temperature',
                data: tempArr,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}