var bo=document.getElementById("bo");
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