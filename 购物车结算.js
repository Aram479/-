$(".qx").change(function () {
  //两个全选改变时
  $("input").prop("checked", $(this).prop("checked"));
  if($(this).prop("checked") == true) {
    $("input").parents(".mai").css('background',"rgba(255, 244, 232)")
  }else {
    $("input").parents(".mai").css('background',"")
  }
});

$(".top2 .qx1").change(function () {
  //传智自营 input改变时
  $(".lqx2").prop("checked", $(this).prop("checked")); //上方三个内input改变
  if($(this).prop("checked") == true) {
    $(".lqx2").parents(".mai").css('background',"rgba(255, 244, 232)")
  }else {
    $(".lqx2").parents(".mai").css('background',"")
  }
});

$(".top3 .qx1").change(function () {
  //神州数码 input改变时
  $(".qx2").prop("checked", $(this).prop("checked")); //下方内input改变
  if($(this).prop("checked") == true) {
    $(".qx2").parents(".mai").css('background',"rgba(255, 244, 232)")
  }else {
    $(".qx2").parents(".mai").css('background',"")
  }
});

$(".lqx2").change(function () {
  //当上方三个内input发生改变时
  if ($(".lqx2:checked").length == $(".lqx2").length) {
    //若全部选中
    $(".top2 .qx1").prop("checked", true); //则传智自营 被选中
  } else {
    $(".top2 .qx1,.qx").prop("checked", false); //否则全选和传智自营不选
  }
  if($(this).prop("checked") == true) {
    $(this).parents(".mai").css('background',"rgba(255, 244, 232)")
  }else {
    $(this).parents(".mai").css('background',"")
  }
});
$(".qx2").change(function () {
  //神州数码 内input改变
  if ($(".qx2:checked").length == $(".qx2").length) {
    //若全部选中
    $(".top3 .qx1").prop("checked", true); //则神州数码 被选中
  } else {
    $(".top3 .qx1,.qx").prop("checked", false); //否则全选和则神州数码不选
  }
  if($(this).prop("checked") == true) {
    $(this).parents(".mai").css('background',"rgba(255, 244, 232)")
  }else {
    $(this).parents(".mai").css('background',"")
  }
});
$(".qx1").change(function () {
  //传智自营和神州数码改变时
  if ($(".qx1:checked").length == $(".qx1").length) {
    //若全部选中
    $(".qx").prop("checked", true); //则全选 被选中
  } else {
    $(".qx").prop("checked", false); //否则全选不选
  }
});
$(".lqx2,.qx2").change(function () {
  //传智自营内input和神州数码内input改变时
  if ($(".lqx2:checked,.qx2:checked").length == $(".lqx2,.qx2").length) {
    //若全部选中
    $(".qx").prop("checked", true); //则全选 被选中
  } else {
    $(".qx").prop("checked", false); //否则全选不选
  }
});

//加减模块
$(function () {
  $(".zheng").click(function () {
    /* 加减模块 */
    var n = $(this).siblings("input").val(); // 得到当前兄弟文本框的值
    if (n >= 200) {
      //如果值>=200则click失效
      return false;
    }
    n++; //点击一次文本框值+1
    $(this).siblings("input").val(n);

    /*  根据加减数量计算小计模块 */
    var xj = $(this).parents(".sl").siblings(".jb").children().html(); //获取商品单价
    $(this)
      .parents(".sl")
      .siblings(".jb2")
      .children()
      .html((xj * n).toFixed(2)); //商品单价×数量=小计且保留2位小数
    getSum();
  });

  $(".fu").click(function () {
    /* 加减模块 */
    var n = $(this).siblings("input").val(); // 得到当前兄弟文本框的值
    if (n <= 1) {
      //若小于等于1，则click失效
      $(this).siblings("input").val("1"); //value值为1
      return false;
    }
    n--;
    $(this).siblings("input").val(n);

    /* 根据加减数量计算小计模块 */
    var xj = $(this).parents(".sl").siblings(".jb").children().html();
    $(this)
      .parents(".sl")
      .siblings(".jb2")
      .children()
      .html((xj * n).toFixed(2));
    getSum();
  });

  //自定义数量模块
  $(".jj input").keyup(function aaa() {
    //键盘输入数量时
    var n = $(this).val();
    if (n < 1) {
      //若小于等于1，则click失效
      n = Math.abs(n);
      if (n == 0) {
        //若数量值等于0时
        n = 1;
        $(this).val(n);
      }
      $(this).val(n);
      return false;
    }

    if (n !== parseInt(n)) {
      //若n不等于取整数的n时
      $(this).val(parseInt(n));
      n = parseInt(n);
    }
    if (n >= 200) {
      //如果n>200时
      n = 200;
      $(this).val(n);
    }
    var xj = $(this).parents(".sl").siblings(".jb").children().html(); //获取商品单价
    $(this)
      .parents(".sl")
      .siblings(".jb2")
      .children()
      .html((xj * n).toFixed(2)); //商品单价×数量=小计且保留2位小数
    getSum();
  });
  getSum();
  function getSum() {
    var cont = 0;
    var money = 0;
    $(".jj input").each(function (i, ele) {
      cont += parseInt($(ele).val()); //将所有数量值相加
    });
    $(".zsl").text(cont); //总数量=cont

    $(".jg").each(function (i, ele) {
      money += parseInt($(ele).text());//将所有小计值相加
    });
    $(".zjg").text("￥" + money.toFixed(2));//总小计=money
  }
  
  $(".sc").click(function() { //点击删除，删除对应大盒子
      $(this).parents(".mai").remove();
      
      if($(".lqx2").length == 0){
        $('.top2').remove()
      }
      if($(".qx2").length == 0){
        $('.top3').remove()
      }
      getSum();
  })

  $(".scxz").click(function() {
        $("input:checked").parents(".mai").remove(); //删除对应大盒子
        
        if($(".lqx2").length == 0){
            $('.top2').remove()
          }
          if($(".qx2").length == 0){
            $('.top3').remove()
          }
          getSum();
  })
});
