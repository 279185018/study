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
    
    <title>My JSP 'text.jsp' starting page</title>
    
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
    int i;
    int k;
    String s=request.getParameter("t");
    int t=Integer.parseInt(s);
    String a=null;
    String b=null;
    String c=null;
          ResultSet rs=db.text(t); //数据库查询 
          rs.last();// 移动到最后
		k=rs.getRow();// 获得结果集长度
		a=Integer.toString(k)+"!";
		rs.beforeFirst();// 返回第一个
           if(rs.next()){
             for(i=0;i<k;i++){
             b=rs.getString(1);
               c=rs.getString(2);
             a=a+b+"#"+c+"&";
             rs.next();
             }
           }

    response.getWriter().println(a);                     //向ajax返回值
    response.getWriter().close();                            
    %>
  </body>
</html>
