var is_open = false;

function toggle(){
  if(!is_open){
    document.getElementById("menu").classList.add("open");
    is_open = true;
  } else{
    document.getElementById("menu").classList.remove("open");
    is_open = false;
  }
}

jQuery(document).ready(function(){
  function scrollWin(anc){
    target = jQuery(anc);
    jQuery('html, body').animate({
      scrollTop: target.offset().top
    },1000)
  }

  jQuery("#scroll_btn_home").click(function() {
    scrollWin(".header");
  })

  jQuery("#scroll_btn_chi-sono").click(function() {
    scrollWin("#scroll_chi-sono");
  })

  jQuery("#scroll_btn_portfolio").click(function() {
    scrollWin("#scroll_projects");
  })

  jQuery("#scroll_btn_contatti").click(function() {
    scrollWin("#scroll_contatti");
  })

});
