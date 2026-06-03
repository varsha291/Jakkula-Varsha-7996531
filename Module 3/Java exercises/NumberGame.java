import java.util.Random;
import java.util.Scanner;

public class NumberGame {
    public static void main(String[] args) {

        Random random = new Random();
        int target = random.nextInt(100) + 1;

        Scanner sc = new Scanner(System.in);

        int guess;

        do {
            System.out.print("Guess a number (1-100): ");
            guess = sc.nextInt();

            if(guess > target)
                System.out.println("Too High!");
            else if(guess < target)
                System.out.println("Too Low!");

        } while(guess != target);

        System.out.println("Correct! You guessed it.");
    }
}