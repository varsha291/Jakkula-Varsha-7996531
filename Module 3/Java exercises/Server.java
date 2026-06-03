import java.io.DataInputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {

    public static void main(String[] args)
            throws Exception {

        ServerSocket ss =
                new ServerSocket(5000);

        System.out.println(
                "Server Started");

        Socket s =
                ss.accept();

        DataInputStream dis =
                new DataInputStream(
                        s.getInputStream());

        String msg =
                dis.readUTF();

        System.out.println(
                "Client : " + msg);

        ss.close();
    }
}