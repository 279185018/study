var b=new Array();
var a=new Array();
		var i=1;                           //控制显示哪张电影票
var win=document.getElementById("window");
window.onload=gpxx(); 
function gpxx(){
	var xhr=new XMLHttpRequest();   //创建AJAX向后台传值
	  xhr.onreadystatechange=function(){
		  if(xhr.readyState==4){
			  if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
				 a=xhr.responseText.split("#");
				if(a[1]!=0){
				b=a[0].split("!");
				win.childNodes[1].innerHTML="当前影票("+a[1]+")";
				gpd(1);
				}else{
					win.childNodes[1].innerHTML="当前影票("+a[1]+")";
					win.childNodes[3].childNodes[1].innerHTML="当前无待看电影";
					
				}
			  }}}
		    xhr.open("post","./jsp/gpxx.jsp",false);
	
		    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		    xhr.send(null);
} 
function gpd(i){                                 //显示网页信息
	var c=b[i].split("&");
	win.childNodes[3].childNodes[1].innerHTML="电影名："+c[1];
	win.childNodes[3].childNodes[4].innerHTML="观影时间："+c[2];
	win.childNodes[3].childNodes[6].innerHTML="座位号："+c[3];
}               
