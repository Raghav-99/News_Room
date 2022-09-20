$('document').ready(() => {
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


