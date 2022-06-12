package sequencial;

import java.util.Scanner;

public class Aumento1 {

	public static void main(String[] args) {

		/*
		 * Exercício
		 * 
		 * Calcule o aumento de 5% sobre o salário bruto de um funcionário.
		 * 
		 */
		
		double aumento, salarioBruto;
		
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Informe o salário bruto: R$ ");
		salarioBruto = sc.nextDouble();
		
		aumento = (salarioBruto * 0.05);
		System.out.printf("O aumento de '5/100' sobre o salário bruto é de R$ %.2f. \n", aumento);

		salarioBruto = (salarioBruto + aumento);
		System.out.printf("O novo salário bruto é R$ %.2f.", salarioBruto);
		
		sc.close();
	}

}
