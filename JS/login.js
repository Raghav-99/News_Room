$('document').ready(() => {
    // setup a submit handler on form
    $('#form_login').submit((event) => {
        event.preventDefault();         // preventDefault() when invoked will prevent default actions
                                        // to be executed. In this case it will prevent the form from
                                        // submitting in default manner
                                        // ref: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
        
        var uname = $('#uname').val()
        var pass = $('#pass').val()
        var cred = `{"email":"${uname}", "password":"${pass}"}`
        var cred_obj = $.parseJSON(cred); //parse to json to include in ajax call

        $.ajax({
            url: "http://localhost:3000/login", 
            method: "POST",
            processdata: false, // disables query string on request
            data: cred_obj, // upon request submit json data containing username and pass
            dataType: "json", // server response data type
            
            success: function(response) {
                console.log(response)
                sessionStorage.setItem('access_token', response.accessToken); // update JWT in session storage
                
                window.location.replace('main.html');    // will route to home page(acts like the <a> tag)
            },

            error: () => {
                console.log("request unsuccessful!")
            },
            statusCode: {
                404: () => {console.log("page not found 404")},
                400: () => {alert("Bad request!"); console.log("Bad request 400")},
                200: () => {console.log("200 OK")}
            },

            headers: {
                Authorization: 'Bearer '+ sessionStorage.getItem('access_token'), // authorization token included in headers for further privileged API requests
            },
    })
        
        return false;
    })
})


