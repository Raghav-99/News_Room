$('document').ready(() => {
    // setup a click handler on Login button
    $('#login').click((event) => {
        event.preventDefault();         // preventDefault() when invoked will prevent default actions
                                        // to be executed. In this case it will prevent the form from
                                        // submitting in default manner
                                        // ref: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
        
        location.href = 'main.html';    // will route to home page(acts like the <a> tag)
        return false;
    });
})