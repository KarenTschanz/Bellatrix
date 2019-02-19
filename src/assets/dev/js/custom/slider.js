$(document).ready(function () {
    $('.sandwich').on('click', function () {
        $('nav').toggleClass('nav-resp');
        $('sandwich').toggleClass('open');
    })
    $('#multiscroll').multiscroll({
        verticalCentered: true,
        scrollingSpeed: 700,
        easing: 'easeInQuart',
        menu: false,
        sectionsColor: [],
        navigation: true,
        navigationPosition: 'right',
        navigationColor: '#000',
        navigationTooltips: [],
        loopBottom: false,
        loopTop: false,
        css3: false,
        paddingTop: 0,
        paddingBottom: 0,
        normalScrollElements: null,
        scrollOverflow: false,
        scrollOverflowOptions: null,
        keyboardScrolling: true,
        touchSensitivity: 5,

        //responsive
        responsiveWidth: 100,
        responsiveHeight: 50,
        responsiveExpand: true,

        // Custom selectors
        sectionSelector: '.ms-section',
        leftSelector: '.ms-left',
        rightSelector: '.ms-right',

        //events
        onLeave: function (index, nextIndex, direction) {},
        afterLoad: function (anchorLink, index) {},
        afterRender: function () {},
        afterResize: function () {},
    });
});
