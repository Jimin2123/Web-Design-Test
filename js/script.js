$(".menu").hover(
  function() {
    $(".sub_menu").stop().slideDown("slow");
  },
  function() {
    $(".sub_menu").stop().slideUp("slow");
  }
);


let slide = $(".slide > img");
let sno = 0;
let eno = slide.length - 1;
let timer = setInterval("autoSlide()",3000);

function autoSlide() {
  $(slide[sno]).animate({
    top: "-100%"
  },1000,function() {
    $(this).css({top:"100%"});
  });
  sno++;
  if(sno > eno) sno = 0;
  $(slide[sno]).animate({
    top:"0"
  },1000);
}

$(".tab_news").click(
  function() {
    $(this).css(
      {
        "border-bottom": "0",
        "background-color":"#fff"
      }
    );
    $(".tab_gal").css(
      {
        "border-bottom":"1px solid #000",
        "background-color":"#888"
      }
    )
    $(".gallery").hide();
    $(".news").show();
  }
);

$(".tab_gal").click(
  function() {
    $(this).css(
      {
        "border-bottom": "0",
        "background-color": "#fff"
      }
    );
    $('.tab_news').css(
      {
        "border-bottom":"1px solid #000",
        "background-color": "#888"
      }
    );
    $(".gallery").show();
    $(".news").hide();
  }
)

function openPop() {
  $(".pop").show("slow");
}

function closePop() {
  $(".pop").hide("fast");
}