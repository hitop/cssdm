var nt=0;dd=1;

var ddm = document.createElement("div");
ddm.id = "ddm";
ddm.innerHTML = '<input id="indm" type="text" onclick=inputcg(id) style="color:#B1ACAC;" onkeyup=dm(this.value) value="没事来发个弹幕吧！"/>';
document.body.appendChild(ddm);

function dm (content) {
  if(event.keyCode == 13){
    var t = new Date().getTime();
    if (t - nt < 10000) {alert("发送太快了！过10秒再发吧！");}
    else{
      nt = t;
      document.getElementById('indm').value="";
      divbyclass(content);
    }
  }
}

function inputcg (id) {
  var i = document.getElementById(id);
  i.value='';
  i.removeAttribute("onclick");
  i.removeAttribute("style");
}

function divbyclass (co) {
  var newdiv = document.createElement("div");
  newdiv.setAttribute("class",'danmu');
  newdiv.innerHTML=co;
  var t = 6 + (dd - 1)*46;
  newdiv.style.top = t + "px";
  if (dd>=4) {dd=1;}
  else dd=dd+1;
  document.body.appendChild(newdiv);
  setTimeout('$(".danmu:first").remove()', 9600 )
}