import java.io.File;
import java.util.Scanner;

public class FileReading {

    public static void main(String[] args) {

        try {

            File f = new File("output.txt");

            Scanner sc = new Scanner(f);

            while(sc.hasNextLine()) {

                System.out.println(
                        sc.nextLine());
            }

            sc.close();

        } catch(Exception e) {

            System.out.println(e);
        }
    }
}