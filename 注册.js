//输入框所需变量
var sjh = document.getElementById("sjh");
var yzm = document.getElementById("yzm");
var mm = document.getElementById("mm");
var qrmm = document.getElementById("qrmm");
var cw = document.querySelectorAll("#cw");
var zq = document.querySelectorAll("#zq");
var ms = document.querySelectorAll("#ms");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
//输入框制作
sjh.onkeyup = function () {
  var tel = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
  if (this.value.length === 0) {
    cw[0].style.display = "none";
    ms[0].id = "ms";
    ms[0].style.color = "gray";
    ms[0].innerHTML = "请输入11位手机号";
    zq[0].style.display = "none";
  } else if (tel.test(this.value)) {
    cw[0].style.display = "none";
    ms[0].id = "ms1";
    ms[0].style.color = "green";
    ms[0].innerHTML = "格式正确";
    zq[0].style.display = "inline-block";
  } else if (this.value.length < 11 || this.value.length > 11) {
    cw[0].style.display = "inline-block";
    ms[0].id = "ms2";
    ms[0].style.color = "red";
    ms[0].innerHTML = "请输入11位手机号";
    zq[0].style.display = "none";
  }
};
yzm.onkeyup = function () {
  if (this.value.length === 0) {
    cw[1].style.display = "none";
    ms[1].id = "ms";
    ms[1].style.color = "gray";
    ms[1].innerHTML = "请输入4位验证码";
    zq[1].style.display = "none";
  } else if (this.value.length === 4) {
    cw[1].style.display = "none";
    ms[1].id = "ms1";
    ms[1].style.color = "gray";
    ms[1].innerHTML = "输入正确";
    zq[1].style.display = "inline-block";
  } else if (this.value.length < 4 || this.value.length > 4) {
    cw[1].style.display = "inline-block";
    ms[1].id = "ms2";
    ms[1].style.color = "red";
    ms[1].innerHTML = "请输入4位验证码";
    zq[1].style.display = "none";
  }
};
mm.onkeyup = function () {
  var rg = /^[a-zA-Z]\w{5,17}$/
  if (rg.test(this.value)) {
    ms[2].innerHTML = '格式正确'
    ms[2].style.color = 'green'
    if (this.value.length === 0) {
      ms[2].id = "ms";
      ms[2].style.display = "inline-clock"
      ms[2].style.color = "gray";
      one.style.background = "rgb(238, 131, 131)";
      two.style.background = "rgb(150, 189, 150)";
      three.style.background = "rgb(243, 216, 165)";
    } else if (this.value.length >= 18) {
      one.style.background = "rgb(238, 131, 131)";
      two.style.background = "rgb(150, 189, 150)";
      three.style.background = "orange";
    } else if (this.value.length >= 12) {
      one.style.background = "rgb(238, 131, 131)";
      two.style.background = "green";
      three.style.background = "rgb(243, 216, 165)";
    } else if (this.value.length >= 6 || this.value.length < 6) {
      one.style.background = "red";
      two.style.background = "rgb(150, 189, 150)";
      three.style.background = "rgb(243, 216, 165)";
    }
  } else {
    ms[2].innerHTML = '字母开头，长度在6~18之间，只能包含字母、数字和下划线'
    ms[2].style.color = 'red'
  }
  if (this.value === qrmm.value && qrmm.value != 0 && this.value != 0) {
    cw[2].style.display = "none";
    ms[3].id = "ms1";
    ms[3].style.color = 'green'
    zq[2].style.display = "inline-block";
    ms[3].innerHTML = "密码正确";
  }
};

qrmm.onkeyup = function () {
  if (this.value.length === 0) {
    cw[2].style.display = "none";
    ms[3].id = "ms";
    ms[3].style.color = 'red'
    ms[3].innerHTML = "请确认密码";
    zq[2].style.display = "none";
  } else if (this.value === mm.value) {
    cw[2].style.display = "none";
    ms[3].id = "ms1";
    ms[3].style.color = 'green'
    zq[2].style.display = "inline-block";
    ms[3].innerHTML = "密码正确";
  } else if (this.value !== mm.value) {
    cw[2].style.display = "inline-block";
    ms[3].id = "ms2";
    ms[3].style.color = 'red'
    ms[3].innerHTML = "密码不匹配";
    zq[2].style.display = "none";
  }
};

//完成注册所制作
var wczc = document.querySelector('.finish').querySelector('button')
var form = document.querySelector('form')
var a, b, c;
wczc.onclick = function () {

  //手机号
  if (sjh.value.length < 11 || sjh.value.length > 11) {
    cw[0].style.display = "inline-block";
    ms[0].style.color = "red";
    form.action = 'javascript:;'
  } else {
    cw[0].style.display = "none";
    a = 1;
  }
  //短信验证
  if (yzm.value.length < 4 || yzm.value.length > 4) {
    cw[1].style.display = "inline-block";
    ms[1].style.color = "red";
    form.action = 'javascript:;'
  } else {
    b = 1;
  }

  //登录密码
  if (mm.value.length == 0) {
    cw[2].style.display = "inline-block";
    ms[2].style.color = "red";
    ms[2].innerHTML = "请输入密码";
    form.action = 'javascript:;'

  } else if (mm.value == qrmm.value) {
    cw[2].style.display = "none";
  } else if (mm.value != qrmm.value) {
    zq[2].style.display = "none";
  }
  //确认密码
  if (qrmm.value.length == 0 || qrmm.value != mm.value) {
    cw[2].style.display = "inline-block";
    ms[3].style.color = "red";
    ms[3].innerHTML = "密码不匹配";
    form.action = 'javascript:;'
    c = 0;
  } else {
    cw[2].style.display = "none";
    zq[2].style.display = "inline-block";
    c = 1;
  }
  var d = a + b + c;
  if (d == 3) {
    form.action = '主页面.html'
  }


}
