jQuery('document').ready(function ($) {

    // the gallery filters
    $('.gallery__navi--items li').on('click', function () {
        $('.gallery__navi--items li').removeClass('active');
        $(this).addClass('active');
        filter = $(this).attr('gallery-filter');

        $('.gallery-img-holder').each(function () {
            if (filter == 'all') {
                $(this).fadeIn();
              //  $(this).css("visibility", "visible");
            } else {
                $(this).hide();
              //  $(this).css("visibility", "hidden");
                $(this).css("display", "none");
                if ($(this).attr('filter-category') == filter) {
                    $(this).fadeIn();
               //     $(this).css("visibility", "visible");
                }
            }
        });
    });


    $(function () {
        $('.mobile-view').click(function () {
            $('.modal-dialog').removeClass('modal-lg');
            $('.modal-dialog').addClass('modal-sm');
        });
    });

    $(function () {
        $('.desktop-view').click(function () {
            $('.modal-dialog').removeClass('modal-sm');
            $('.modal-dialog').addClass('modal-lg');
        });
    });


    $(function () {
        $('.close').click(function () {
            $('.modal-dialog').removeClass('modal-sm');
            $('.modal-dialog').addClass('modal-lg');
        });
    });

    // Scrolling Effects

    $('.js--scroll-to-clients').click(function() {
        $('html, body').animate({scrollTop: $('.js--client-section').offset().top}, 1000);
    });

});

