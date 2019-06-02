var lj="../";
var di=document.getElementById("zw");
var kkk=new Array();                     //0:日期    1:场次   2：影片序号    3：厅号  
var a9=new Array("no");                      //存入已选座位
var a5=new Array();    //存入已选座位
var t9=0;                                 //选票张数
window.onload=gp(); 
function gp(){	 
	 var url = location.search;     
		var url1=url.split("?");
		kkk=url1[1].split("&");	
	dl1();
   lagp();
} 
function lagp(){                                     //改写以售出座位图片显示
	var xhr=new XMLHttpRequest();   //创建AJAX向后台传值
	  xhr.onreadystatechange=function(){
		  if(xhr.readyState==4){
			  if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
               a9=xhr.responseText.split("!");  
               var a8=document.getElementsByClassName('bu');       //所有座位
               var a7=new Array(a9.length);
               for(i=0;i<a9.length;i++){
            	   a7[i]=a8.namedItem(a9[i]);
            	   a7[i].setAttribute("onclick","tx()");
            	   a7[i].firstChild.setAttribute("src","../img/img13.jpg");
               }}}}
		    xhr.open("post","../jsp/gp.jsp",false);
		    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		    xhr.send("x="+kkk[0]+"&y="+kkk[1]+"&z="+kkk[2]+"&v="+kkk[3]+"&t=1");
}
function tx(){                                 //选择已售出座位提醒
	alert("该位置已被人预定请选择其它座位");
} 
function ff(x){                  //选择座位
    var a8=document.getElementsByClassName('bu');       //所有座位
	var pj=a8.namedItem(x);
	  pj.firstChild.setAttribute("src","../img/img14.jpg");
	  pj.setAttribute("onclick","gg('"+x+"')");
	var p3=document.getElementById("p3");
	var p2=p3.innerHTML+x+" ";
	p3.innerHTML=p2;
	var p4=document.getElementById("p4");
	a5[t9]=x;
	t9=t9+1;
	var v=t9*30;
	p4.innerHTML="所需金额："+v;
}
function gg(x){                   //取消选票
	   var a8=document.getElementsByClassName('bu');       //所有座位
		var pj=a8.namedItem(x);
		  pj.firstChild.setAttribute("src","../img/img12.jpg");
		  pj.setAttribute("onclick","ff('"+x+"')");
		  var p3=document.getElementById("p3");
			var p2=p3.innerHTML;
			var pt=p2.indexOf(x,0);
			var pt1=p2.substring(0,pt);
			var pt2=p2.substring(pt+3);
			var pt3=pt1+pt2;
			p3.innerHTML=pt3;
			var p4=document.getElementById("p4");
			t9=t9-1;
			var v=t9*30;
			p4.innerHTML="所需金额："+v;
}
function hh(){                             //购票确认
	var a4="!";
	for(i=0;i<t9;i++){
		a4=a4+a5[i]+"!";
	}
	if(t9!=0){
	var xhr=new XMLHttpRequest();   
	  xhr.onreadystatechange=function(){
		  if(xhr.readyState==4){
			  if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
				  if(xhr.responseText!=="no"){
					  var xhrr=new XMLHttpRequest();
					  xhrr.onreadystatechange=function(){ 
						  if(xhrr.readyState==4){
							  if((xhrr.status>=200&&xhrr.status<300)||xhrr.status==304){
								if(xhrr.responseText=="yes"){
									alert("购票成功，将为您跳转主页");
									 window.location.href="../index.html";
								}else{
									alert("余额不足，请您先充值");
								}
							}}}
					
					  xhrr.open("post","../jsp/gp.jsp",true);
					    xhrr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
					    xhrr.send("zz='"+a4+"'&pp="+t9+"&t=0");
					 
					 }else{
						 alert("请您先登录");
					 }
			}}}
		    xhr.open("post","../jsp/dl.jsp",true);
		    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		    xhr.send("t=1");
	}else{
		alert("请先选择座位");
	}
	
}