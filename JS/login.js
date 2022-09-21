let query_string = "Hyderabad,IN";
let api_key = "143b7c3353d5d68c3ed01f4f30327d93"
let weather_data = `https://api.openweathermap.org/data/2.5/weather?q=${query_string}&appid=${api_key}&units="metric"`

$('document').ready(() => {
    // Weather API call here
    $.ajax({
        url: weather_data,
        method: 'GET',
        success: (data) => {
            //console.log(data);
            
        },
        error: () => {
            console.log('Error occurred');
        },
    })

    // setup a submit handler on form
    $('#form_login').submit((event) => {
        event.preventDefault();         // preventDefault() when invoked will prevent default actions
                                        // to be executed. In this case it will prevent the form from
                                        // submitting in default manner
                                        // ref: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
        
        window.location.replace('main.html');    // will route to home page(acts like the <a> tag)
        return false;
    })
})


