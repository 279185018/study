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
    
    <title>My JSP 'zc.jsp' starting page</title>
    
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
    request.setCharacterEncoding("utf-8");
    String id=new String(request.getParameter("zid")); 
   String password=new String(request.getParameter("zpassword")); 
    String name=new String(request.getParameter("zname")); 
      String sex=new String(request.getParameter("sex")); 
        String age=new String(request.getParameter("age")); 
          String yx=new String(request.getParameter("yx")); 
            String xq=new String(request.getParameter("xq")); 
              String lofilm=new String(request.getParameter("lofilm")); 
     ResultSet rs=db.executeQuery(id);
       if(rs.next()){
     out.print("<script language='javaScript'> alert('检测到账号已存在，请勿重复注册');</script>");
        response.setHeader("refresh", "0;url=../zc.html");
    }
    else{
    db.zc(id,password,name,sex,age,yx,xq,lofilm);
      session.setAttribute("umoy","500");
        session.setAttribute("uname",name);
         session.setAttribute("id",id);
     out.print("<script language='javaScript'> alert('注册成功，将为您返回首页');</script>");
        response.setHeader("refresh", "0;url=../index.html");
    }
     %>
  </body>
</html>
