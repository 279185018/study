var header=document.getElementsByTagName("header")[0];
 var fragment=document.createDocumentFragment();
 var tp=document.getElementById("tp");
 function table(lj,user,moy){    
	 var table=document.createElement("table");          //创建登录信息
	 var tr1=document.createElement("tr");
	 var tr2=document.createElement("tr");
	 var td1=document.createElement("td");
	 var td2=document.createElement("td");
	 var td3=document.createElement("td");
	 var td4=document.createElement("td");
	 var td5=document.createElement("td");
	 var td6=document.createElement("td");
	 var a1=document.createElement("a");
	 var a3=document.createElement("a");
	 var img1=document.createElement("img");
	 var img2=document.createElement("img");
	 img1.setAttribute("src",lj+"img/img2.jpg");
	 img1.setAttribute("alt","购票信息");
	 img2.setAttribute("src",lj+"img/img9.jpg");
	 img2.setAttribute("alt","退出");
	 a1.setAttribute("href",lj+"grzy.html");
	 a1.appendChild(img1);
	 a3.setAttribute("href",lj+"grzy.html");
	 a3.innerHTML="购票信息";
	 td1.appendChild(a1);
	 td2.innerHTML="ID:"+user;
	 td3.appendChild(img2);
	 td3.setAttribute("onclick","th1()");
	 td4.appendChild(a3);
	 td5.innerHTML = "余额:"+moy;
	 td6.innerHTML="退出";
	 td6.setAttribute("onclick","th1()");
	 tr1.appendChild(td1);
	 tr1.appendChild(td2);
	 tr1.appendChild(td3);
	 tr2.appendChild(td4);
	 tr2.appendChild(td5);
	 tr2.appendChild(td6);
	 table.appendChild(tr1);
	 table.appendChild(tr2);
	 table.setAttribute("id","dl1");
	 fragment.appendChild(table);
	
	 th();
 }
 function th1(){                                    //退出
	 var xhr=new XMLHttpRequest();
	 xhr.open("post",lj+"/jsp/dl.jsp",false);
	    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	    xhr.send("t=y");
	 th();
	 
 }
 function jt(now){                          //获取今天日期并转为mm-xx格式
		var month=now.getMonth();
		var m=null;
		switch(true){
		case month==0:m="01";break;
		case month>=1 && month<9: m="0"+(month+1);break;
		case month==9:m==10;break;
		case month==10:m=11;break;
		case month==11: m=12;break;
		default:alert("不存在日期，你是外星人！");
		}
		var day=m+"-"+now.getDate();
		return day;
		}
function th(){                 //替换登录区域(登录-退出)
	fragment.appendChild(header.replaceChild(fragment.lastChild,header.childNodes[5]));
}

function dl1(){                                     //刷新，跳转确认登录
	var xhr=new XMLHttpRequest();   //创建AJAX向后台传值
	  xhr.onreadystatechange=function(){
		  if(xhr.readyState==4){
			  if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
				  if(xhr.responseText!=="no"){
					
				  var a=xhr.responseText.split("&");
				table(lj,a[1],a[0]);
			}}}}
		    xhr.open("post",lj+"/jsp/dl.jsp",false);
		    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		    xhr.send("t=1");
}
function dl(){                                       //登录
	  var id=document.getElementById("id").value;
		var psd=document.getElementById("psd").value;
		if(id==""){
			alert("账号不能为空");
		}else if(psd==""){
			alert("密码不能为空");
		}else{		 
	    var xhr=new XMLHttpRequest();   //创建AJAX向后台传值
	    xhr.open("post",lj+"/jsp/login.jsp",false);
	    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	    xhr.send("id="+id+"&psd="+psd);
        if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
      	 var a=xhr.responseText;
      	  if(a=="psd"){
      		  alert("密码错误，请重新输入");
	    	}else if(a=="id"){
	    		alert("账号错误，请重新输入"); 	    		
	    	}else{
	    		 var b=xhr.responseText.split("&");
	    		
	    		var user=b[1];
	    		 var moy=b[2];
	    		 table(lj,user,moy);
	    		 
	    	}
        }
		}
}
function zc(){
	 window.location.href=lj+"zc.html";
}