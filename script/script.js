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
            $('.filter').filter('.' + value).show();
        }
    });

    $('.gallery-list-item').click(function () {
        $(this).addClass('active-item')
    });

    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 4800) {
            $('.card-1').addClass('moveFromLeft');
            $('.card-2').addClass('moveFromBottom');
            $('.card-3').addClass('moveFromRight');
        }
        else {
            $('.card-1').removeClass('moveFromLeft');
            $('.card-2').removeClass('moveFromBottom');
            $('.card-3').removeClass('moveFromRight');
        }
    });
});