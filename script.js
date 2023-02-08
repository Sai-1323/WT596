function getWeather() {

    var city = document.getElementById('city');
    var link_current ="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=1f6f57d273e99ddcf2b6a84656fa4c84"
    var link_forecast ="https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=1f6f57d273e99ddcf2b6a84656fa4c84"

    let wData=fetch(link_current);
    wData.then((rwData)=>{
        rwData.json().then((data)=>{
            console.log(data);    
        });
    });

    // const ctx = document.getElementById('myChart');

    // new Chart(ctx, {
    //     type: 'bar',
    //     data: {
    //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //         datasets: [{
    //             label: 'Temperature',
    //             data: [12, 19, 3, 5, 2, 3],
    //             borderWidth: 1
    //         }]
    //     },
    //     options: {
    //         scales: {
    //             y: {
    //                 beginAtZero: true
    //             }
    //         }
    //     }
    // });
}