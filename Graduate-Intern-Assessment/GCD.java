
import java.util.Scanner;

public class GCD {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the first number: ");
        int num1 = scanner.nextInt();
        System.out.print("Enter the second number: ");
        int num2 = scanner.nextInt();
        System.out.println("GCD: " + findGCD(num1, num2));

        scanner.close();
    }

    public static int findGCD(int a, int b) {
         while (b != 0) {
            int c = b;
            b =  a % b;
            a = c; 
        }
        return a;

    }
    
}