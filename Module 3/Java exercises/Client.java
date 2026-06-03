import java.io.DataOutputStream;
import java.net.Socket;

public class Client {

    public static void main(String[] args)
            throws Exception {

        Socket s =
                new Socket(
                        "localhost",
                        5000);

        DataOutputStream dos =
                new DataOutputStream(
                        s.getOutputStream());

        dos.writeUTF(
                "Hello Server");

        dos.flush();

        s.close();
    }
}