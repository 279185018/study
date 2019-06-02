<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="data.*" %>
<%@ page import="java.sql.*"%>
<%@page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'gpxx.jsp' starting page</title>
    
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
    String a1,a2,a3,a4,a5,a6,e=null;
    int i=0;
           String id=(String)session.getAttribute("id");  
             ResultSet rs=db.executeQuery(id); //数据库查询
             while(rs.next()){
             a1=rs.getString(3);
             a2=rs.getString(5);
                a3=rs.getString(6);
              a4=rs.getString(7);
                 a5=rs.getString(8);
                    a6=rs.getString(9);
                e=a1+"&"+a2+"&"+a3+"&"+a4+"&"+a5+"&"+a6;
             }
              response.getWriter().print(e);                     //向ajax返回值
    response.getWriter().close();   
     %>
  </body>
</html>
