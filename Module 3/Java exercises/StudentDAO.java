import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class StudentDAO {

    public static void main(String[] args) {

        try {

            Connection con =
                    DriverManager.getConnection(
                            "jdbc:mysql://localhost:3306/studentdb",
                            "root",
                            "password");

            PreparedStatement ps =
                    con.prepareStatement(
                            "insert into students values(?,?)");

            ps.setInt(1,101);
            ps.setString(2,"Ravi");

            ps.executeUpdate();

            System.out.println(
                    "Record Inserted");

            PreparedStatement ps2 =
                    con.prepareStatement(
                            "update students set name=? where id=?");

            ps2.setString(1,"Kiran");
            ps2.setInt(2,101);

            ps2.executeUpdate();

            System.out.println(
                    "Record Updated");

            con.close();

        } catch(Exception e) {

            System.out.println(e);
        }
    }
}