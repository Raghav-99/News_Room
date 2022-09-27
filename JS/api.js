// *--------Weather API configuration
const query_string = "Hyderabad,IN";
const api_key = "143b7c3353d5d68c3ed01f4f30327d93"
const weather_data = `https://api.openweathermap.org/data/2.5/weather?q=${query_string}&appid=${api_key}&units=metric`
// *---------

//*--------------News API configuration
var news_query = "top-headlines";
var req_param = "country=in"
const news_api_key = "f1655db9861d409e9bcf34568463e261";
//*---------------

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
            //console.log(data);

            //* dynamically fetch weather icon according to weather
            weather_icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";

            //* insert weather icon
            $('#w_icon').attr('src', weather_icon);
            //* render weather description, temp data and loc
            $('#w_desc').html(data.weather[0].description + '<br>' + data.main.temp + '°C<br>' + data.name + `, ${data.sys.country}`);
        },

        error: () => {
            console.log('Error occurred while fetching data!!');
        },

        statusCode: {
            404: () => {console.log("page not found 404")},
            400: () => {alert("Bad request on weather data!"); console.log("Bad request 400")},
            200: () => {console.log("200 OK")}
        }
    });

    //* -------------newsapi call from here
    function news_fetch() {
        $.ajax({
            url: `https://newsapi.org/v2/${news_query}?pageSize=18&${req_param}`,
            method: "GET",
            dataType: "json",  // as api response datatype is json
            headers: {
                "X-API-Key": news_api_key,  // api key included in header to avoid public exposure
            },
            success: (response) => {
                console.log(response);

                //* check for response size
                if(response.articles.length == 0) {
                    alert("0 results found!");
                    console.log("0 results!")
                }
                else {
                    console.log(response.articles.length + ' results found!!')

                    $.each(response.articles, (ind, news) => {
                        //console.log(ind+":",news)
                        var date = new Date(news.publishedAt).toUTCString() // convert date to UTC format

                        // dynamic insertion of thumbnails and other relevant details like title etc
                        $(`#thumb${ind + 1}`).attr('src', news.urlToImage);
                        $(`#thumb${ind + 1}`).attr('alt', "Image not found");
                        $(`#card${ind + 1}`).html(`<h1>Title: ${news.title}</h1><br><p>Author: ${news.author}</p><br><small>Published At: ${date}</small><br>`)

                        var src_list = $('a.src_news'); // array of <a> with class src_news

                        //* iterate over the said array
                        $.each(src_list, (src_ind, src) => {
                            //console.log('ind:'+src_ind+' ',src)

                            //* add hyperlinks and description to each news
                            if (src_ind === ind) {
                                $(src).attr('href', news.url);
                                if (news.description != null) {
                                    $(src).text(news.description);
                                }
                                else {
                                    $(src).text('!!Description not available, unfortunately. Check out the source here!!');
                                }
                            }
                        })
                    })
                }
            }
        });
    }

    // click listeners for each navbar child elements
    
    $('#nav1').click(() => {
        req_param = "country=in&category=general";
        news_fetch()
    })


    $('#nav2').click(() => {
        req_param = "country=in&category=technology";
        news_fetch()
    })


    $('#nav3').click(() => {
        req_param = "country=in&category=business";
        news_fetch()
    })


    $('#nav4').click(() => {
        req_param = "country=in&category=entertainment";
        news_fetch()
    })


    $('#nav5').click(() => {
        req_param = "country=in&category=health";
        news_fetch()
    })


    $('#nav6').click(() => {
        req_param = "country=in&category=science";
        news_fetch()
    })


    $('#nav7').click(() => {
        req_param = "country=in&category=sports";
        news_fetch()
    })
    
    $('#search').click(() => {
        var search_query = $('#search_query').val();
        console.log(search_query);
        req_param = `country=in&q=${search_query}`;

        news_fetch()
    })

    // will execute if no click event on navbar child element happens
    news_fetch()
})   
