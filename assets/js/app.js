
$("li:first").click(function () {
  $(".features_subnav_links").toggleClass("top");
  $(".down-arrow").toggleClass("rotate");
});
$("li:nth-child(2)").click(function () {
  $(".company_subnav_links").toggleClass("top2");
  $(".down-arrow2").toggleClass("rotate");

});
$(".ham").click(function(){
  $(".nav__links").addClass("right");
  $(".ham").addClass("hidden");
  $(".close").removeClass("hidden");
  $("body").css("overflow","hidden");
});

$(".close").click(function(){
  $(".close").addClass("hidden");
  $(".ham").removeClass("hidden");
  $(".nav__links").removeClass("right");
  $("body").css("overflow","auto");
});

