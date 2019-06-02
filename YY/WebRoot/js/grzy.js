var lj="./";
var win=0;                            //1个人信息，2购票信息对应窗口
window.onload=grxx(); 
function grxx(){	
	dl1();                            //跳转判断是否已登录   
}  

function sx(i){                       //刷新到对应窗口页面
	var a2=document.getElementsByClassName("a2");
	a2[0].setAttribute("onclick","sx("+win+")");
	a2[0].setAttribute("class","a");
	var a=document.getElementsByClassName("a");
	a[i].setAttribute("onclick","null");
	a[i].setAttribute("class","a2");
	win=i;
	var iframe=document.getElementsByTagName("iframe")[0];
	if(i==2){
		iframe.setAttribute("src","./cz.html");
	}else if(i==1){
	iframe.setAttribute("src","./gpxx.html");
}else{
	iframe.setAttribute("src","./grxx.html");
}}
