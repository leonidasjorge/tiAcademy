package repeticao;

import java.util.Scanner;

public class AumentoSalarioMinimo {

	public static void main(String[] args) {
		
		/*
		 * Exercício
		 * 
		 * Um funcionário foi admitido em 2016, recebendo um salário inicial de R$ 1.000,00, 
		 * que será reajustado anualmente com base no percentual de aumento do salário mínimo.
		 * Calcule o salário do funcionário no ano atual, com base na tabela abaixo:
		 * 
		 * -> Ano: 2015 -> Percentual: 8,80%;
		 * -> Ano: 2016 -> Percentual: 11,67%;
		 * -> Ano: 2017 -> Percentual: 6,47%;
		 * -> Ano: 2018 -> Percentual: 1,81%;
		 * -> Ano: 2019 -> Percentual: 4,61%;
		 * -> Ano: 2020 -> Percentual: 4,68%;
		 * -> Ano: 2021 -> Percentual: 5,26%;
		 * 
		 * -> Ano: 2022 -> Percentual: 9,24%;
		 * 
		 * Observação:
		 * - O programa deve receber de entrada, o ano atual e o percentual de aumento.
		 */
		
		try (Scanner sc = new Scanner(System.in)) {
			
			int           anoAdmissao = 2016;
			int              contador;
			double            aumento = 0;
			double         percentual = 0;
			double percentualDigitado = 0;
			double            salario = 1000.00;
			
			System.out.println("Digite o ano atual: ");
			int anoAtual = sc.nextInt();
			
			if (anoAtual == 2016) {
				System.out.println("\nEste funcionário ainda não possui 1 ano de empresa.");
			} else if (anoAtual > 2016) {
				System.out.printf("\n- Salário Inicial no ano de %d: R$ %.2f.\n\n", anoAdmissao, salario);
			} else {
				System.out.println("\nFuncionário admitido no ano de 2016.");
				System.out.println("O ano de 2016, é o menor ano atual que você pode digitar.");
			}
			
			for (contador = 2016; contador < anoAtual; contador++) {
				
				anoAdmissao++;
				
				if (anoAdmissao == 2017) {
					percentual = 6.47/100;
					System.out.printf("- Percentual de Aumento do Salário Mínimo para o ano de %d: %f.", anoAdmissao, percentual);
					
					aumento = (salario * percentual);
					System.out.printf("\n- Aumento de R$ %.2f.\n", aumento);
					
					salario = (salario + aumento);
					System.out.printf("\n- Salário no ano de %d: R$ %.2f.\n\n", anoAdmissao, salario);
				} else if (anoAdmissao == 2018) {
					percentual = 1.81/100;
					System.out.printf("- Percentual de Aumento do Salário Mínimo para o ano de %d: %f.", anoAdmissao, percentual);
					
					aumento = (salario * percentual);
					System.out.printf("\n- Aumento de R$ %.2f.\n", aumento);
					
					salario = (salario + aumento);
					System.out.printf("\n- Salário no ano de %d: R$ %.2f.\n\n", anoAdmissao, salario);
				} else if (anoAdmissao == 2019) {
					percentual = 4.61/100;
					System.out.printf("- Percentual de Aumento do Salário Mínimo para o ano de %d: %f.", anoAdmissao, percentual);
					
					aumento = (salario * percentual);
					System.out.printf("\n- Aumento de R$ %.2f.\n", aumento);
					
					salario = (salario + aumento);
					System.out.printf("\n- Salário no ano de %d: R$ %.2f.\n\n", anoAdmissao, salario);
				} else if (anoAdmissao == 2020) {
					percentual = 4.68/100;
					System.out.printf("- Percentual de Aumento do Salário Mínimo para o ano de %d: %f.", anoAdmissao, percentual);
					
					aumento = (salario * percentual);
					System.out.printf("\n- Aumento de R$ %.2f.\n", aumento);
					
					salario = (salario + aumento);
					System.out.printf("\n- Salário no ano de %d: R$ %.2f.\n\n", anoAdmissao, salario);
				} else if (anoAdmissao == 2021) {
					percentual = 5.26/100;
					System.out.printf("- Percentual de Aumento do Salário Mínimo para o ano de %d: %f.", anoAdmissao, percentual);
					
					aumento = (salario * percentual);
					System.out.printf("\n- Aumento de R$ %.2f.\n", aumento);
					
					salario = (salario + aumento);
					System.out.printf("\n- Salário no ano de %d: R$ %.2f.\n\n", anoAdmissao, salario);
				} else {
					if ((anoAtual > 2021) && (anoAdmissao < anoAtual)) {
						System.out.printf("- Digite o Percentual de Aumento do Salário Mínimo para o ano de %d: \n", anoAdmissao);
						percentualDigitado = sc.nextDouble();
						
						percentualDigitado /= 100;
						System.out.printf("\n- Percentual de Aumento do Salário Mínimo para o ano de %d: %f.", anoAdmissao, percentualDigitado);
						
						aumento = (salario * percentualDigitado);
						System.out.printf("\n- Aumento de R$ %.2f.\n", aumento);
						
						salario = (salario + aumento);
						System.out.printf("\n- Salário no ano de %d: R$ %.2f.\n\n", anoAdmissao, salario);
					} else {
						System.out.printf("- Digite o Percentual de Aumento do Salário Mínimo para o ano de %d: \n", anoAtual);
						double percentualAtual = sc.nextDouble();
						
						percentualAtual /= 100;
						System.out.printf("\n- Percentual de Aumento do Salário Mínimo para o ano de %d: %f.", anoAtual, percentualAtual);
						
						aumento = (salario * percentualAtual);
						System.out.printf("\n- Aumento de R$ %.2f.\n", aumento);
						
						salario = (salario + aumento);
						System.out.printf("\n- Salário no ano de %d: R$ %.2f.\n\n", anoAtual, salario);
					}
				}
			}

			sc.close();
		}
	}

}
