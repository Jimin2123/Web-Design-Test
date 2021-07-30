$(".menu").hover(
  function() {
    $(".sub_menu").slideDown("slow");
  },
  function() {
    $(".sub_menu").slideUp("slow");
  }
)

let slide = $(".slide > img");
let sno = 0;
let eno = slide.length - 1;
let timer = setInterval("autoslide()", 3000);

function autoslide() {
  $(slide[sno]).stop().animate({
    top: "100%"
  },1000, function() {
    $(this).css({top:"-100%"});
  });
  sno++;
  if(sno > eno) sno = 0;
  $(slide[sno]).stop().animate({
    top: "0"
  },1000);
}

function openPop() {
  $("#pop").show("slow");
}

function closePop() {
  $("#pop").hide("slow");
}