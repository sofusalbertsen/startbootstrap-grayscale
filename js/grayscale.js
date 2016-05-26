// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
        $('.navbar-toggle:visible').click();
    }
});

app = angular.module('bindApp', ['ngSanitize']);
app
        .controller(
                'repeatCtrl',
                [function ($sce) {

                        self = this;
                        self.vids = [
                            {
                                "name": "Irina Shklovski",
                                "title": "Is there any data that is actually private?",
                                "description": "As an associated professor at ITU, Irina works on several different projects ranging from considering issues of privacy and identity to investigating the role of technology in disaster. She is interested in how people use such technologies to cope with adverse circumstances, to maintain their social relationships and navigate and interact in urban spaces.",
                                "video": "https://www.youtube-nocookie.com/embed/5q75-c4vOcA?rel=0&amp;showinfo=0"
                            },
                            {
                                "name": "Pernille Tranberg",
                                "title": "Personal Data Harvest",
                                "description": " A journalist who now acts as a dataethics consultant. She is co-founder of DataEthics.eu and a board member of the London-based charity organization CitizenTrust. In 2012, she wrote the bestseller \"Fake It\" about big data and digital self-defense.",
                                "video": "https://www.youtube-nocookie.com/embed/ymtBz-KWWEA?rel=0&amp;showinfo=0"
                            }
                        ];
                    }])
        .filter('trustAsResourceUrl', ['$sce', function ($sce) {
                return function (val) {
                    return $sce.trustAsResourceUrl(val);
                };
            }])
        ;