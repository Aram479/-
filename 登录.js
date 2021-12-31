//仿京东查询单号所需变量
var ipt = document.querySelector('.user').querySelector('input');
var s = document.querySelector('.s');
var sj = document.querySelector('.sj');

//隐藏显示密码所需变量
var eye = document.querySelector('.psd').querySelector("i");
var input = document.querySelector('.psd').querySelector("input");


//隐藏显示密码
var flag = 0;
eye.onclick = function () {
  if (flag == 0) {
    eye.innerHTML = "&#xe733;";
    input.type = "text";
    flag = 1;
  }else if(flag== 1) {
    eye.innerHTML = "&#xe605;";
    input.type = "password";
    flag = 0;
  }
};

//仿京东查询单号
ipt.addEventListener('keyup',function() { //且当按键弹起时
    if(this.value != ''){ //按键值>0
      s.style.display = 'block' //显示s
      sj.style.display = 'block' //显示s
    }
    s.innerHTML=ipt.value; //盒子s获取input值
    if(this.value =='') { //若值等于0
      s.style.display = 'none' //隐藏盒子
      sj.style.display = 'none' //显示s
    }
})

ipt.addEventListener('focus',function() {//当ipt获取焦点时
    if(this.value =='') { //若值为空
        s.style.display = 'none' 
        sj.style.display = 'none' 
      }else {             //若值不为空
        s.style.display = 'block' 
        sj.style.display = 'block'
      }
})
  ipt.addEventListener('blur',function() { //当ipt失去焦点时
    s.style.display = 'none' 
    sj.style.display = 'none'
  })

  