var tbp=document.getElementsByClassName('qy');
var img=document.getElementsByClassName('tp');
var table1=document.getElementById("tab");
var da1=document.getElementById("da1");
var da2=document.getElementById("da2");
var da3=document.getElementById("da3");
var tdd=document.getElementsByClassName("da");
var kkk=new Array(2);                      //kkk[1]存放电影序号
var aaa=new Array(3);
var lj="../";
var ppp=null;                         //存入当前显示日期
var ccc=0;
var ttt=new Array();
var now=new Date();                 //获取时间
	var today=jt(now);
	 var today1=now.getFullYear();
	 var today2=today1+"-"+today;
	 var bbb=new Array(4);   //存放毫秒数 1：第一个，2第二个，3第三个 0当前是第几个（1，2，3）
	var xxx=0;           //订票时确定有没有选择场次     
	//*************************************************************************************
window.onload=film(); 
function film(){	

	dl1();                               //跳转判断是否已登录          
	fd();                                    //绘制排片表
}       

function tb(t){       //切图-上页
	if(t<1){}
	else{
		tbp[0].setAttribute("onclick", "tb("+(t-1)+")");
		tbp[1].setAttribute("onclick", "tp("+(t+4)+")");
	 for(i=0;i<4;i++){
		 var x=img[i].getAttribute("src");
		 var y = x.replace('-'+(t+1), '-'+t);
		 t=t+1;
	 img[i].setAttribute("src",y);
	}}
}
function tp(t){             //切图-下页
	if(t>6){}
	else{
		tbp[0].setAttribute("onclick", "tb("+(t-4)+")");
		tbp[1].setAttribute("onclick", "tp("+(t+1)+")");
	 for(i=0;i<4;i++){
		 var x=img[i].getAttribute("src");
		 var y = x.replace('-'+(t-4), '-'+(t-3));
		 t=t+1;
	 img[i].setAttribute("src",y);
	}}
}
function gp(){                       //购票按钮响应事件
	var xhr=new XMLHttpRequest();   
	  xhr.onreadystatechange=function(){
		  if(xhr.readyState==4){
			  if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
				  if(xhr.responseText!=="no"){
					  if(xxx==0){
						  alert("请先选择排片场次");
					  }else{
					var yt=ttt[xxx-1];
					 var yt1=bbb[bbb[0]].getFullYear();
					 var yt2=yt1+"-"+jt(bbb[bbb[0]]);
						 window.location.href="./gp.html?"+yt2+"&"+xxx+"&"+kkk[1]+"&"+yt;  //日期+场次+影片序号+厅号
					  }
					 }else{
						 alert("请您先登录");
					 }
			}}}
		    xhr.open("post",lj+"/jsp/dl.jsp",true);
		    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		    xhr.send("t=1");
	
	
}
function fc(e){                                    //读取数据库当前排片信息并插入-绘制场次数据

	var xhr=new XMLHttpRequest();   
	  xhr.onreadystatechange=function(){
		  if(xhr.readyState==4){
			  if((xhr.status>=200&&xhr.status<300)||xhr.status==304){				
				 var a=xhr.responseText.split("!");				 
				 var b=a[1].split("&");
				 for(i=0;i<a[0];i++){	                                  
			var c=b[i].split("-");
            ttt[i]=c[0];
			var c1=parseInt(parseInt(c[1])/60);                             //将时间分钟数转换为24小时制
			      var c2=parseInt(c[1])%60;  
			      var e1=parseInt((parseInt(aaa[0])+parseInt(c[1]))/60);
			      var e2=(parseInt(aaa[0])+parseInt(c[1]))%60;
                  if(c2==0){
                	  var c3=c1+":00——";
                  }else if(c2<10){
                	   c3=c1+":0"+c2+"——";
                  }else{
                	   c3=c1+":"+c2+"——";
                  }
                  if(e2==0){
                	  c3=c3+e1+":00";
                  }else if(e2<10){
                	  c3=c3+e1+":0"+e2;
                  }else{
                	  c3=c3+e1+":"+e2;
                  }
                  var d=table1.insertRow(2+i);
                  d.setAttribute("bgcolor","#55ADEA");
                  d.setAttribute("onclick","xx("+(2+i)+")");
                  d.setAttribute("class","trr");
                  var d1=new Array(3);
                  for(k=0;k<3;k++){
                	 d1[k]=d.insertCell(k);
                  }
                
                  d1[1].setAttribute("colspan","2");
                  d1[2].setAttribute("colspan","2");
					d1[0].innerHTML="第"+(i+1)+"场";
					d1[1].innerHTML=c3;
					d1[2].innerHTML=c[0]+"厅";
				
				 }
				
			  }}}
		    xhr.open("post","../jsp/fc.jsp",true);
		    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		    xhr.send("t="+kkk[1]+"&z="+e);
}
function fd(){                 //绘制排片表-表头

	 var url = location.search;                        
		 kkk=url.split("?");
		var xhr=new XMLHttpRequest();  
		  xhr.onreadystatechange=function(){
			  if(xhr.readyState==4){
				  if((xhr.status>=200&&xhr.status<300)||xhr.status==304){				
					 aaa=xhr.responseText .split("&");
					 var day = new Date();
		           	  var dd = new Date();
		        	     ppp=today2;
			             if((new Date(today2).getTime())<(new Date(aaa[1]).getTime())){    //判断今天是上映前（影片还未上映）上映中，上映后
			            	 var tr=document.createElement("tr");
			            	 var td=document.createElement("td");
			            	 td.innerHTML="电影上映准备中，敬请期待";
			            	 td.setAttribute("colspan","5");
			            	 tr.setAttribute("class","tr");
			            	 tr.appendChild(td);
			            	 table1.replaceChild(tr,table1.lastChild);
			             }else if((new Date(today2).getTime())>(new Date(aaa[2]).getTime())){
			            	 var tr=document.createElement("tr");
			            	 var td=document.createElement("td");
			            	 tr.setAttribute("class","tr");
			            	 td.innerHTML="电影以下线，感谢支持";
			            	 td.setAttribute("colspan","5");
			            	 tr.appendChild(td);
			            	 table1.replaceChild(tr,table1.lastChild);
			             }else{
			            
			            	  if((new Date(today2).getTime())==(new Date(aaa[1]).getTime())){
			            	
			            		  day.setDate(day.getDate() + 1);
			            		  dd.setDate(dd.getDate()+2);
			            			 var day2=jt(day);	 
						           	  var day3=jt(dd);
			            		  da1.setAttribute("bgcolor","#55ADEA");
			            		  da2.setAttribute("bgcolor","#708090");
			            		   da3.setAttribute("bgcolor","#708090");
			            		 da2.setAttribute("onclick","fdd(2)"); 
					           	  da3.setAttribute("onclick","fdd(3)");
					           	da1.innerHTML=today;			            	
					        	 da2.innerHTML=day2;
					        	 da3.innerHTML=day3;
					             da1.setAttribute("id","da"); 
					           	 bbb[0]=1;
					           	  bbb[1]=now;
					           	  bbb[2]=day;
					           	  bbb[3]=dd;
			            	  }else if((new Date(today2).getTime())==(new Date(aaa[2]).getTime())){
			
			            		  day.setDate(day.getDate() - 1);
			            		  dd.setDate(dd.getDate()-2);
			            			 var day2=jt(day);	 
						           	  var day3=jt(dd);
			            		  da3.setAttribute("bgcolor","#55ADEA");
			            		  da2.setAttribute("bgcolor","#708090");
			            		   da1.setAttribute("bgcolor","#708090");
			            		   da3.innerHTML=today;			            	
			            			 da2.innerHTML=day2;
			            			 da1.innerHTML=day3;
			            		     da3.setAttribute("id","da"); 
			            		 da1.setAttribute("onclick","fdd(1)"); 
					           	 da2.setAttribute("onclick","fdd(2)");
						           	  bbb[0]=3;
						           	  bbb[1]=dd;
						           	  bbb[2]=day;
						           	  bbb[3]=now;
			            	  }else{
			            		
			            		  day.setDate(day.getDate() - 1);
			            		  dd.setDate(dd.getDate()+1);
			            			 var day2=jt(day);	 
						           	  var day3=jt(dd);
			            		  da2.setAttribute("bgcolor","#55ADEA");
			            		  da1.setAttribute("bgcolor","#708090");
			            		   da3.setAttribute("bgcolor","#708090");
			            		  da2.innerHTML=today;			            	
			            			da1.innerHTML=day2;
			            			da3.innerHTML=day3;
			            		      da2.setAttribute("id","da"); 
			            		  da1.setAttribute("onclick","fdd(1)"); 
					           	  da3.setAttribute("onclick","fdd(3)");  
					           	  bbb[0]=2;
					           	  bbb[1]=day;
					           	  bbb[2]=now;
					           	  bbb[3]=dd;
			            	  }
			            	 var as=fc(today2);
			             }                      
				}}}
			    xhr.open("post","../jsp/ffc.jsp",true);
			    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			    xhr.send("t="+kkk[1]);        
}
function fdd(a){                //换页-排片表，点击变色	

	var row=table1.rows.length;
	for(var i=2;i<row;i++){
		table1.deleteRow(2);
	}
      if(a==0){                        //上一天  
    	  if(bbb[0]!=1){
    	  var da=document.getElementById("da");
    	  da.setAttribute("bgcolor","#708090");
    	  da.setAttribute("onclick","fdd("+bbb[0]+")"); 
    	  da.setAttribute("id","da"+bbb[0]);
    	  var y=bbb[0]-1;
    	  var daa=document.getElementById("da"+y);
    	  daa.setAttribute("bgcolor","#55ADEA");
    	  daa.removeAttribute("onclick"); 
    	  daa.setAttribute("id","da");
    	  var day=jt(bbb[y]);
    	  var day1=bbb[y].getFullYear();
    	  var day2=day1+"-"+day;
    	  bbb[0]=y;
    	  fc(day2);
    	  }else{
    		  bbb[1].setDate(bbb[1].getDate() - 1);
    		  bbb[2].setDate(bbb[2].getDate() - 1);
    		  bbb[3].setDate(bbb[3].getDate() - 1);
    		  da2.innerHTML=jt(bbb[2]);	
    		  da3.innerHTML=jt(bbb[3]);
    		  var day=jt(bbb[1]);
  			da1.innerHTML=day;
  			 var day1=bbb[bbb[0]].getFullYear();
  	    	  var day2=day1+"-"+day;
  		  fc(day2);
    	  }
      }else if(a==4){                                          //下一天
    	  if(bbb[0]!=3){
    		  var da=document.getElementById("da");
        	  da.setAttribute("bgcolor","#708090");
        	  da.setAttribute("onclick","fdd("+bbb[0]+")"); 
        	  da.setAttribute("id","da"+bbb[0]);
        	  var y=bbb[0]+1;
        	  var daa=document.getElementById("da"+y);
        	  daa.setAttribute("bgcolor","#55ADEA");
        	  daa.removeAttribute("onclick"); 
        	  daa.setAttribute("id","da");
        	  var day=jt(bbb[y]);
        	  var day1=bbb[y].getFullYear();
        	  var day2=day1+"-"+day;
        	  bbb[0]=y;
        	  fc(day2);
    	  }else{
    		  da2.innerHTML=jt(bbb[3]);	
    		  bbb[3].setDate(bbb[3].getDate() + 1);
    		  bbb[2].setDate(bbb[2].getDate() + 1);
    		  bbb[1].setDate(bbb[1].getDate() + 1);
    		  var day=jt(bbb[3]);
  			da3.innerHTML=day;
  			 var y=bbb[0]-1;
  			 var day1=bbb[y].getFullYear();
  	    	  var day2=day1+"-"+day;
  			da1.innerHTML=jt(bbb[2]);
  		  fc(day2);
    	  }
      }else{
    	  var da=document.getElementById("da");
    	  da.setAttribute("bgcolor","#708090");
    	  da.setAttribute("onclick","fdd("+bbb[0]+")"); 
    	  da.setAttribute("id","da"+bbb[0]);
    	  var daa=document.getElementById("da"+a);
    	  daa.setAttribute("bgcolor","#55ADEA");
    	  daa.removeAttribute("onclick"); 
    	  daa.setAttribute("id","da");
    	  bbb[0]=a;
    	  var day=jt(bbb[bbb[0]]);
    	  var day1=bbb[bbb[0]].getFullYear();
    	  var day2=day1+"-"+day;
    	  fc(day2);
      }
}
function xx(x){                          //场次选择
	var y=x-2;                      //第几场
	var x1=jt(bbb[bbb[0]]);
	var x2=bbb[bbb[0]].getFullYear();
	var x3=x2+"-"+x1;
	var t5=table1.rows[x];
	if(xxx!=0){
		var t6=table1.rows[xxx+1];
		t6.setAttribute("bgcolor","#55ADEA");
		 t5.setAttribute("class","trt");
	}
	if(new Date(x3).getTime()<new Date(today2).getTime()){
		alert("该日期以过时，请选择 正确日期");
	}else if(new Date(x3).getTime()==new Date(today2).getTime()){
		var t=table1.rows[x].cells[1].innerHTML;
		var t1=t.split("——");
		var t2=t1[0].split(":");
        var t3=now.getHours();
        var t4=now.getMinutes();
    if((t2[0])>t3||((t2[0])==t3&&(t2[1])>t4)){
    
      	 t5.setAttribute("class","trt");
    	t5.setAttribute("bgcolor","#FF0000");
    	 xxx=x-1;
    }else{
    	alert("该场次以放送完毕，请选择未放送场次");
    }
	}else{
    	
   	 t5.setAttribute("class","trt");
    	t5.setAttribute("bgcolor","#FF0000");
    	 xxx=x-1;	
    	
	}
}