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

        var $results = $('#results');

        data.forEach(function (elem) {
        //

            var $item = $('<div>', {class: 'item'});
            var $fill = $('<div>', {class: 'fill'});
            var $caption = $('<div>', {class: 'carousel-caption'});
            var $name = $('<p>', {class: 'bigwords'}).text(elem.name);
            var $shoutout = $('<p>', {class: 'shoutout'}).text(elem.shoutout);

            var $text = $caption.append($name, $shoutout);
            var $slide = $item.append($fill, $text);

            $results.append($slide);
        });

    }).fail(function (jqXHR, textStatus, errorThrown) {
        // same as error
        console.log('There was an error: ', errorThrown);
    }).always(function () {
        // same as complete
        console.log('Ajax Complete!');
    });

});