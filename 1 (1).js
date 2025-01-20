$(document).ready(function(){
    $('.con_form').hide()
    $('.about').hide()
    $('.lists').hide()
    $('.img').hide()
})


$('#A').click(function (){
    $('.con_form').hide()
    $('.about').slideToggle(500);
    $('.lists').hide()
    $('.img').hide()
})

$('#C').click(function(){
    $('.con_form').slideToggle(500);
    $('.form').fadeIn(1000);
    $('.data').hide();
    $('.about').hide();
    $('.lists').hide();
    $('.img').hide();

})
$('#S').click(function(){
    $('.con_form').hide()
    $('.about').hide();
    $('.lists').slideToggle(500);
    $('.img').hide();

})
$('#G').click(function(){
    $('.con_form').hide();
    $('.about').hide();
    $('.lists').hide();
    $('.img').slideToggle(500);
})
let i = 1;
$('.right').click(function () {
    i++;
    if (i > 8) {    
        i = 1;
    }
    $('.toggle').hide().attr('src',`${i}.jpg`).fadeIn(500);
});
$('.left').click(function () {
    i--;
    if (i < 1) { 
        i = 8;
    }
    $('.toggle').hide().attr('src',`${i}.jpg`).fadeIn(500);
});

$('.btn').click(function(){
    $('.form').hide()
    $('.data').fadeIn(1000);
    let name = $('#name').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let complain = $('#c').val()
    $('.name_data').text(`your name is :${name}`);
    $('.email_data').text(`your email is : ${email}`);
    $('.phone_data').text(`your phone is: ${phone}`);
    $('.com_data').text(`your complain is: ${complain}`);
})