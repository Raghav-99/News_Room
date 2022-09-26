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
    });

    // -------------newsapi call from here

    //*--------------API configuration
    var news_query = "top-headlines";
    var req_param = "country=in"
    const news_api_key = "f1655db9861d409e9bcf34568463e261";
    const news_data = `https://newsapi.org/v2/${news_query}?pageSize=18&${req_param}`
    //*---------------

    $.ajax({
        url: news_data,
        method: "GET",
        dataType: "json",  // as api response datatype is json
        headers: {
            "X-Api-Key": news_api_key  // api key included in header to avoid public exposure
        },
        success: (response) => {
            //console.log(response);

            //TODO: further addition of news left
            $.each(response.articles,(ind, news) => {
                console.log(ind+":",news)
                // dynamic insertion of thumbnails and other relevant details like title etc
                $(`#thumb${ind+1}`).attr('src', news.urlToImage)
                $(`#card${ind+1}`).html(`<h1>Title: ${news.title}</h1><br><p>Author: ${news.author}</p><br><small>Published At: ${news.publishedAt}</small><br>`)

                var src_list = $('a.src_news');
                $.each(src_list, (src_ind, src) => {
                    //console.log('ind:'+src_ind+' ',src)
                    if(src_ind === ind) {
                        $(src).attr('href', news.url);
                        if(news.description != null) {
                            $(src).text(news.description);
                        }
                        else {
                            $(src).text('Source');
                        }
                    }
                })
            })
        }
    })
})   
