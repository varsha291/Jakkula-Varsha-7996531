import java.util.ArrayList;
import java.util.Collections;

public class LambdaExpressions {

    public static void main(String[] args) {

        ArrayList<String> list =
                new ArrayList<>();

        list.add("Orange");
        list.add("Apple");
        list.add("Banana");

        Collections.sort(list,
                (a,b)->a.compareTo(b));

        System.out.println(list);
    }
}