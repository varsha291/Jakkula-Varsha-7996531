import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class FileWriting {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter text: ");
        String msg = sc.nextLine();

        try {

            FileWriter fw =
                    new FileWriter("output.txt");

            fw.write(msg);

            fw.close();

            System.out.println(
                    "Data written successfully");

        } catch(IOException e) {

            System.out.println(e);
        }
    }
}