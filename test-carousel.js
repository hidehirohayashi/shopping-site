$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});

$(document).ready(function(){
  $(".menu_icon").click(function(){
    $(".menu_toggle").slideToggle();
  });
});

$(window).load(function(){
  $(".product_img_in img").click(function(){
    var img_src = $(this).attr("src");
    $(".product_img_main img").attr("src", img_src);
  });
});