package repeticao;

import java.util.Scanner;

public class AreaTriangulo {

	public static void main(String[] args) {
		
		/*
		 * Exercício
		 * 
		 * De forma geral, a área de um triângulo consiste na metade da multiplicação da base pela altura.
		 * Faça um programa que calcule a àrea de um triângulo, porém, não permita que as entradadas de 
		 * dados (base e altura) sejam menores ou iguais à zero.
		 * 
		 * Observação:
		 * - Enquanto o usuário digitar uma entrada inválida, o programa não deve avançar.
		 */
		
		Scanner sc = new Scanner(System.in);
		
		double altura = 0, area, base = 0;
		
		System.out.print("- Informe a Base do Triângulo: ");
		base = sc.nextDouble();
		
		while ((base <= 0)) {		
			System.out.printf("\nA Base do Triângulo não pode ter valor menor ou igual à zero.");
			System.out.printf("\nInforme a Base do Triângulo: ");
			base = sc.nextDouble();
		}
		
		System.out.printf("\n-Informe a Altura do Triângulo: ");
		altura = sc.nextDouble();
		
		while ((altura <= 0)) {		
			System.out.printf("\nA Altura do Triângulo não pode ter valor menor ou igual à zero.");
			System.out.printf("\nInforme a Altura do Triângulo: ");
			altura = sc.nextDouble();
		}
		
		area = ((base * altura) / 2);
		
		System.out.printf("\nA Área do Triângulo é: %f.", area);
		
		sc.close();		
	}
}
