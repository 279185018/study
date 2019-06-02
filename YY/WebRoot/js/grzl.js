var bo=document.getElementById("bo");
window.onload=grzl(); 
function grzl(){
	var xhr=new XMLHttpRequest();   //创建AJAX向后台传值
	  xhr.onreadystatechange=function(){
		  if(xhr.readyState==4){
			  if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
				var a=xhr.responseText.split("&");
				bo.childNodes[4].innerHTML=a[0];
				bo.childNodes[8].innerHTML=a[1];
				bo.childNodes[12].innerHTML=a[2];
				bo.childNodes[16].innerHTML=a[3];
				bo.childNodes[20].innerHTML=a[4];
				bo.childNodes[24].innerHTML=a[5];
			  }}}
		    xhr.open("post","./jsp/grzl.jsp",false);
	
		    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		    xhr.send(null);
} 