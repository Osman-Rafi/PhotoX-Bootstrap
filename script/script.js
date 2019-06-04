/**
 * Created by Osman Rafi on 4/20/2019.
 */
$(document).ready(function () {

    $('.gallery-list-item').click(function () {
        let value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.filter').show(300);
        } else {
            $('.filter').not('.' + value).hide();
            $('.filter').filter('.'+ value).show();
        }
    });

    $('.gallery-list-item').click(function () {
        $(this).addClass('active-item')
    })

});