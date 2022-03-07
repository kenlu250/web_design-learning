var num=12;

function click(num_var){
  num=num+num_var
  $(".num").text(num);
}

function check(){
  if (num<10){
    $(".text").text("數量極少!!");
    $(".text").css("color","#FF6505");
    $(".text").css("border-bottom","solid 8px #FF6505");
    $(".fill_stock").addClass("fill_stock_open");
  }else if (num<20){
    $(".text").text("賣得不錯喔!!");
    $(".text").css("color","#FFCD05");
    $(".text").css("border-bottom","solid 8px #FFCD05");
    $(".fill_stock").removeClass("fill_stock_open");
  }else if (num<30){
    $(".text").text("還剩很多!!");
    $(".text").css("color","#fff");
    $(".text").css("border-bottom","solid 8px #fff");
  }
}

$(".minus").click(
  function(){
    click(-1)
    
    check();
    }
   
);

$(".add").click(
  function(){
    click(+1)
    
    check();
    }
);

var waittime=0
$(".fill_stock").click(
  function(){
    $(".fill_stock").text("☎ 聯絡中...")
    setInterval(
    function(){
      waittime+=1
      $(".fill_stock").text("☎ 聯絡中..."+waittime)
      }
    
    ,1000)
  }
)
