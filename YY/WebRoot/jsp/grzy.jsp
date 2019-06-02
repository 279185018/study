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
    
    <title>My JSP 'grzy.jsp' starting page</title>
    
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
    String a=null;
     String id=(String)session.getAttribute("id");
 
      ResultSet rs=db.xx(id); 
      if(rs.next()){
      String a1=rs.getString(1);
      String a2=rs.getString(2);
      String a3=rs.getString(3);
      String a4=rs.getString(4);
      a=a1+"!"+a2+"!"+a3+"!"+a4;
      }
        response.getWriter().print(a);                     //向ajax返回值
    response.getWriter().close();  
     %>
 </body>
</html>
