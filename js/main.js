let closeBtn = document.querySelector('.closeBtn')
let openNav = document.querySelector('.openNav')
let sideNavbar = document.querySelector('.sideNavbar')

$(closeBtn).on('click', function () {
    let sideNavbarWeidth = $(sideNavbar).outerWidth();
    $(sideNavbar).animate({ marginLeft: `-${sideNavbarWeidth}` }, 500)
    $(openNav).animate({ left: '10px' }, 500)
})

$(openNav).on('click', function () {
    $(sideNavbar).animate({ marginLeft: `0px` }, 500)
    $(openNav).animate({ left: '270px' }, 500)
})



$(".sideNavbar a").click(function(){
    
    let sectionId= $(this).attr("href");
    
    let positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection}, 200);
})






$('.toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});


window.onload = function() {
    countDownToTime("1 June 2024 12:00:00");
}

function countDownToTime(countTo) {
    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
    let days = Math.floor( timeDifference / (24*60*60));
    let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
    let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

    setInterval(function() {  countDownToTime(countTo); }, 1000);
}

var maxLength = 100;
$('textarea').keyup(function() {
    var length = $(this).val().length;
    var AmountLeft = maxLength-length;
    if(AmountLeft<=0)
            {
                $(".chars").text("your available character finished");
                
            }
        else{
        
        $(".chars").text(AmountLeft+" character Reamining");
        }
});