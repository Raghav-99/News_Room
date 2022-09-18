$('document').ready(() => {
    $('login').click((event) => {
        event.preventDefault();
        location.href = 'main.html';
        return false;
    });
})