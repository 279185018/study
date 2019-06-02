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
    
    <title>My JSP 'film.jsp' starting page</title>
    
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
    String y=request.getParameter("t");
    int t=Integer.parseInt(y);
    int i;
    String a="aaaaa!";
    String b=null;
    String c=null;
           ResultSet rs=db.film(t); //数据库查询 
           if(rs.next()){
             for(i=0;i<10;i++){
             b=rs.getString(1);
               c=rs.getString(2);
             a=a+b+"#"+c+"&";
             rs.next();
             }
           }
    response.getWriter().print(a);                     //向ajax返回值
    response.getWriter().close();%>

  </body>
</html>
