//tab栏切换所需变量
var all = document.querySelector(".right-head").getElementsByTagName("li");
var div = document.querySelectorAll(".right-one");
var fl = document.querySelector(".left-head").getElementsByTagName("span");
var fll = document.querySelectorAll(".left-one");

//放大镜所需变量
var imgbox = document.querySelector(".img-box");
var bigleft = document.querySelector(".big-left");
var view = document.querySelector(".img-box").querySelector(".view");
var big = document.querySelector(".big");
var bigimg = document.querySelector(".big").querySelector(".bigimg");

//图片切换所需变量
var imglbox = document.querySelector(".img-lbox").querySelectorAll("img");

for (var i = 0; i < imglbox.length; i++) {
  imglbox[i].onmouseover = function () {
    var imgsrc = this.src;
    imgbox.children[1].src = imgsrc;
    bigimg.src = imgsrc;
  };
}
//排他思想所需变量
var divv = document.querySelector(".shezhi").querySelectorAll("div");

//购物车数量所需变量
var sl = document.querySelector(".sl");
var jia = document.querySelector(".jia");
var jian = document.querySelector(".jian");
var body = document.body;
//tab栏切换制作
for (var i = 0; i < all.length; i++) {
  all[i].setAttribute("index", i); //设置自定义属性，并给每个自定义属性index赋值
  all[i].onclick = function () {
    for (var j = 0; j < all.length; j++) {
      all[j].className = ""; //排他思想，去除类名
    }
    for (var i = 0; i < div.length; i++) {
      div[i].style.display = "none"; //排他思想，令所有.right-one盒子为none
    }
    var index = this.getAttribute("index");
    this.className = "js"; //添加.right-head中的li类名
    div[index].style.display = "block"; //令.right-one中的第index个盒子为block
  };
}

for (var i = 0; i < fl.length; i++) {
  fl[i].setAttribute("index", i); //设置自定义属性，并给每个自定义属性index赋值
  fl[i].onclick = function () {
    for (var j = 0; j < fl.length; j++) {
      fl[j].className = ""; //排他思想，去除类名
    }
    for (var i = 0; i < fll.length; i++) {
      fll[i].style.display = "none"; //排他思想，令所有.right-one盒子为none
    }
    var index = this.getAttribute("index");
    this.className = "fl"; //添加.right-head中的li类名
    fll[index].style.display = "block"; //令.right-one中的第index个盒子为block
  };
}

/* 放大镜制作 */
imgbox.onmouseover = function () {
  //鼠标经过
  view.style.display = "block";
  big.style.display = "block";
};
imgbox.onmouseout = function () {
  //鼠标离开
  view.style.display = "none";
  big.style.display = "none";
};
imgbox.onmousemove = function (e) {
  //盒子内的鼠标中心坐标= 鼠标距离页面坐标距离 - 盒子距离页面的距离 - 视图框中心
  var left = e.pageX - bigleft.offsetLeft - view.offsetWidth / 2; //不要使用clientX
  var top = e.pageY - bigleft.offsetTop - view.offsetHeight / 2; //不要使用clientY
  //进行判断语句（固定0的位置）
  //向左走
  if (left <= 0) {
    left = 0;
  }
  //向上走
  if (top <= 0) {
    top = 0;
  }
  //向右走
  if (left >= imgbox.offsetWidth - view.offsetWidth) {
    left = imgbox.offsetWidth - view.offsetWidth;
  }
  //向下走
  if (top >= imgbox.offsetHeight - view.offsetHeight) {
    top = imgbox.offsetHeight - view.offsetHeight;
  }
  //镜头距离左边的位置==鼠标距离左边的位置
  view.style.left = left + "px";
  view.style.top = top + "px";

  //小图的移动比例 = 坐标/小图的最大移动距离
  var smallX = left / (imgbox.offsetWidth - view.offsetWidth);
  var smallY = top / (imgbox.offsetHeight - view.offsetHeight);
  //大图的移动比例 = 小图的移动比例*大图的最大移动距离
  var bigX = -smallX * (bigimg.offsetWidth - big.offsetWidth);
  var bigY = -smallY * (bigimg.offsetHeight - big.offsetHeight);

  bigimg.style.left = bigX + "px"; //大图右边的位置等于小图右边的位置
  bigimg.style.top = bigY + "px";
};

/* 图片切换制作 */
for (var i = 0; i < imglbox.length; i++) {
  //遍历下栏所有图片
  imglbox[i].onmouseover = function () {
    //经过每一张图时
    var imgsrc = this.src; //获取指向的图的路径
    imgbox.children[1].src = imgsrc; //更改上图路径
    bigimg.src = imgsrc; //更改大图路径
  };
}

/* 排他思想(按钮颜色切换) */
for (var i = 0; i < divv[0].parentNode.children.length; i++) {
  //第i行
  for (var j = 0; j < divv[i].children.length; j++) {
    //第j列

    divv[i].children[0].onclick = function () {
      //点击所有行的第一个孩子时
      this.className = "b"; //将其类改为b,若不添加，点击选择颜色、选择版本等 类会改变
    };

    if (i == 0) {
      //若是第一行
      divv[i].children[j].onclick = function () {
        for (var j = 0; j < divv[0].children.length; j++) {
          //第j列
          divv[0].children[j].className = "b"; //去除a类名变b类名
        }
        this.className = "a"; //更改为a类名
      };
    }
    if (i == 1) {
      //若是第二行,以此类推
      divv[i].children[j].onclick = function () {
        for (var j = 0; j < divv[1].children.length; j++) {
          //第j列
          divv[1].children[j].className = "b"; //去除a类名变b类名
        }
        this.className = "a"; //更改为a类名
      };
    }
    if (i == 0) {
      divv[i].children[j].onclick = function () {
        for (var j = 0; j < divv[0].children.length; j++) {
          //第j列
          divv[0].children[j].className = "b"; //去除a类名变b类名
        }
        this.className = "a"; //更改为a类名
      };
    }
    if (i == 1) {
      divv[i].children[j].onclick = function () {
        for (var j = 0; j < divv[1].children.length; j++) {
          //第j列
          divv[1].children[j].className = "b"; //去除a类名变b类名
        }
        this.className = "a"; //更改为a类名
      };
    }
    if (i == 2) {
      divv[i].children[j].onclick = function () {
        for (var j = 0; j < divv[2].children.length; j++) {
          //第j列
          divv[2].children[j].className = "b"; //去除a类名变b类名
        }
        this.className = "a"; //更改为a类名
      };
    }
    if (i == 3) {
      divv[i].children[j].onclick = function () {
        for (var j = 0; j < divv[3].children.length; j++) {
          //第j列
          divv[3].children[j].className = "b"; //去除a类名变b类名
        }
        this.className = "a"; //更改为a类名
      };
    }
    if (i == 4) {
      divv[i].children[j].onclick = function () {
        for (var j = 0; j < divv[4].children.length; j++) {
          //第j列
          divv[4].children[j].className = "b"; //去除a类名变b类名
        }
        this.className = "a"; //更改为a类名
      };
    }
  }
}

/* 购物车数量 */
sl.value = sl.innerHTML;
sl.value = 1;
jia.onclick = function () {
  sl.value++;
};
jian.onclick = function (e) {
  if (sl.value <= 0) {
    e.onclick = null;
  } else {
    sl.value--;
  }
};

body.onclick = function () {
  if (sl.value <= 0) {
    sl.value = 1;
  } else if (sl.value > 200) {
    sl.value = 200;
  }
};
