package condicional;

import java.util.Scanner;

public class DiaDaSemana {

	public static void main(String[] args) {
		
		/*
		 * Exercício
		 * 
		 * O programa deve receber um valor inteiro de entrada entre 1 e 7, onde, 1 é domingo, e, 7 é sábado, referente aos dias da semana.
		 * O retorno deve ser o dia da semana.
		 */
		
		int opcao;
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("\nDia da Semana \n");
		System.out.println("1. Domingo \n"
				+ "2. Segunda-feira \n"
				+ "3. Terça-feira \n"
				+ "4. Quarta-feira \n"
				+ "5. Quinta-feira \n"
				+ "6. Sexta-feira \n"
				+ "7. Sábado.");
		System.out.println("Escolha uma das opções acima: ");
		
		opcao = sc.nextInt();
		
		switch (opcao) {
			case 1: {
				System.out.printf("Domingo.");
				break;
			}
			case 2: {
				System.out.printf("Segunda-feira.");
				break;
			}
			case 3: {
				System.out.printf("Terça-feira.");
				break;
			}
			case 4: {
				System.out.printf("Quarta-feira.");
				break;
			}
			case 5: {
				System.out.printf("Quinta-feira.");
				break;
			}
			case 6: {
				System.out.printf("Sexta-feira.");
				break;
			}
			case 7: {
				System.out.printf("Sábado.");
				break;
			}
			default:
				System.out.println("Opção Inválida.");
			}
		
		sc.close();		

	}

}
