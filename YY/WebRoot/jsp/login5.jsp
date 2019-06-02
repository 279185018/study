<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="data.*" %>
<%@ page import="java.sql.*"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ page import="java.sql.*"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'login5.jsp' starting page</title>
    
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
    int m2;
    String cz1=new String(request.getParameter("cz2")); 
   int cz=Integer.parseInt(cz1);     
     String id=(String)session.getAttribute("id");
   ResultSet rs=db.executeQuery(id);
       if(rs.next()){
       String m1=rs.getString(4);
          m2=Integer.parseInt(m1);
             m2=m2+cz;  
               String m3=String.valueOf(m2);
               db.moy(id,m3);  
                 out.print("<script language='javaScript'> alert('充值成功，将为您返回首页');</script>");
        response.setHeader("refresh", "0;url=../index.html");
       }
  
     %>
  </body>
</html>
