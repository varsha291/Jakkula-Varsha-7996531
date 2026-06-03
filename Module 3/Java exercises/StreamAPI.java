import java.util.Arrays;
import java.util.List;

public class StreamAPI {

    public static void main(String[] args) {

        List<Integer> nums =
                Arrays.asList(
                        10,11,12,13,14,15);

        nums.stream()
                .filter(x -> x % 2 == 0)
                .forEach(System.out::println);
    }
}