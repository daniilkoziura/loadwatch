function todayNav() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0.
    let yyyy = today.getFullYear();

    today = mm + '.' + dd + '.' + yyyy;
    let elem = document.getElementById("todayDateNav");
    elem.innerText = 'Today: ' + today;
}

$('#search').keyup(function (){
    $('.card-column').removeClass('d-none');
    let filter = $(this).val();

    $('.card-column').find('.card-body .card-title span:not(:contains("'+filter+'"))').parent().parent().parent().addClass('d-none');
    // $('.card-deck').find('.card .card-body .card-text small:not(:contains("' + filter + '"))').parent().parent().parent().addClass('d-none');
})
$("#upcoming-filter").click(function(e) {
    e.preventDefault();
    $('.card').removeClass('d-none');
    let filter = $(this).val()
    $('.card-column').find('.card-body .card-title small:not(:contains("'+filter+'"))').parent().parent().parent().addClass('d-none');
});

$("#past-filter").click(function(e) {
    e.preventDefault();
    $('.card').removeClass('d-none');
    let filter = $(this).val()
    $('.card-column').find('.card-body .card-title small:not(:contains("'+filter+'"))').parent().parent().parent().addClass('d-none');
});


function init() {
    todayNav();
}

init();