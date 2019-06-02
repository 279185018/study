
function cz(){

	 var mo=document.getElementById("cz2").value;
	  var xhrr=new XMLHttpRequest();
	  xhrr.onreadystatechange=function(){ 
		  if(xhrr.readyState==4){
			  if((xhrr.status>=200&&xhrr.status<300)||xhrr.status==304){
					alert("充值成功，将为您返回首页");
					javascript:top.location.href="./index.html";

			}}}
	
	  xhrr.open("post","./jsp/cz.jsp",false);
	    xhrr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	    xhrr.send("moy1="+mo);
}