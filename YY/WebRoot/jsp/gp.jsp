<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="data.*" %>
<%@ page import="java.sql.*"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'gp.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
     <jsp:useBean id="db" class="data.JDBC_Test" scope="page" />
  
  <%
  String t=request.getParameter("t");
  String a=null;
  String b=null;
  String id=null;
   int pt=0;
   int m2=0;
  int k=0;
  int p=0;
  if(t.equals("1")){
  String x=request.getParameter("x");                  //x:日期 y：场次 z：序号 v：厅号 t=1
   String y=request.getParameter("y");
    String z=request.getParameter("z"); 
      String v=request.getParameter("v").toLowerCase(); 
     ResultSet rs=db.zw(x,y,z,v); //数据库查询 a  
     if(rs.next()){
      a=rs.getString(1); 
     }
          session.setAttribute("x",x);
         session.setAttribute("y",y);
           session.setAttribute("z",z);
            session.setAttribute("zw",a);
              session.setAttribute("v",v);
              }else{
         id=(String)session.getAttribute("id");
            String zz=request.getParameter("zz");
             String pp=request.getParameter("pp");    
                String v=(String)session.getAttribute("v");  
                      String z1=(String)session.getAttribute("zw");           
                  pt=Integer.parseInt(pp);              
       ResultSet rs=db.executeQuery(id);
       if(rs.next()){
       String m1=rs.getString(4);
          m2=Integer.parseInt(m1);
               
       }
       if(m2>=(pt*30)){
          m2=m2-pt*30;
     String x=(String)session.getAttribute("x"); 
      String y=(String)session.getAttribute("y"); 
       String z=(String)session.getAttribute("z"); 
          int tt=Integer.parseInt(z);
        String[] zw = zz.split("!");                   
          ResultSet rs1=db.tt(tt); //数据库查询-电影名  
          if(rs1.next()){
            b=rs1.getString(1);
          }
          for(k=0;k<pt;k++){
            db.gp(id,x,y,b,zw[k+1]); //数据库插入    x:日期y:场次z:电影序号 zz：座位号!集合 pp票数 b:电影名 zw:座位号
            z1=z1+"!"+zw[k+1];
                  db.gzw(x,y,z,v,z1);                                                       //已售出座位刷新
          } 
     
         String m3=String.valueOf(m2);
            session.setAttribute("umoy",m3);
           db.moy(id,m3); //刷新金钱           
          a="yes";
      }else{
     a="no";
     }}
    
    response.getWriter().print(a);                     //向ajax返回值
    response.getWriter().close();
  %>
    
  </body>
</html>
