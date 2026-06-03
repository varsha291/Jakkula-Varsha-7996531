import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JDBCConnection {

    public static void main(String[] args) {

        try {

            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con =
                    DriverManager.getConnection(
                            "jdbc:mysql://localhost:3306/studentdb",
                            "root",
                            "password");

            Statement st = con.createStatement();

            ResultSet rs =
                    st.executeQuery("select * from students");

            while(rs.next()) {

                System.out.println(
                        rs.getInt(1) + " " +
                        rs.getString(2));
            }

            con.close();

        } catch(Exception e) {

            System.out.println(e);
        }
    }
}