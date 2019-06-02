<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'dl.jsp' starting page</title>
    
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
       <% 
         String t=request.getParameter("t");
  String uname=(String)session.getAttribute("uname");
     String umoy=(String)session.getAttribute("umoy");
       String a=null;
          if(t.equals("y")){                 //说明是退出操作
        umoy=null;
        uname=null;
          session.setAttribute("umoy",umoy);
        session.setAttribute("uname",uname);
        }
     if(uname!=null){                     //跳转时是否登录判断
 a=umoy+"&"+uname;
 }else{
 a="no";
 }
   response.getWriter().print(a);                    
    response.getWriter().close(); 
       %>
  </body>
</html>
