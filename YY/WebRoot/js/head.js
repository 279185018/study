var p1=0;
 var lj="./";
 var text=document.getElementById("text");
 var film=document.getElementById("film");
window.onload=head(); 
 function head(){
	 var t=1;
	dl1();
 aaa(t);
 bbb(t);
}
function aaa(t){                       //影讯模块显示
	  var k=3;
	var xhr=new XMLHttpRequest();   //创建AJAX向后台传值
	  xhr.onreadystatechange=function(){
		  if(xhr.readyState==4){
			  if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
				  var a=xhr.responseText.split("!");
				  parseInt(a[0]);
				  var tit=document.createTextNode("");
				 for(i=0;i<10;i++){
						text.childNodes[k].innerText = '';
					  k=k+3;
				  }
				  k=3;
				  var b=a[1].split("&");
				  var textnode=new Array(10);
				  var c=new Array(2);
				  for(i=0;i<a[0];i++){
					  c=b[i].split("#");
					 textnode[i]=document.createTextNode(c[1]);	
					 text.childNodes[k].setAttribute("href","./text/t"+c[0]+".html");
				 text.childNodes[k].appendChild(textnode[i]);
				  k=k+3;
			  }
				  var p=document.getElementById("sum");
				   p1=parseInt(c[0]/10)+2;
				  p.innerHTML="1/"+p1;	
			  }}}
		    xhr.open("post","./jsp/text.jsp",true);
		    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		    xhr.send("t="+t);
}
function bbb(t){                      //影片模块显示
	 var k=3;
		var xhr=new XMLHttpRequest();   //创建AJAX向后台传值
		  xhr.onreadystatechange=function(){
			  if(xhr.readyState==4){
				  if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
					  var a=xhr.responseText.split("!");
					  var b=a[1].split("&");
					  var filmnode=new Array(10);
					  var c=new Array(2);
					  for(i=0;i<10;i++){
						  c=b[i].split("#");
						filmnode[i]=document.createTextNode(c[1]);
						 film.childNodes[k].setAttribute("href","./film/f"+c[0]+".html?"+c[0]);
						 film.childNodes[k].firstChild.firstChild.setAttribute("src"," ./img/"+c[0]+".jpg");
					 film.childNodes[k].firstChild.lastChild.appendChild(filmnode[i]);
					  k=k+2;
				  }}}}
			    xhr.open("post","./jsp/film.jsp",true);
			    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			    xhr.send("t="+t);
}
function showa(t){                               // text切页图标-下一页
	if(t==2){
		var img3=document.createElement("img");
		 img3.setAttribute("src","./img/img3.jpg");
		 img3.setAttribute("id","ta");
		 img3.setAttribute("onclick","showb(1)");
		 tp.insertBefore(img3,tp.firstChild);
	}else{
		var b=t-1;
		tp.childNodes[0].setAttribute("onclick","showb("+b+")");
	}
	var k=t+1;
	if(t==p1){
	var img1=tp.removeChild(tp.childNodes[2]);
	}else{
	tb.setAttribute("onclick","show("+k+")");
	}
	tp.childNodes[1].innerHTML=t+"/"+p1;
	aaa(t);
}
function showb(t){                                       // text切页图标-上一页
	if(t==p1-1){
		var img4=document.createElement("img");
		 img4.setAttribute("src","./img/img4.jpg");
		 img4.setAttribute("id","tb");
		 img4.setAttribute("onclick","showa("+p1+")");
		 tp.appendChild(img4);
	}else{
		var c=t+1;
		tp.childNodes[2].setAttribute("onclick","showb("+c+")");
	}
	var v=t-1;
	if(t==1){
	var img2=tp.removeChild(tp.childNodes[0]);
	}else{
	tb.setAttribute("onclick","show("+v+")");
	}
	tp.childNodes[1].innerHTML=t+"/"+p1;
	aaa(t);
}
          