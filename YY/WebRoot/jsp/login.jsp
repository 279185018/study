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
    
    <title>My JSP 'login.jsp' starting page</title>
    
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
    String umoy="0";                                        
    String uname=null;
    String a=null;
   String id=request.getParameter("id");
        String psd=request.getParameter("psd"); //获取账号密码
          ResultSet rs=db.executeQuery(id); //数据库查询
           if(rs.next()){
            String upsd=rs.getString(2);
           if(upsd.equals(psd)){
              uname=rs.getString(3);
               umoy=rs.getString(4);
               a=psd+"&"+uname+"&"+umoy; 
              }else{
              a="psd";
              }
          } else {
           a="id";                      //账号错误
           }
        session.setAttribute("umoy",umoy);
            session.setAttribute("id",id);
        session.setAttribute("uname",uname);
    response.getWriter().print(a);                     //向ajax返回值
    response.getWriter().close();                            
    %>
  </body>
</html>
