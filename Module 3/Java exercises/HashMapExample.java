import java.util.HashMap;
import java.util.Scanner;

public class HashMapExample {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        HashMap<Integer,String> map =
                new HashMap<>();

        map.put(101,"Ravi");
        map.put(102,"Kiran");
        map.put(103,"Sai");

        System.out.print(
                "Enter student id: ");

        int id = sc.nextInt();

        System.out.println(
                map.get(id));
    }
}