package condicional;

import java.util.Scanner;

public class Par {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		int num;
		
		System.out.println("Informe um número: ");
		num = sc.nextInt();
		
		if (num % 2 == 0) {
			System.out.printf("O número %d é par. \n", num);
		}
		
		System.out.println("Encerrando a execução.");
		
		sc.close();

	}

}
