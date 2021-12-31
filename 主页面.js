//每1.7秒切换一张图所需变量
var focus = document.querySelector(".focus");
var bigimg = document.querySelector(".focus").querySelector("img");
var fspan = document.querySelector(".focus").querySelectorAll("span");
var little = document.querySelector(".little");

//轮播图1制作，每1.7秒切换一张图
var img = [
  "limages/动漫1.png",
  "limages/动漫2.jpg",
  "limages/动漫3.jpg",
  "limages/动漫4.jpg",
  "limages/动漫5.png",
  "limages/动漫3.jpg"
];
for(var i = 0;i<img.length;i++) { //小点个数=img的个数
  var p =document.createElement('p');
  little.appendChild(p);
}

var nums = 0;
little.children[0].style.background = "skyblue";
function change() {
  nums++;
  if (nums === img.length) {
    nums = 0;
  }
  bigimg.src = img[nums];
  for (var i = 0; i < little.children.length; i++) {
    //小点排他思想
    little.children[i].style.background = "white";
  }
  little.children[nums].style.background = "skyblue";
}
var star = setInterval(change, 2000); //没1.7秒调用一次函数

//点击小点切图制作
var a = 0;
for (var i = 0; i < little.children.length; i++) {
  little.children[i].index = i; //获取点击小点的索引
  little.children[i].onclick = function () {
    bigimg.src = img[this.index]; //获取的小点对应图片
    nums = this.index;
    for (var i = 0; i < little.children.length; i++) {
      //排他思想
      little.children[i].style.background = "white";
    }
    little.children[this.index].style.background = "skyblue";
  };
}

//点击左右箭头切换图片制作
fspan[0].onclick = function () {
  clearInterval(star);
   --nums; //点击一次左，则nums减1
  if (nums < 0) {
    //若cont<0时
    nums = img.length - 1; //则nums等于4
    bigimg.src = img[nums]; //图片地址等于最后一个地址
  }
  for (var i = 0; i < little.children.length; i++) {
    little.children[i].style.background = "white";
  }
  little.children[nums].style.background = "skyblue";

  star = setInterval(star, 2000);
  bigimg.src = img[nums];
};

fspan[1].onclick = function () {
  clearInterval(star);
   ++nums; //点击一次右，则nums减1
  if (nums > img.length - 1) {
    //若cont>图片长度-1时
    nums = 0; //则nums等于0
    bigimg.src = img[nums]; //图片地址等于第一个地址
  }
  for (var i = 0; i < little.children.length; i++) {
    //小点排他思想
    little.children[i].style.background = "white";
  }
  little.children[nums].style.background = "skyblue";

  star = setInterval(star, 2000);
  bigimg.src = img[nums];
};

//指向时停止切换图片
focus.onmouseenter = function () {
  clearInterval(star);
  fspan[0].style.display = "block";
  fspan[1].style.display = "block";
};
//离开时继续切换图片
focus.onmouseleave = function () {
  star = setInterval(change, 2000);
  fspan[0].style.display = "none";
  fspan[1].style.display = "none";
};


//登陆跳转制作
var params = location.search.substr(1); //从第二个字符开始获取后面字符，包括第二个

var arr = params.split("="); //利用‘=’号分隔两边，形成数组
console.log(location.search);
var fl = document.querySelector(".fl");
var fl1 = document.querySelector(".fl1");
fl1.innerHTML =
  arr[1] + "用户，品优购欢迎您" + '<a href="主页面.html">退出登录</a>'; //

if (arr[1] == 0 || arr == 0) {
  fl1.style.display = "none";
  fl.style.display = "block";
} else if (arr !== 0) {
  fl1.style.display = "block";
  fl.style.display = "none";
}

//页面滚动制作
var fixed = document.querySelector(".fixed");
var search1 = document.querySelector(".search1");
var db = document.querySelector(".db");

window.onscroll = function () {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 1740) {
    fixed.style.display = "none";
  } else {
    fixed.style.display = "block";
  }
  if (window.pageYOffset >= 827) {
    db.style.display = "block";
  } else {
    db.style.display = "none";
  }
  if (window.pageYOffset >= 400) {
    search1.style.position = "fixed";
    search1.style.display = "block";
  } else {
    fixed.style.position = "absolute";
    search1.style.display = "none";
  }
  if (window.pageYOffset >= 190) {
    fixed.style.position = "fixed";
    fixed.style.top = "5px";
  } else {
    fixed.style.position = "absolute";
    fixed.style.top = "0";
  }
};
//滚动搜索框缓出效果
setInterval(function () {
  search1.style.top = search1.offsetTop + 1 + "px"; //top值循环++
  if (search1.offsetTop >= 10) {
    //若offsetTop大于10则固定住top值
    search1.style.top = 10 + "px";
  }
}, 10);

//页面的跳转滚动效果
var fixa = document.querySelector(".fixed").querySelectorAll("a");
var html = document.documentElement;
function animate(obj, target) {
  //动画封装函数
  clearInterval(obj.timer); // 先清除以前的定时器，只保留当前的一个定时器执行
  obj.timer = setInterval(function () {
    //然后再执行定时器
    var step = (target - obj.scrollTop) / 10; //缓出核心算法
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    obj.scrollTop = obj.scrollTop + step;
    if (obj.scrollTop == target) {
      //若滚动的值等于最大值
      clearInterval(obj.timer);
    }
    window.onmousewheel = function () { //当鼠标滚轮滚动时跳转失效
      clearInterval(obj.timer);
    }

  }, 10);
}

for (var i = 0; i < fixa.length-8; i++) { //fixa.length-8是因为目前总共11个只有3个链接能用，根据自己需求修改
  //遍历所有点击
  fixa[i].addEventListener("click", function () {
    for (var i = 0; i < fixa.length-8; i++) {
      //遍历所有点击后事件
      var arr = [832, 1312, 1716]; //将最大滚动距离存入数组
      if (this == fixa[i]) {
        //若两个标签相等
         //则动画封装函数获取相应值
        animate(html, arr[i]);
      }  
    }
  });
}
//点击返回顶部，让页面到顶端
fixa[fixa.length-1].onclick = function(){ 
  animate(html, 0);
}




//动态倒计时制作
var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var second = document.querySelector(".second");
var inputTime = +new Date("2021-4-15 16:44:44");
countDown(); //先执行一次时间
setInterval(countDown, 1000); //然后每隔1秒执行
function countDown(time) {
  var nowTime = +new Date();
  var times = (inputTime - nowTime) / 1000;
  var h = parseInt(times / 60 / 60);
  h = h < 10 ? "0" + h : h;
  hour.innerHTML = h;
  var m = parseInt((times / 60) % 60);
  m = m < 10 ? "0" + m : m;
  minute.innerHTML = m;
  var s = parseInt(times % 60);
  s = s < 10 ? "0" + s : s;
  second.innerHTML = s;
}



