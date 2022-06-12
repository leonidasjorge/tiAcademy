package repeticao;

import java.util.Scanner;

public class AlunosAprovadosReprovados {

	public static void main(String[] args) {
		
		/*
		 * Exercício
		 * 
		 * Faça um programa que receba a nota de 10 alunos.
		 * Para cada nota recebida, se a nota for maior ou igual a 6.0, o aluno está aprovado, caso contrário, o aluno está reprovado.
		 * No final da execução, o programa deve apresentar a quantidade de alunos aprovados e reprovados, além da média da turma.
		 */
		
		try (Scanner sc = new Scanner(System.in)) {
			double total = 0;
			int aprovado = 0, contador, reprovado = 0;
			
			for (contador = 0; contador <= 9; contador++) {
				System.out.printf("\nDigite a %dª nota: \n", contador + 1);
				double nota = sc.nextDouble();
				
				total += nota;
				
				if (nota >= 6.0) {
					aprovado += 1;
				} else {
					reprovado += 1;
				}
			}
			
			double media = (total / contador);
			
			System.out.printf("\n- Total de Alunos da Classe: %d. \n", contador);
			System.out.printf("-- Quantidade de Alunos Aprovados: %d. \n", aprovado);
			System.out.printf("-- Quantidade de Alunos Reprovados: %d. \n\n", reprovado);
			System.out.printf("- Total de notas dos alunos %.1f. \n", total);
			System.out.printf("- Média da turma é %.1f. \n", media);
			
			sc.close();
		}

	}

}
