package sequencial;

import java.util.Scanner;

public class DescontoInss {

	public static void main(String[] args) {

		/*
		 * Exercício
		 * 
		 * Do salário bruto de um funcionário, é descontado 11% para o INSS.
		 * Calcule e mostre o salário com desconto.
		 * 
		 */
		
		double desconto, salarioBruto;
		
		Scanner sc = new Scanner(System.in);
		
		System.out.print("- Informe o salário bruto: R$ ");
		salarioBruto = sc.nextDouble();
		
		desconto = (salarioBruto * 0.11);
		System.out.printf("- '11/100' referente ao desconto do INSS corresponde há R$ %.2f. \n", desconto);

		salarioBruto = (salarioBruto - desconto);
		System.out.printf("- O novo salário bruto com redução dos '11/100' é R$ %.2f.", salarioBruto);
		
		sc.close();

	}

}
