package DailyTasks;

import java.util.Scanner;

public class MultiplyWithoutStar {

// Create a Main Method
	public static void main(String[] args) {

// Get the UserIp Multiplying value 		
		Scanner sc = new Scanner(System.in);
		int UserIpValue1 = sc.nextInt();
		int UserIpValue2 = sc.nextInt();
		int MultiplicationValue = 0;
// Add the second values for first value times	   
		for (int i = 0; i < UserIpValue2; i++) {
			MultiplicationValue += UserIpValue1;
		}
		System.out.println("Values after Multiplication" + MultiplicationValue);
// Closing the Scanner class	   
		sc.close();
	}

}
