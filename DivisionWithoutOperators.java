package DailyTasks;

import java.util.Scanner;

public class DivisionWithoutOperators {

	public static void main(String[] args) {

//Getting UserIp Dividend and Divisor     	
		Scanner sc = new Scanner(System.in);
		int dividend = sc.nextInt();
		int divisor = sc.nextInt();
//Initializing quotient as 0		
		int quotient = 0;
//Initialize dividend value to remainder		
		int remainder = dividend;
//Subtract divisor value from remainder
		while (remainder >= divisor) {
			remainder -= divisor;
			quotient++;
		}
//Print the remainder and quotient value
		System.out.println("Quotient: " + quotient);
		System.out.println("Remainder: " + remainder);
//Close the Scanner class		
		sc.close();
	}
}