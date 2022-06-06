package condicional;

import java.util.Scanner;

public class Calculadora {

	public static void main(String[] args) {
		
		int opcao;
		double num1, num2;
		
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Informe o 1º valor: ");
		num1 = sc.nextDouble();
		System.out.println("Informe o 2º valor: ");
		num2 = sc.nextDouble();
		
		System.out.println("\nCalculadora \n");
		System.out.println("1. Soma \n"
				+ "2. Subtração \n"
				+ "3. Multiplicação \n"
				+ "4. Divisão \n");
		System.out.println("Escolha uma das opções acima: ");
		
		opcao = sc.nextInt();
		
		switch (opcao) {
			case 1: {
				System.out.printf("%f + %f = %f.", num1, num2, num1 + num2);
				break;
			}
			case 2: {
				System.out.printf("%f - %f = %f.", num1, num2, num1 - num2);
				break;
			}
			case 3: {
				System.out.printf("%f * %f = %f.", num1, num2, num1 * num2);
				break;
			}
			case 4: {
				System.out.printf("%f / %f = %f.", num1, num2, num1 / num2);
				break;
			}
			default:
				System.out.println("Opção Inválida.");
			}
		
		sc.close();

	}

}
