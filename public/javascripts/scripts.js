/**
 * Created by Mothra on 8/29/15.
 */
// When the DOM is ready
$(document).ready(function () {

    // get our content UL
    //var $results = $('#content');

    // On doc ready, do an ajax call to get all customers
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/shoutouts'
    }).done(function (data) {
        // same as success

        console.log(data);
        // for each customer, create an LI with their name in a P tag


        //data.forEach(function (elem) {
        //
        //    // create a new LI node with the id set to the customer id
        //    var $li = $('<li>', {id: elem.id});
        //    var $p = $('<p>');
        //    $p.text('Customer: ' + elem.firstName + ' ' + elem.lastName + ' id: ' + elem.id);
        //    $li.append($p);
        //    $results.append($li);
        //
        //});
    }).fail(function (jqXHR, textStatus, errorThrown) {
        // same as error
        console.log('There was an error: ', errorThrown);
    }).always(function () {
        // same as complete
        console.log('Ajax Complete!');
    });

});