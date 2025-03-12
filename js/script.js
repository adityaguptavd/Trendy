$(function() {

    // Nav-links event listener
    function navEvent() {
        $('.nav-link').on('click', function() {
            $('.nav-link').removeClass('active');
            $('.nav-link').attr('aria-current', '');
            $(this).addClass('active');
            $(this).attr('aria-current', 'page');
        });

        if($(window).width() < 992) {
            $('.nav-link').on('click', function() {
                $('.collapse').removeClass('show');
            });
        }
    }

    function handleUrlWithHash() {
        // On load check which id is in url
        const id = location.hash;
        if(id) {
            $('.nav-link').removeClass('active');
            $('.nav-link').attr('aria-current', '');
            $(`.nav-link[href='${id}']`).addClass('active');
            $(`.nav-link[href='${id}']`).attr('aria-current', 'page');
        }
    }

    function handleContactFormSubmit(event) {
        event.preventDefault();
        $(this).trigger('reset');
        $('.contact .overlay, .contact .popup').removeClass('hidden');
    }

    function closePopup() {
        $('.contact .overlay, .contact .popup').addClass('hidden');
    }

    // On load or refresh
    navEvent();
    handleUrlWithHash();

    $(window).on('hashchange', handleUrlWithHash);

    // On window resize
    $(window).on('resize', navEvent);

    // Handle contact form submission
    $('.contact form').on('submit', handleContactFormSubmit)
    $('.contact .overlay, .contact .popup button').on('click', closePopup);
});