$(".buybtn").click(
  function(){
    $(this).text("已經購買");
    $(this).addClass("buyed");
  }
);

$(".selbtn").click(
  function(){
    $(".show_info").text($(this).text());
    $(".show_cata").text($(this).attr("data-cata"));
    if ($(this).attr("data-cata") == "flower"){
      $(".show_cata").append("，他買的是花!!!");
    }else{
      $(".show_cata").append("嗚嗚他買的不是花:((");
    }
  }
);

$(".mbtn").mouseenter(
  function(){
    $(this).css("background-color","#333");
    $(this).css("color","#fff");
    $(this).text("使用者進入了!");
  }
)
$(".mbtn").mouseleave(
  function(){
    $(this).css("background-color","white");
    $(this).css("color","black");
    $(this).text("使用者離開了!");
  }
);

setTimeout(
  function(){
    $(".timerbox").css("background-color","red");
  }
,5000);

nowtime=0
setInterval(
  function(){
    nowtime=nowtime+1
    $(".countbox").text("已經經過"+nowtime+"秒");
  }  
,1000);
