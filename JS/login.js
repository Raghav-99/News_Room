let query_string = "Hyderabad,IN";
let api_key = "143b7c3353d5d68c3ed01f4f30327d93"
let weather_data = `https://api.openweathermap.org/data/2.5/weather?q=${query_string}&appid=${api_key}&units=metric`

$('document').ready(() => {
    //* Weather API call here
    var weather_icon;
    $.ajax({
        url: weather_data,
        method: 'GET',
        success: (data) => {
            // console.log(data);

            //* dynamically fetch weather icon according to weather
            weather_icon = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
            //console.log(weather_icon);

            //* insert weather icon
            $('#w_icon').attr('src',weather_icon); 
            //* insert weather description and temp data
            $('#w_desc').html(data.weather[0].description+'<br>'+data.main.temp);
        },
        error: () => {
            console.log('Error occurred');
        },
    })

    // setup a submit handler on form
    // TODO: set up auth handling by Oshin(remove comment once done)
    $('#form_login').submit((event) => {
        event.preventDefault();         // preventDefault() when invoked will prevent default actions
                                        // to be executed. In this case it will prevent the form from
                                        // submitting in default manner
                                        // ref: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
        
        // TODO: below should only execute if the user cred is valid(remove comment once done)
        window.location.replace('main.html');    // will route to home page(acts like the <a> tag)
        
        return false;
    })
})


