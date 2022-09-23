$('document').ready(() => {
    // setup a submit handler on form
    // TODO: set up auth handling by Oshin(remove comment once done)
    $('#form_login').submit((event) => {
        event.preventDefault();         // preventDefault() when invoked will prevent default actions
                                        // to be executed. In this case it will prevent the form from
                                        // submitting in default manner
                                        // ref: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

    var uname = $("#uname").val();
    var password = $("#pass").val();
    
    var url="http://localhost:3000/user";
    $.getJSON(url,function(data){
        var row =JSON.parse( JSON.stringify( data.find(x=>x.username===uname)));
        if ( row.password===password){
    //                 // TODO: below should only execute if the user cred is valid(remove comment once done)
         window.location.replace('main.html');    // will route to home page(acts like the <a> tag)

         }
         else window.alert("invalid input credentials...");
      });
    })
    
        return false;
});



