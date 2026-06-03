import java.util.Scanner;

public class ArraySumAverage {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("How many numbers? ");
        int size = sc.nextInt();

        int arr[] = new int[size];

        int sum = 0;

        for(int i = 0; i < size; i++) {

            System.out.print("Enter value: ");
            arr[i] = sc.nextInt();

            sum += arr[i];
        }

        double avg = (double)sum / size;

        System.out.println("Sum = " + sum);
        System.out.println("Average = " + avg);
    }
}