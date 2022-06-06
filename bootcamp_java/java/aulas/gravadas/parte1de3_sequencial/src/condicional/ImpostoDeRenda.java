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

		double aliquota, baseCalculo, inss, renda;
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Informe a renda: ");
		renda = sc.nextDouble();
		
		if (renda < 1903.99) {
			
			System.out.printf("- A renda deste funcionário é: R$ %.2f. \n", renda);
			System.out.println("- Este funcionário é isento.");
			System.out.println("- Dedução do IR: R$ 0,00.");
			
		} else if (renda < 2826.66) {
			
		} else if (renda < 3751.07) {
			aliquota    = (15.0 / 100.0);
			inss        = (renda * aliquota);
			baseCalculo = (renda - inss);
			
			System.out.printf("- A renda deste funcionário é: R$ %.2f. \n", renda);
			System.out.println("- A alíquota é de 15%.");
			System.out.printf("R$ %.2f * %.2f = %.2f ", renda, aliquota, inss);
			System.out.printf("- O INSS é de %.2f. \n", inss);
			System.out.printf("- A Base de Cálculo do Imposto de Renda é: R$ %.2f", baseCalculo);
			
		} else if (renda < 4664.69) {
			
		} else if (renda > 4664.68) {
			
		} else {
			
		}
		
		//System.out.printf("O seu IMC é %.2f, e, está classificado como %s.", imc, classificacao);
		
		sc.close();

	}

}
