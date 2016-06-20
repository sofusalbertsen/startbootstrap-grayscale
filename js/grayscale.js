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
                                "name": "Pernille Tranberg",
                                "title": "Personal Data Harvest",
                                "description": " A journalist who now acts as a dataethics consultant. She is co-founder of DataEthics.eu and a board member of the London-based charity organization CitizenTrust. In 2012, she wrote the bestseller \"Fake It\" about big data and digital self-defense.",
                                "video": "https://www.youtube-nocookie.com/embed/HWTQnYZli-g?list=PLkShjYhAH7pX453CZaFiBlCA0L6syPnQT&amp;showinfo=0"
                            }, {
                                "name": "Peter Kofod",
                                "title": "Govermental Surveillance",
                                "description": "Danish journalist and activist. He is deeply engaged in inter-state surveillance and was the first Dane who got an interview with Edward Snowden. He has recently made headlines in the press by uncover the story about an american airplane waiting to catch Mr. Snowden if he travelled from Moscow.",
                                "video": "https://www.youtube-nocookie.com/embed/FMFEoWxSDbg?list=PLkShjYhAH7pX453CZaFiBlCA0L6syPnQT&amp;showinfo=0"
                            },
                            {
                                "name": "Irina Shklovski",
                                "title": "Is there any data that is actually private?",
                                "description": "As an associated professor at ITU, Irina works on several different projects ranging from considering issues of privacy and identity to investigating the role of technology in disaster. She is interested in how people use such technologies to cope with adverse circumstances, to maintain their social relationships and navigate and interact in urban spaces.",
                                "video": "https://www.youtube-nocookie.com/embed/5q75-c4vOcA?list=PLkShjYhAH7pX453CZaFiBlCA0L6syPnQT&amp;showinfo=0"
                            },
                            {
                                "name": "Hanno Böck",
                                "title": "TLS - the most important cryptographic protocol on the Internet.",
                                "description": "Hanno is a freelance journalist, lives in Copenhagen and writes for the newspaper taz, Zeit Online, the IT newspage Golem.de and others. He has a deep technical understanding of the internet's cryptographic infrastructure. ",
                                "video": "https://www.youtube-nocookie.com/embed/B5ljctH1Lcc?list=PLkShjYhAH7pX453CZaFiBlCA0L6syPnQT&amp;showinfo=0"
                            },
                            {
                                "name": "Henrik Kramshøj",
                                "title": "Digital Privacy.",
                                "description": "Henrik is a so called internet samurai, he turns and twists the internet, till it does as he please. He is mastering a huge amount of tools for encryption and loves to share them. With these tools you will be able to take back the control of who is able to see Your data. He will show you how to use these tools for digital self defence. This is ranging from text encryption, email encryption and how to avoid logging on the internet. He also briefly shows the possibilities of “Sniffing”. Henrik has, along with Peter Kofod, often been a speaker at events like this, and has a huge amount of knowledge in the field.",
                                "video": "https://www.youtube-nocookie.com/embed/wW0ktSNjBr0?list=PLkShjYhAH7pX453CZaFiBlCA0L6syPnQT&amp;showinfo=0"
                            },
                            {
                                "name": "Martin Von Haller",
                                "title": "EU Regulation of Data.",
                                "description": "Martin is one of the leading IT-lawyers, with more than 20 years of experience. He advises danish, as well as international, companies about the legal and commercial relations within the IT industry. He is a pioneer within the aspects of E-commerce, It-security, Open source and free license formats as Creative Commons.",
                                "video": "https://www.youtube-nocookie.com/embed/6GRH0FLdSL0?list=PLkShjYhAH7pX453CZaFiBlCA0L6syPnQT&amp;showinfo=0"
                            },
                            {
                                "name": "David Simonsen",
                                "title": "The battle of protecting infrastructure",
                                "description": "David Simonsen is manager of the Danish federation WAYF - Where Are You From (at DeIC). David is member of the board of Rådet for Digital Sikkerhed, the Kalmar2 steering committee and was previously member of the DK governments national IT-board as well as the advisory group for the establishment of the Danish Virtual University. David has participated of the public debate of it- and security infrastructure since 2000. David previously co-chaired TERENA tf-mobility and was responsible for the roll-out of eduroam in Denmark.",
                                "video": "https://www.youtube-nocookie.com/embed/wGzKbzAaJkM?list=PLkShjYhAH7pX453CZaFiBlCA0L6syPnQT&amp;showinfo=0"
                            },
                            {
                                "name": "Panel discussion",
                                "title": "Questions from the audience to the speaksers",
                                "description": "From left to right: Henrik Kramshøj, Peter Kofod, Hanno Böck, Irina Schklovski. Moderator: Søren Villebro & Sofus Albertsen.",
                                "video": "https://www.youtube-nocookie.com/embed/Fy44Xk3Npx8?list=PLkShjYhAH7pX453CZaFiBlCA0L6syPnQT&amp;showinfo=0"
                            }
                        ];
                        self.conflinks = [
                            {"link": "http://www.computerworld.dk/art/236747/pornbots-nsa-og-whistleblowers-tag-med-computerworld-til-krypto-konference",
                                "from": "Computerworld",
                                "description": "Pornbots, NSA og whistleblowers: Tag med Computerworld til krypto-konference"},
                            {"link": "http://www.computerworld.dk/art/236733/eksperternes-dom-udviklerne-skal-ikke-redde-kryptering-det-skal-din-bedstemor",
                                "from": "Computerworld",
                                "description": "Eksperternes dom: Udviklerne skal ikke redde kryptering - det skal din bedstemor"},
                            {"link": "http://www.itu.dk/Om-ITU/Presse/Nyheder/Fuldt-hus-til-konference-om-internetovervaagning",
                                "from": "ITU News",
                                "description": "Fuldt hus til konference om internetovervågning"},
                            {"link": "http://www.itu.dk/Om-ITU/Presse/Nyheder/Overvaagning-og-privatliv-paa-nettet",
                                "from": "ITU News",
                                "description": "Konference på IT-Universitetet: Overvågning og privatliv på nettet"}


                        ];
                        self.otherlinks = [
                            {"link": "http://www.itu.dk/Om-ITU/Presse/Nyheder/Passende-paranoia-til-ITUs-foerste-kryptofest", 
                                "from": "ITU News", 
                                "description": "”Passende paranoia” til ITU’s første kryptofest"},
                        {"link": "https://www.dr.dk/tv/se/tv-avisen-med-sporten/tv-avisen-med-sporten-2016-06-10-2#!/00:16:09", 
                                "from": "DR1 TV-Avis 18:30", 
                                "description": "Internet - Elever lærer om digital adfærd"}];
                    }])
        .filter('trustAsResourceUrl', ['$sce', function ($sce) {
                return function (val) {
                    return $sce.trustAsResourceUrl(val);
                };
            }])
        ;