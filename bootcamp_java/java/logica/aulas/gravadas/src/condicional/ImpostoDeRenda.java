package condicional;

import java.util.Scanner;

public class ImpostoDeRenda {

	public static void main(String[] args) {

		/*
		 * Exercício
		 * 
		 * O programa recebe a renda de um funcionário.
		 * Calcule e mostre o desconto do imposto de renda, com base na tabela abaixo:
		 * 
		 * -> Valor: até R$ 1.903,98      -> Alíquota: Isento -> Dedução IR: R$ 0,00
		 * -> Valor: R$ 2.826,65          -> Alíquota: 7,5%   -> Dedução IR: R$ 142,80
		 * -> Valor: R$ 3.751,06          -> Alíquota: 15%    -> Dedução IR: R$ 354,80
		 * -> Valor: R$ 4.664,68          -> Alíquota: 22,5%  -> Dedução IR: R$ 636,13
		 * -> Valor: acima de R$ 4.664,68 -> Alíquota: 27,5%  -> Dedução IR: R$ 869,36
		 */

		double aliquota, renda;
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Informe a renda: ");
		renda = sc.nextDouble();
		
		if (renda < 1903.99) {
			
			System.out.printf("- A renda é: R$ %.2f. \n", renda);
			System.out.println("- Dedução do IR: R$ 0,00.");
			System.out.println("- Este funcionário é isento.");
			
		} else if (renda < 2826.66) {
			aliquota    = (7.5 / 100.0);
			
			System.out.printf("- A renda é: R$ %.2f. \n", renda);
			System.out.println("- A alíquota é de 7,5%.");
			System.out.println("- A dedução é de R$ 142,80.");
			System.out.printf("O desconto do IR é de R$ %.2f.", ((renda * aliquota) - 142.80));			
		} else if (renda < 3751.07) {
			aliquota    = (15.0 / 100.0);
			
			System.out.printf("- A renda é: R$ %.2f. \n", renda);
			System.out.println("- A alíquota é de 15%.");
			System.out.println("- A dedução é de R$ 354,80.");
			System.out.printf("O desconto do IR é de R$ %.2f.", ((renda * aliquota) - 354.80));
			
		} else if (renda < 4664.69) {
			aliquota    = (22.5 / 100.0);
			
			System.out.printf("- A renda é: R$ %.2f. \n", renda);
			System.out.println("- A alíquota é de 22.5%.");
			System.out.println("- A dedução é de R$ 636,13.");
			System.out.printf("O desconto do IR é de R$ %.2f.", ((renda * aliquota) - 636.13));
		} else {
			aliquota    = (27.5 / 100.0);
			
			System.out.printf("- A renda é: R$ %.2f. \n", renda);
			System.out.println("- A alíquota é de 27.5%.");
			System.out.println("- A dedução é de R$ 869,36.");
			System.out.printf("O desconto do IR é de R$ %.2f.", ((renda * aliquota) - 869.36));
		}

		sc.close();

	}

}
