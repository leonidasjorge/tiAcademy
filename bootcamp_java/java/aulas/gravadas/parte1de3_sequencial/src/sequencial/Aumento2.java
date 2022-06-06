package sequencial;

import java.util.Scanner;

public class Aumento2 {

	public static void main(String[] args) {
		
		/*
		 * Exercício
		 * 
		 * Informe o percentual de aumento, e, calcule o novo salário bruto do funcionário.
		 * 
		 */
		
		double novoSalarioBruto, percentual, salarioBruto;
		
		Scanner sc = new Scanner(System.in);
		
		System.out.print("- Informe o salário bruto: R$ \n");
		salarioBruto = sc.nextDouble();
		
		System.out.print("- Informe o percentual de aumento: \n");
		percentual = sc.nextDouble();
		
		novoSalarioBruto = ((salarioBruto * (1 + (percentual/100))));

		System.out.printf("- O salário bruto antigo é R$ %.2f. \n", salarioBruto);
		System.out.printf("- O percentual de aumento é %.2f. \n", percentual);
		System.out.printf("- O novo salário bruto é R$ %.2f.", novoSalarioBruto);
		
		sc.close();

	}

}
