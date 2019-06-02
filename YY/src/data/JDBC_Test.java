package data;
import java.sql.*;

public class JDBC_Test {
	 Connection conn = null;
	 Statement stmt=null;
    private Connection getConnection(){                   //连接数据库
    	 Connection con = null;
    	  try
          {
              Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
              con = DriverManager.getConnection("jdbc:mysql://localhost:3306/yy?useSSL=false&serverTimezone=UTC","root", "1234");
           if(con==null){ System.out.println("8");}
          } 
          catch (Exception ex) {
             System.out.println("连接失败");
          } 
    	  return con;
    }
    public ResultSet executeQuery(String id) {                         //登录判断,查询
    	ResultSet rs = null;
    	conn=getConnection();
        try {
         stmt=conn.createStatement();
            rs = stmt.executeQuery("select * from user where id='"+id+"'");
        } catch (Exception ex) {
        	System.out.println("查询失败EQ");
        }
        return rs;
    } 
    public ResultSet  text(int t){                                       //首页影讯查询
    	ResultSet rs = null;
    	int i=0;
    	 try {
    		 Connection conn=getConnection();
         	Statement stmt=conn.createStatement(); 
         	i=0+(t-1)*10;
             rs = stmt.executeQuery("select tid,tit from text order by tid desc limit "+i+" ,10");
         } catch (Exception ex) {
        	 System.out.println("查询失败text");
         }
         return rs;
    }
    public ResultSet  xx(String id){                                       //购票信息查询
    	ResultSet rs = null;
    	conn=getConnection();
    	 try {
    		
         	Statement stmt=conn.createStatement(); 
             rs = stmt.executeQuery("select fname,tim,zw,cc from u1111 order by num desc limit 0,1");
         } catch (Exception ex) {
        	 System.out.println("查询失败xx");
         }
         return rs;
    }
    public ResultSet zw(String x,String y,String z,String v) {                         //已选座位查询
    	ResultSet rs = null;
    	  conn=getConnection();
        try {
         stmt=conn.createStatement();
            rs = stmt.executeQuery(" select zw from "+v+" where rq='"+x+"' and cc='"+y+"' and fname='"+z+"'");
   
        } catch (Exception ex) {
        	System.out.println("查询失败zw");
        }
        return rs;
    } 
    public void zc(String id,String psd,String user,String sex,String age,String yx,String xq,String lofilm) {                         //注册
    	 
    	conn=getConnection();
        try {
         stmt=conn.createStatement();
          stmt.executeUpdate("INSERT INTO user  VALUES ('"+id+"','"+psd+"','"+user+"',500,'"+sex+"','"+age+"','"+yx+"','"+xq+"','"+lofilm+"')");
          stmt.executeUpdate("create table u"+id+"(num int(255) not null auto_increment,fname varchar(255),tim varchar(255),zw varchar(255),cc varchar(255),primary key(`num`))");
        } catch (Exception ex) {
        	System.out.println("查询失败zc");
        }
       
    } 
    public void gp(String id,String x,String y,String b,String zz) {                         //插入票据信息
 
    	conn=getConnection();
        try {
         stmt=conn.createStatement();
          stmt.executeUpdate("insert into u"+id+"(fname,tim,zw,cc) values('"+b+"','"+x+"','"+zz+"','"+y+"');");
        } catch (Exception ex) {
        	System.out.println("查询失败gp");
        }
       
    } 
    public void gzw(String x,String y,String z,String v,String zw) {                         //售出座位刷新
    	conn=getConnection();
        try {
         stmt=conn.createStatement();

        stmt.executeUpdate(" update "+v+" set zw='"+zw+"' where  rq='"+x+"' and cc='"+y+"' and fname='"+z+"'");
        } catch (Exception ex) {
        	System.out.println("查询失败gzw");
        }
       
    } 
    public void moy(String id,String moy) {                         //更新金额
    	conn=getConnection();
        try {
         stmt=conn.createStatement();
          stmt.executeUpdate("update user set moy='"+moy+"'where id='"+id+"'" );
        } catch (Exception ex) {
        	System.out.println("查询失败moy");
        }
       
    } 
    public ResultSet  film(int t){                                          //首页影片查询
    	ResultSet rs = null;
    	int i=0;
    	 try {
    		 Connection conn=getConnection();
         	Statement stmt=conn.createStatement(); 
         	i=0+(t-1)*10;
             rs = stmt.executeQuery("select fid,fname from film order by fid desc limit "+i+",10");
         } catch (Exception ex) {
        	 System.out.println("查询失败film");
         }
         return rs;
    }
    public ResultSet  ffc(int t){                                          //首页影片查询
    	ResultSet rs = null;
    	 try {
    		 Connection conn=getConnection();
         	Statement stmt=conn.createStatement(); 
             rs = stmt.executeQuery("select fh,fs,fx from film where fid="+t);
         } catch (Exception ex) {
        	 System.out.println("查询失败ffc");
         }
         return rs;
    }
    public ResultSet  tt(int t){                                          //影片序号查询影片名字
    	ResultSet rs1 = null;
    	 try {
         
    		 Connection conn=getConnection();
         	Statement stmt=conn.createStatement(); 
             rs1 = stmt.executeQuery("select fname from film where fid="+t); 
         } catch (Exception ex) {
        	 System.out.println("查询失败tt");
         }
         return rs1;
    }
    public ResultSet  fc(String t,String z){                       //   当日场次信息查询                               
    	ResultSet rs = null;
    	 try {
    		 Connection conn=getConnection();
         	Statement stmt=conn.createStatement(); 
             rs = stmt.executeQuery("select fcc from fc"+t+" where fday='"+z+"'");
         } catch (Exception ex) {
        	 System.out.println("查询失败fc");
         }
         return rs;
    }
    public ResultSet  gpxx(String id){                       //   购票信息查询                               
    	ResultSet rs = null;
    	conn=getConnection();
    	 try { 
         stmt=conn.createStatement(); 
             rs = stmt.executeQuery("select * from u"+id+" order by num desc");
         } catch (Exception ex) {
        	 System.out.println("查询失败gpxx");
         }
         return rs;
    }
    public void close() {                                             //关闭数据库
        try {
            stmt.close();
            conn.close();
        } catch (Exception e) {
        }
    }
   
}
