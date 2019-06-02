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
    
    <title>My JSP 'cz.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<link rel="stylesheet" type="text/css" href="styles.css">

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
   String moy=request.getParameter("moy1");
         id=(String)session.getAttribute("id");
         System.out.println("8888"); 
         System.out.println(moy);     
 
                 System.out.println("6589");              
       ResultSet rs=db.executeQuery(id);
       if(rs.next()){
       String m1=rs.getString(4);
          m2=Integer.parseInt(m1);       
         pt=Integer.parseInt(moy);  
          m2=m2+pt;
         String m3=String.valueOf(m2);
            session.setAttribute("umoy",m3);
                          System.out.println(m3); 
           db.moy(id,m3); //刷新金钱           
          a="yes";
          System.out.println(a); 
      }
        response.getWriter().print(a);                     //向ajax返回值
    response.getWriter().close();

  %>
 </body>
 </html>
