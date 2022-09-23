// *--------Weather API configuration
const query_string = "Hyderabad,IN";
const api_key = "143b7c3353d5d68c3ed01f4f30327d93"
const weather_data = `https://api.openweathermap.org/data/2.5/weather?q=${query_string}&appid=${api_key}&units=metric`
// *---------

$('document').ready(() => {
    //* Date Time API call here
    //* callback happens every 1000ms or 1second
    setInterval((dateTime) => {
        dateTime = new Date().toLocaleString(); //* converts to date-time format
        //console.log(dateTime);
        $('#date').html(dateTime); //* render the value
    }, 1000);

    //* Weather API call here
    var weather_icon;
    $.ajax({
        url: weather_data,
        method: 'GET',
        success: (data) => {
            console.log(data);

            //* dynamically fetch weather icon according to weather
            weather_icon = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";

            //* insert weather icon
            $('#w_icon').attr('src',weather_icon); 
            //* render weather description, temp data and loc
            $('#w_desc').html(data.weather[0].description+'<br>'+data.main.temp+'°C<br>'+data.name+`, ${data.sys.country}`);
        },
        // TODO: better error handling
        error: () => {
            console.log('Error occurred');
        },
    })
})   
