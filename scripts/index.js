$(document).ready(function (){
    
        $(".topnav a").click(function (event){
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 20
            }, 1000);

            $('.active').removeClass('active');
            $(this).closest('a').addClass('active');

        });

    // Typed Initiate
    let typed = new Typed('.typed-text', {
        strings: ["Full Stack Developer","Business Analyst","System Analyst","Tech Enthusiast"],
        typeSpeed: 120,
        backSpeed: 30,
        smartBackspace: true,
        loop: true
    });



});
    


