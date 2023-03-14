$(document).ready(function () {
    $('#product-slider').slick({
        arrows: true, // Show arrow navigation
        dots: true, // Show dot navigation
        infinite: false, // Loop the slider
        slidesToShow: 3, // Show three slides at a time
        slidesToScroll: 1, // Scroll three slides at a time
        responsive: [
            {
                

                breakpoint: 850, // Breakpoint for smaller screens
                settings: {
                    slidesToShow: 2, // Show one slide at a time
                    slidesToScroll: 1 // Scroll one slide at a time
                },
                breakpoint: 600, // Breakpoint for smaller screens
                settings: {
                    slidesToShow: 1, // Show one slide at a time
                    slidesToScroll: 1 // Scroll one slide at a time
                },

            }
        ]
    });




    $("#open-nav").click(function () {
        // If the element with ID "toggle-element" is visible, hide it. Otherwise, show it.
        $(".resp-nav").fadeIn();
        $("body").css('overflow', 'hidden');

    });


    if($(window).width() <=800 ){
        $(".resp-nav").hide()
    }


    $(window).on('resize', function () {
        var win = $(this);
        if (win.width() >= 800) {
            $(".resp-nav").show();
        }else{
            $(".resp-nav").hide();
            $("#close-nav").click(function () {
                // If the element with ID "toggle-element" is visible, hide it. Otherwise, show it.
                $(".resp-nav").fadeOut();
                $("body").css('overflow', 'auto');
            });
            $(".resp-nav").click(function () {
                // If the element with ID "toggle-element" is visible, hide it. Otherwise, show it.
                $(".resp-nav").fadeOut();
                $("body").css('overflow', 'auto');
        
            });
        }
    });









    /*************************FORM Validation***************************     */

    $(document).ready(function() {
        $('form').submit(function(event) {
            event.preventDefault();
            
            var firstname = $('#prenom').val();
            var lastname = $('#nom').val();
            var email = $('#email').val();
            var phone = $('#phone').val();
            var message = $('#message').val();
            
            if (firstname === '' || lastname === '' || email === '' || phone === '' || message === '') {
                iziToast.error({
                    title: 'Erreur',
                    message: 'Veuillez remplir tous les champs obligatoires',
                    timeout: 5000,
                    position:  'topRight'
                });
                return false;
            }
            
            if (!isValidEmail(email)) {
                iziToast.error({
                    title: 'Error',
                    message: 'Veuillez entrer une adresse email valide',
                    timeout: 5000,
                    position:  'topRight'

                });
                return false;
            }
            
            if (!isValidPhone(phone)) {
                iziToast.error({
                    title: 'Error',
                    message: 'Veuillez entrer un numéro de téléphone valide',
                    timeout: 5000,
                    position:  'topRight'
                });
                return false;
            }
            
            // If validation passes, submit the form
            iziToast.success({
                title: 'OK',
                message: 'Successfully inserted record!',
                timeout: 5000,
                    position:  'topRight'
            });
        });
    });
    
    function isValidEmail(email) {
        // Regular expression to match email format
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    
    function isValidPhone(phone) {
        // Regular expression to match phone format
        var phonePattern = /^(\+\d{1,3})?\s?(\d{8,14})$/;
        return phonePattern.test(phone);
    }
    
});
